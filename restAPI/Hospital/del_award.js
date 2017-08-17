var express = require('express');
var bodyParser = require('body-parser');
var del_award = express();

    del_award.use(bodyParser.json());
    del_award.use(bodyParser.urlencoded({ extended:false }));

del_award.delete('/hospital/award/:id', function (req, res) {  
    var id = req.params.id;
    res.send('ลบข้อมูลโรงพยาบาลที่ระบุ ID: '+id);
    console.log(req.body);
});

module.exports = del_award;