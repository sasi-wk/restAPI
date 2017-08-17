var express = require('express');
var bodyParser = require('body-parser');
var delhospital = express();

    delhospital.use(bodyParser.json());
    delhospital.use(bodyParser.urlencoded({ extended:false }));

delhospital.delete('/hospital/:id', function (req, res) {  
    var id = req.params.id;
    res.send('ลบข้อมูลโรงพยาบาลที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = delhospital;