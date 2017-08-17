var express = require('express');
var auth = express();
var bodyParser = require('body-parser');
auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({ extended: true }));


auth.post('/user', function (req, res) {
    var usename = req.body.username;
    var usepass = req.body.password;
    res.send('ยืนยันตัวผู้ใช้ระบบ' + '<br>' + 'Username : ' + usename + '<br>' + 'Password : ' + usepass+'<br>'+JSON.stringify(req.body));
});

module.exports = auth;
