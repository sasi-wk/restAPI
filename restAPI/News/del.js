var express = require('express');
var bodyParser = require('body-parser');
var delnews = express();

    delnews.use(bodyParser.json());
    delnews.use(bodyParser.urlencoded({ extended: true }));

delnews.delete('/news/:id', function (req, res) {
    var id = req.params.id;
    res.send('ลบข้อมูลข่าวที่ระบุ ID = '+id);
});

module.exports = delnews;