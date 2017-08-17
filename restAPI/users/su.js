var express = require('express');
var bodyParser = require('body-parser');
var su = express();

    su.use(bodyParser.json());
    su.use(bodyParser.urlencoded({ extended: true }));

su.post('/users/:id/su', function (req, res) {
   var id = req.params.id;
   var role = req.query.role;
    res.send('เพื่มความสามารถ user ให้เป็น super user');
});

module.exports = su;