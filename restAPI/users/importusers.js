var express = require('express');
var bodyParser = require('body-parser');
var importusers = express();

    importusers.use(bodyParser.json());
    importusers.use(bodyParser.urlencoded({ extended: true }));

importusers.post('/user/import', function (req, res) { 
    var file = req.body.file; 
    res.send('นำเข้าข้อมูลผู้ใช้งานจากไฟล์ file : '+file);
    console.log(file);
});

module.exports = importusers;