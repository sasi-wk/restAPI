var express = require('express');
var bodyParser = require('body-parser');
var put_vision = express();

    put_vision.use(bodyParser.json());
    put_vision.use(bodyParser.urlencoded({ extended:false }));

put_vision.put('/hospital/:id/vision', function (req, res) {  
    var id = req.params.id;
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = put_vision;