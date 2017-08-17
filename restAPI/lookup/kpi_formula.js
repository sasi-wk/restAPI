var express = require('express');
var bodyParser = require('body-parser');
var kpi_formular = express();

    kpi_formular.use(bodyParser.json());
    kpi_formular.use(bodyParser.urlencoded({ extended: true }));

kpi_formular.get('/lookup/kpi_formular', function (req, res) {
    res.send('สูตรตัวชี้วัด');
});

module.exports = kpi_formular;