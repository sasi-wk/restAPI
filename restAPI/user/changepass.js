var express = require('express');
var bodyParser = require('body-parser');
var changpass = express();

changpass.use(bodyParser.json());
changpass.use(bodyParser.urlencoded({ extended: true}));

changpass.post('/user/pass',function(req,res){
    var pass = req.body.password;
    res.send('เปลี่ยนรหัสผู้ใช้งานปัจจุบัน\nPassword: '+pass);
});

module.exports = changpass;