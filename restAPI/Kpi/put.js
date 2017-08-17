var express = require('express');
var bodyParser = require('body-parser');
var putkpi = express();

    putkpi.use(bodyParser.json());
    putkpi.use(bodyParser.urlencoded({ extended: true }));

putkpi.put('/kpi', function (req, res) {
    res.send('บันทึกข้อมูลตัวชี้วัดที่ระบุ\nข้อมูล= '+JSON.stringify(req.body));
});

module.exports = putkpi;