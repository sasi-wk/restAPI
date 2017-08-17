var express = require('express');
var bodyParser = require('body-parser');
var lang = express();

lang.use(bodyParser.json());
lang.use(bodyParser.urlencoded({ extended: true}));

lang.post('/user/lang',function(req,res){
    var id = req.body.id;
    res.send('ตั้งค่าการใช้งานภาษา\nID: '+id);
});

module.exports = lang;