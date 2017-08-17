var express = require('express');
var bodyParser = require('body-parser');
var puthospital = express();

    puthospital.use(bodyParser.json());
    puthospital.use(bodyParser.urlencoded({ extended:false }));

puthospital.put('/hospital', function (req, res) {  
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ : '+JSON.stringify(req.body));
    console.log(req.body);
});

module.exports = puthospital;