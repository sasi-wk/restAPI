var express = require('express');
var bodyParser = require('body-parser');
var kpi_interpret = express();

    kpi_interpret.use(bodyParser.json());
    kpi_interpret.use(bodyParser.urlencoded({ extended: true }));

kpi_interpret.get('/lookup/kpi_interpret', function (req, res) {
    res.send('วิธีการแปลผลตัวชี้วัด');
});

module.exports = kpi_interpret;