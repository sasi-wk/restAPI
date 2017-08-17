var express = require('express');
var bodyParser = require('body-parser');
var put_award = express();

    put_award.use(bodyParser.json());
    put_award.use(bodyParser.urlencoded({ extended:false }));

put_award.put('/hospital/:id/award', function (req, res) {  
    var id = req.params.id;
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = put_award;