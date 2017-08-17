var express = require('express');
var bodyParser = require('body-parser');
var delusers = express();

    delusers.use(bodyParser.json());
    delusers.use(bodyParser.urlencoded({ extended: true }));

delusers.delete('/users/:id', function (req, res) { 
    var id = req.params.id; 
    res.send('ลบผู้ใช้งานที่ระบุ ID : '+id);
    console.log(id);
});

module.exports = delusers;