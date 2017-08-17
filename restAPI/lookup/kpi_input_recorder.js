var express = require('express');
var bodyParser = require('body-parser');
var kpi_input_recorder = express();

    kpi_input_recorder.use(bodyParser.json());
    kpi_input_recorder.use(bodyParser.urlencoded({ extended: true }));

kpi_input_recorder.get('/lookup/kpi_input_recorder', function (req, res) {
    res.send('สูตรตัวชี้วัด');
});

module.exports = kpi_input_recorder;