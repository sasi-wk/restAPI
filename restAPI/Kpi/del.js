var express = require('express');
var bodyParser = require('body-parser');
var delkpi = express();

    delkpi.use(bodyParser.json());
    delkpi.use(bodyParser.urlencoded({ extended: true }));

delkpi.delete('/kpi/:id', function (req, res) {
    var id = req.params.id;
    res.send('ลบข้อมูลตัวชี้วัดที่ระบุ ID = '+id);
});

module.exports = delkpi;