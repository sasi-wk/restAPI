var express = require('express');
var bodyParser = require('body-parser');
var getdetail = express(); 
    getdetail.use(bodyParser.json());
    getdetail.use(bodyParser.urlencoded({ extended: true}));



var user=require('../data/user');

getdetail.get('/user',function(req,res){
    res.setHeader('content-type', 'application/json')
    res.json(user);
    //res.send('เรียกข้อมูลผู้ใช้งานปัจจุบัน');
});

module.exports = getdetail;
