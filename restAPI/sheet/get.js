var express = require('express');
var bodyParser = require('body-parser');
var getsheet = express();

    getsheet.use(bodyParser.json());
    getsheet.use(bodyParser.urlencoded({ extended: true }));

getsheet.get('/sheet/:round/:acce', function (req, res) {
    var round = req.params.round;
    var acce = req.params.acce;
    var hospital = req.query.hospital;
    var prev = req.query.prev;
    res.send('เรียกข้อมูลการบันทึกฟอร์มตัวชี้วัดที่ระบุ \nRound = '+round+'\acce = '+acce+'\nhospital = '+hospital+'\prev = '+prev);
});

module.exports = getsheet;