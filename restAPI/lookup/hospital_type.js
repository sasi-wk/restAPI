var express = require('express');
var bodyParser = require('body-parser');
var hospital_type = express();

    hospital_type.use(bodyParser.json());
    hospital_type.use(bodyParser.urlencoded({ extended: true }));

hospital_type.get('/lookup/hospital_type', function (req, res) {
    res.send(' hospital_type');
});

module.exports = hospital_type;