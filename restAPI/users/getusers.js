var express = require('express');
var bodyParser = require('body-parser');
var getusers = express();

    getusers.use(bodyParser.json());
    getusers.use(bodyParser.urlencoded({ extended: true }));

getusers.get('/users/:id', function (req, res) {
   var id = req.params.id;
    res.send('เรียกข้อมูลผู้ใช้งานที่ระบุ');
});

module.exports = getusers;