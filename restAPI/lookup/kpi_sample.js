var express = require('express');
var bodyParser = require('body-parser');
var kpi_sample = express();

    kpi_sample.use(bodyParser.json());
    kpi_sample.use(bodyParser.urlencoded({ extended: true }));

kpi_sample.get('/lookup/kpi_sample', function (req, res) {
    res.send('กลุ่มตัวอย่างของตัวชี้วัด');
});

module.exports = kpi_sample;