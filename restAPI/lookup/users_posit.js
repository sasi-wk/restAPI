var express = require('express');
var bodyParser = require('body-parser');
var users_posit = express();

    users_posit.use(bodyParser.json());
    users_posit.use(bodyParser.urlencoded({ extended: true }));

users_posit.get('/lookup/users_posit', function (req, res) {
    res.send('ตำแหน่งของผู้ใช้งาน');
});

module.exports = users_posit;