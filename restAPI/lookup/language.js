var express = require('express');
var bodyParser = require('body-parser');
var language = express();

    language.use(bodyParser.json());
    language.use(bodyParser.urlencoded({ extended: true }));

language.get('/lookup/language', function (req, res) {
    res.send('ตรวจสอบ language ');
});

module.exports = language;