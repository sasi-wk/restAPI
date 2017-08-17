var express = require('express');
var bodyParser = require('body-parser');
var kpi_type = express();

    kpi_type
.use(bodyParser.json());
    kpi_type
.use(bodyParser.urlencoded({ extended: true }));

kpi_type.get('/lookup/kpi_type', function (req, res) {
    res.send('ประเภทตัวชี้วัด');
});

module.exports = kpi_type;