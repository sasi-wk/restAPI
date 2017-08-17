var express = require('express');
var bodyParser = require('body-parser');
var versions = express();

    versions.use(bodyParser.json());
    versions.use(bodyParser.urlencoded({ extended: true }));

versions.get('/lookup/versions/:compatable', function (req, res) {
    var compatable = req.params.compatable;
    res.send('ตรวจสอบความเข้ากันได้ของ software\ncompatable:'+compatable);
});

module.exports = versions;