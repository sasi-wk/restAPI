var express = require('express');
var bodyParser = require('body-parser');
var list = express();

    list.use(bodyParser.json());
    list.use(bodyParser.urlencoded({ extended: true }));

list.get('/users', function (req, res) {
    var q = req.query.q;
    var hospital = req.query.hospital;
    var page = req.query.page;
    var limit = req.query.limit;
    var xcud = req.query.xcud;
    res.send('เรียกผู้ใช้งานในระบบ\n q =' + q+'\n'+'hospital '+hospital+'\n'+' page '+page+'\n'+'limit'+limit+'\n'+'xcud'+xcud);
});

module.exports = list;