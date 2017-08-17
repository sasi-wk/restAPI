var express = require('express');
var bodyParser = require('body-parser');
var pass = express();

    pass.use(bodyParser.json());
    pass.use(bodyParser.urlencoded({ extended: false }));

pass.post('/users/:id/pass', function (req, res) {
   var id = req.params.id;
   var pass = req.body.password;
    res.send('เปลี่ยนรหัสผู้ใช้งานที่ระบุ');
});

module.exports = pass;