var express = require('express');
var bodyParser = require('body-parser');
var kpi_frequency = express();

    kpi_frequency.use(bodyParser.json());
    kpi_frequency.use(bodyParser.urlencoded({ extended: true }));

kpi_frequency.get('/lookup/kpi_frequency', function (req, res) {
    res.send('ความถี่ในการเก็บข้อมูลตัวชี้วัด');
});

module.exports = kpi_frequency;