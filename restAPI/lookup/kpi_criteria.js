var express = require('express');
var bodyParser = require('body-parser');
var kpi_criteria = express();

    kpi_criteria.use(bodyParser.json());
    kpi_criteria.use(bodyParser.urlencoded({ extended: true }));

kpi_criteria.get('/lookup/kpi_criteria', function (req, res) {
    res.send('เกณฑ์วัดระดับตัวชี้วัด');
});

module.exports = kpi_criteria;