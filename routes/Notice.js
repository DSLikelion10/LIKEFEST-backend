const express = require('express');
const router = express.Router();
const { Notice } = require('../models');
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-Parser');

router.use(bodyParser.json())


router.get("/", async(req,res) => {
    const listOfNotice = await Study.findAll()
    res.json(listOfNotice);
});

router.get('/notices/:id', async(req,res) => {
    const id = req.params.id;
    const notice = await Notice.findByPk(id);
    res.json(notice);
});

router.delete("/:noticeId", async(req,res) => {
    const noticeId = req.params.noticecId;
    await Notice.destroy({
        where: {
            id: noticeId,
        },
    });
    res.json("DELETE NOTICE POST");
});

router.put("/update", async(req,res) => {
    await Notice.update({
        noTitle:req.body.noTitle,
        noText:req.body.noText,
        noImg:req.body.noImg,
        noTag:req.body.noTag},{
        where:{
            id:req.body.id
        }}
    );
    res.json("UPDATE NOTICE POST");
});

    try {
        fs.readdirSync('uploads');
    } catch (error) {
        console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
        fs.mkdirSync('uploads');
    } 

const randomstring = require("randomstring");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); //저장할 폴더
    },
    filename: (req, file, cb) => {     
      var fileName = randomstring.generate(25);
      var mimeType;
      switch (
        file.mimetype // 파일 타입
      ) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }
      //count++;
      cb(null, fileName+"." + mimeType); // 파일 이름 + 파일 타입 형태로 이름 설정
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 크기제한 : 5byte
  },
});


router.post("/", upload.single("img"), async (req, res) => {
  //const { user_id } = res.locals.user;
    const { title,
    studyText,
    username,
    studyDate } = req.body;
    const img = req.file.path;
  //각종 예외처리 생략
  
    const all = await Study.create({
        title,
        studyText,
        username,
        studyDate,
        img,
    });
    res.json(all);
})


module.exports = router
