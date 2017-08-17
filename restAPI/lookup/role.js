var express = require('express');
var bodyParser = require('body-parser');
var role = express();

    role.use(bodyParser.json());
    role.use(bodyParser.urlencoded({ extended: true }));

role.get('/lookup/role', function (req, res) {
    var su =req.query.su;
    res.send('สิทธิ์การใช้งานระบบ');
});

module.exports = role;