var express = require('express');
var bodyParser = require('body-parser');
var put_mission = express();

    put_mission.use(bodyParser.json());
    put_mission.use(bodyParser.urlencoded({ extended:false }));

put_mission.put('/hospital/:id/mission', function (req, res) {  
    var id = req.params.id;
    res.send('บันทึกข้อมูลผู้ใช้งานที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = put_mission;