var express = require('express');
var bodyParser = require('body-parser');
var kpi_matric = express();

    kpi_matric.use(bodyParser.json());
    kpi_matric.use(bodyParser.urlencoded({ extended: true }));

kpi_matric.get('/lookup/kpi_matric', function (req, res) {
    res.send('หน่วยตัวชี้วัด');
});

module.exports = kpi_matric;