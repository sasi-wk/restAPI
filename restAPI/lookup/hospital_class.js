var express = require('express');
var bodyParser = require('body-parser');
var hospital_class = express();

    hospital_class.use(bodyParser.json());
    hospital_class.use(bodyParser.urlencoded({ extended: true }));

hospital_class.get('/lookup/hospital_class', function (req, res) {
    res.send('ระดับศักยภาพของโรงพยาบาล');
});

module.exports = hospital_class;