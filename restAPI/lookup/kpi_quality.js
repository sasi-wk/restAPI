var express = require('express');
var bodyParser = require('body-parser');
var kpi_quality = express();

    kpi_quality.use(bodyParser.json());
    kpi_quality.use(bodyParser.urlencoded({ extended: true }));

kpi_quality.get('/lookup/kpi_quality', function (req, res) {
    res.send('มิติคุณภาพของตัวชี้วัด');
});

module.exports = kpi_quality;