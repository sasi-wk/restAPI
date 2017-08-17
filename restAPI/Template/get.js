var express = require('express');
var bodyParser = require('body-parser');
var gettemp = express();

    gettemp.use(bodyParser.json());
    gettemp.use(bodyParser.urlencoded({ extended: true }));

gettemp.get('/temp/:id', function (req, res) {
    var id = req.params.id;
    var ml = req.query.ml;
    res.send('เรียกข้อมูลแม่แบบตัวชี้วัดที่ระบุ ID = '+id);
});

module.exports = gettemp;