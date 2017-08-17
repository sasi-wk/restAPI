var express = require('express')
var token = express()
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
token.use(bodyParser.json())
token.use(bodyParser.urlencoded({ extended: true }))
token.use(cookieParser())
token.get('/user/token/', function (req, res) {
    var token = req.query.token
    res.send('เรียก access token (สำหรับ client ที่ใช้ cookie ไม่ได้)' + '<br>' + 'Token = ' + token)
})
module.exports = token
