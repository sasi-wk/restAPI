var express = require('express');
var bodyParser = require('body-parser');
var version = express();

    version.use(bodyParser.json());
    version.use(bodyParser.urlencoded({ extended: true }));

version.get('/lookup/version', function (req, res) {
    res.send('ตรวจสอบ version ของ software');
});

module.exports = version;