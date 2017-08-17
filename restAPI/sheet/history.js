var express = require('express');
var bodyParser = require('body-parser');
var history = express();

    history.use(bodyParser.json());
    history.use(bodyParser.urlencoded({ extended: true }));

history.get('/sheet/history', function (req, res) {
    res.send('เรียกรายการการบันทึกฟอร์มตัวชี้วัดที่บันทึกและส่งเข้าระบบเรียบรอยแล้ว');
});

module.exports = history;