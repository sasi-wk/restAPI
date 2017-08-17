var express = require('express');
var bodyParser = require('body-parser');
var listkpi = express();

    listkpi.use(bodyParser.json());
    listkpi.use(bodyParser.urlencoded({ extended: true }));

listkpi.get('/kpi', function (req, res) {
    var q = req.query.q;
    var page = req.query.page;
    var limit = req.query.limit;
    var xcud = req.query.xcud;
    res.send('เรียกตัวชี้วัดในระบบ\nq =' + q+'\n'+'page '+page+'\n'+'limit'+limit+'\n'+'xcud'+xcud);
});

module.exports = listkpi;