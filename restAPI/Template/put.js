var express = require('express');
var bodyParser = require('body-parser');
var puttemp = express();

    puttemp.use(bodyParser.json());
    puttemp.use(bodyParser.urlencoded({ extended: true }));

puttemp.put('/temp', function (req, res) {
    var parent = req.query.parent;
    res.send('บันทึกข้อมูลแม่แบบตัวชี้วัดที่ระบุ\nข้อมูล= '+JSON.stringify(req.body));
});

module.exports = puttemp;