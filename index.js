const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//라우터
const noticeRouter = require('./routes/Notice');
const boardRouter = require('./routes/Board');

app.use("/noticec", noticeRouter);
app.use("/board", boardRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

