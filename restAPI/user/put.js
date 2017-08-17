var express = require('express');
var bodyParser = require('body-parser');
var putuser = express();

putuser.use(bodyParser.json());
putuser.use(bodyParser.urlencoded({ extended: true}));

putuser.put('/user',function(req,res){
    res.send('บันทึกข้อมูลผู้ใช้งานปัจจุบัน\n');
});

module.exports = putuser;