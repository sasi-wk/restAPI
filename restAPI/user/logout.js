var express = require('express');
var bodyParser = require('body-parser');
var deluser = express();

deluser.use(bodyParser.json());
deluser.use(bodyParser.urlencoded({ extended: true}));

deluser.delete('/user',function(req,res){
    res.send('ออกจากระบบ');
});

module.exports = deluser;