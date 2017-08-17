var express = require('express');
var bodyParser = require('body-parser');
var putsheet = express();

    putsheet.use(bodyParser.json());
    putsheet.use(bodyParser.urlencoded({ extended: true }));

putsheet.put('/sheet/:round', function (req, res) {
    var round = req.params.round;
    res.send('บันทึกฟอร์มตัวชี้วัดที่ระบุ\nข้อมูล= '+JSON.stringify(req.body));
});

module.exports = putsheet;