var express = require('express');
var bodyParser = require('body-parser');
var hospital_cert_type = express();

    hospital_cert_type.use(bodyParser.json());
    hospital_cert_type.use(bodyParser.urlencoded({ extended: true }));

hospital_cert_type.get('/lookup/hospital_cert_type', function (req, res) {
    res.send('ประเภทใบรับรองโรงพยาบาล');
});

module.exports = hospital_cert_type;