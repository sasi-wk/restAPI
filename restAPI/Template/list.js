var express = require('express');
var bodyParser = require('body-parser');
var listtemp = express();

    listtemp.use(bodyParser.json());
    listtemp.use(bodyParser.urlencoded({ extended: true }));

listtemp.get('/temp', function (req, res) {
    res.send('เรียกแม่แบบตัวชี้วัดในระบบ');
});

module.exports = listtemp;