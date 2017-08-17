var express = require('express');
var bodyParser = require('body-parser');
var send = express();

    send.use(bodyParser.json());
    send.use(bodyParser.urlencoded({ extended: true }));

send.post('/sheet/:round', function (req, res) {
    var round = req.params.round;
    var hospital = req.query.hospital;
    res.send('ส่งฟอร์มตัวชี้วัดที่ระบุ');
});

module.exports = send;