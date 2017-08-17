var express = require('express');
var bodyParser = require('body-parser');
var putnews = express();

    putnews.use(bodyParser.json());
    putnews.use(bodyParser.urlencoded({ extended: true }));

putnews.post('/news', function (req, res) {
    res.send('บันทึกข้อมูลข่าวที่ระบุ\nข้อมูล= '+JSON.stringify(req.body));
});

module.exports = putnews;