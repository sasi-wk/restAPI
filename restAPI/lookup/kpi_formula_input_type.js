var express = require('express');
var bodyParser = require('body-parser');
var kpi_formular_input_type = express();

    kpi_formular_input_type.use(bodyParser.json());
    kpi_formular_input_type.use(bodyParser.urlencoded({ extended: true }));

kpi_formular_input_type.get('/lookup/kpi_formular/:id', function (req, res) {
    //var id = req
    res.send('การ input');
});

module.exports = kpi_formular_input_type;