var express = require('express');
var bodyParser = require('body-parser');
var gethospital = express();

    gethospital.use(bodyParser.json());
    gethospital.use(bodyParser.urlencoded({ extended: true }));

gethospital.get('/hospital/:id', function (req, res) {
   var id = req.params.id;
 
    res.send('เรียกข้อมูลโรงพยาบาลที่ระบุ'+'<br>'+'id ='+id);
});

module.exports = gethospital;