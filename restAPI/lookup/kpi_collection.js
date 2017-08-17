var express = require('express');
var bodyParser = require('body-parser');
var kpi_collection = express();

    kpi_collection.use(bodyParser.json());
    kpi_collection.use(bodyParser.urlencoded({ extended: true }));

kpi_collection.get('/lookup/kpi_collection', function (req, res) {
    res.send('วิธีเก็บข้อมูลตัวชี้วัด');
});

module.exports = kpi_collection;