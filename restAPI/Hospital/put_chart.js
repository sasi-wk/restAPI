var express = require('express');
var bodyParser = require('body-parser');
var put_chart = express();

    put_chart.use(bodyParser.json());
    put_chart.use(bodyParser.urlencoded({ extended:false }));

put_chart.put('/hospital/:id/chart', function (req, res) {  
    var id = req.params.id;
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = put_chart;