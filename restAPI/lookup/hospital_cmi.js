var express = require('express');
var bodyParser = require('body-parser');
var hospital_cmi = express();

    hospital_cmi.use(bodyParser.json());
    hospital_cmi.use(bodyParser.urlencoded({ extended: true }));

hospital_cmi.get('/lookup/hospital_cmi', function (req, res) {
    res.send('กลุ่มโรงพยาบาล by CMI');
});

module.exports = hospital_cmi;