var express = require('express');
var bodyParser = require('body-parser');
var put_value = express();

    put_value.use(bodyParser.json());
    put_value.use(bodyParser.urlencoded({ extended:false }));

put_value.put('/hospital/:id/value', function (req, res) {  
    var id = req.params.id;
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = put_value;