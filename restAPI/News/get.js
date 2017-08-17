var express = require('express');
var bodyParser = require('body-parser');
var getnews = express();

    getnews.use(bodyParser.json());
    getnews.use(bodyParser.urlencoded({ extended: true }));

getnews.get('/news/:id', function (req, res) {
    var id = req.params.id;
    res.send('เรียกข้อมูลข่าวที่ระบุ ID = '+id);
});

module.exports = getnews;