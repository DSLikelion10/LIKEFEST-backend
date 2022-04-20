const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-Parser');

app.use(express.json());
app.use(cors());

const db = require('./models');

//라우터
const boardRouter = require('./routes/Board');
const noticeRouter = require('./routes/Notice');

app.use(express.static("uploads"));

app.use("/board", boardRouter);
app.use("/notice", noticeRouter);

app.use(cors())
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

