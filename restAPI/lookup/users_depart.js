var express = require('express');
var bodyParser = require('body-parser');
var users_depart = express();

    users_depart.use(bodyParser.json());
    users_depart.use(bodyParser.urlencoded({ extended: true }));

users_depart.get('/lookup/users_depart', function (req, res) {
    res.send('ข้อมูลแผนกของผู้ใช้งาน');
});

module.exports = users_depart;