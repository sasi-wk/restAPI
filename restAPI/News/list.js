var express = require('express');
var bodyParser = require('body-parser');
var listnews = express();

    listnews.use(bodyParser.json());
    listnews.use(bodyParser.urlencoded({ extended: true }));

listnews.get('/news', function (req, res) {
    var q = req.query.q;
    var page = req.query.page;
    var limit = req.query.limit;
    var xcud = req.query.xcud;
     var readonly = req.query.readonly;
    res.send('เรียกข่าวในระบบ\nq =' + q+'\n'+'page '+page+'\n'+'limit'+limit+'\n'+'xcud'+xcud+'\nreadonly :'+readonly);
});

module.exports = listnews;