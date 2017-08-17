var express = require('express');
var bodyParser = require('body-parser');
var list = express();

    list.use(bodyParser.json());
    list.use(bodyParser.urlencoded({ extended: true }));

list.get('/hospital', function (req, res) {
   var q = req.query.q;
   var page = req.query.page;
   var limit = req.query.limit;
    res.send('เรียกโรงพยาบาลในระบบ'+'<br>'+'q ='+q+'<br>'+'page ='+page+'<br>'+'limit ='+limit);
});

module.exports = list;