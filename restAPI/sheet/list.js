var express = require('express');
var bodyParser = require('body-parser');
var listsheet = express();

    listsheet.use(bodyParser.json());
    listsheet.use(bodyParser.urlencoded({ extended: true }));

listsheet.get('/sheet', function (req, res) {
    res.send('เรียกรายการการบันทึกฟอร์มตัวชี้วัดที่สามารถบันทึกได้');
});

module.exports = listsheet;