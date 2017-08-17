var express = require('express');
var bodyParser = require('body-parser');
var matchtemp = express();

    matchtemp.use(bodyParser.json());
    matchtemp.use(bodyParser.urlencoded({ extended: true }));

matchtemp.put('/temp/match', function (req, res) {
    res.send('สร้างแม่แบบของระบบ\nข้อมูล= '+JSON.stringify(req.body));
});

module.exports = matchtemp;