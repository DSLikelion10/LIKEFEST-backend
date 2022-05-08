const express = require('express');
const router = express.Router();
const { Board } = require('../models');
const fs = require('fs');

router.get("/", async(req,res) => {
    const listOfBoard = await Board.findAll()
    res.json(listOfBoard);
});

router.post("/", async (req, res) => {
    const board = req.body;
  
    await Board.create(board);
    res.json(board);
});


module.exports = router
