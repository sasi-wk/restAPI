var express = require('express');
var bodyParser = require('body-parser');
var getkpi = express();

    getkpi.use(bodyParser.json());
    getkpi.use(bodyParser.urlencoded({ extended: true }));

getkpi.get('/kpi/:id', function (req, res) {
    var id = req.params.id;
    var ml = req.query.ml;
    res.send('เรียกข้อมูลตัวชี้วัดที่ระบุ ID = '+id);
});

module.exports = getkpi;