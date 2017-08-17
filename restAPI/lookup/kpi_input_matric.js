var express = require('express');
var bodyParser = require('body-parser');
var kpi_iput_matric = express();

    kpi_iput_matric.use(bodyParser.json());
    kpi_iput_matric.use(bodyParser.urlencoded({ extended: true }));

kpi_iput_matric.get('/lookup/kpi_iput_matric', function (req, res) {
    res.send('หน่วยการบันทึกตัวชี้วัด');
});

module.exports = kpi_iput_matric;