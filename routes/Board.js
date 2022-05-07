const express = require('express');
const router = express.Router();
const { Board } = require('../models');

router.get("/", async(req,res) => {
    const listOfBoard = await Study.findAll()
    res.json(listOfBoard);
});

router.post("/", async (req, res) => {
      const boText = req.body;
    
      const all = await Study.create(boText);
      res.json(all);
});

module.exports = router