var express = require('express');
var bodyParser = require('body-parser');
var deltemp = express();

    deltemp.use(bodyParser.json());
    deltemp.use(bodyParser.urlencoded({ extended: true }));

deltemp.delete('/temp/:id', function (req, res) {
    var id = req.params.id;
    res.send('ลบข้อมูลแม่แบบตัวชี้วัดที่ระบุ ID = '+id);
});

module.exports = deltemp;