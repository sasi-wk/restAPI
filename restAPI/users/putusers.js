var express = require('express');
var bodyParser = require('body-parser');
var putusers = express();

    putusers.use(bodyParser.json());
    putusers.use(bodyParser.urlencoded({ extended: true }));

putusers.put('/users', function (req, res) {  
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ : '+JSON.stringify(req.body));
    console.log(req.body);
});

module.exports = putusers;