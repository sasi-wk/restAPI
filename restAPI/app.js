var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid')
var pg = require('pg')
var dateTime = require('node-datetime');
var dt = dateTime.create();
var formattimes = dt.format('Y-m-d H:M:S')
var config = {
    user: 'postgres',
    database: 'restAPI',
    password: '2529',
    port: 5432,
    max: 10, // max number of connection can be open to database
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var connect = "postgres://postgres:2529@hocalhost/restAPI";
var pool = new pg.Pool(config);
port = 3000;
app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
function assignId(req, res, next) {
    req.id = uuid.v4()
    next()
}
app.use(assignId)
app.use((req, rep, next) => {
    pool.connect(function (err, client, done) {
        var jsons = { "query": req.query, "body": req.body, "params": req.params }
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        if ((Object.keys(req.query).length === 0) && (Object.keys(req.body).length === 0) && (Object.keys(req.params).length === 0)) {
            client.query('INSERT INTO logger(reqid, host, url, method,date,"time") VALUES($1,$2,$3,$4,$5,$6)',
                [req.id, req.hostname, req.url, req.method, formattimes, formattimes]);
            done();
            console.log('....No Object....')
        }
        else if (Object.keys(req.query).length === 0) {
            if (Object.keys(req.body).length === 0) {
                jsons = { "params": req.params }
                client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                    [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
                done();
                console.log('...params inserted....')
            }
            else if (Object.keys(req.params).length === 0) {
                jsons = { "body": req.body }
                client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                    [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
                done();
                console.log('....body inserted....')
            } else {
                jsons = { "body": req.body, "params": req.params }
                client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                    [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
                done();
                console.log('....body and params inserted....')
            }
        }
        else if (Object.keys(req.body).length === 0) {
            if (Object.keys(req.params).length === 0) {
                jsons = { "query": req.query}
                client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                    [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
                done();
                console.log('....query inserted....')
            }
            else{
                jsons = { "query": req.query, "params": req.params }
                client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                    [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
                done();
                console.log('....query and params inserted....')
            }
        }
        else if (Object.keys(req.params).length === 0) {
            jsons = { "query": req.query, "body": req.body }
            client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
            done();
            console.log('....query and body inserted....')
        }
        else {
            client.query('INSERT INTO logger(reqid, host, url, method, params,date,"time") VALUES($1,$2,$3,$4,$5,$6,$7)',
                [req.id, req.hostname, req.url, req.method, jsons, formattimes, formattimes]);
            done();
            console.log('....DB insert....')
        }
    });
    // pool.end;
    next()
});

//user
var token = require('./user/token');
var auth = require('./user/auth');
var getdetail = require('./user/getuserdetail');
var changepass = require('./user/changepass');
var lang = require('./user/lang');
var logout = require('./user/logout');
var putuser = require('./user/put');
app.use(token);
app.use(auth);
app.use(getdetail);
app.use(changepass);
app.use(lang);
app.use(logout);
app.use(putuser);


//Users
var listusers = require('./users/list');
var getusersdetail = require('./users/getusers');
var changepass = require('./users/changepass');
var su = require('./users/su');
var putusers = require('./users/putusers');
var delusers = require('./users/delusers');
var importusers = require('./users/importusers');
app.use(listusers);
app.use(getusersdetail);
app.use(changepass);
app.use(su);
app.use(putusers);
app.use(delusers);
app.use(importusers);

//Hospital
var listhospital = require('./Hospital/listhospital');
var gethospital = require('./Hospital/gethospital');
var puthospital = require('./Hospital/puthospital');
var put_chart = require('./Hospital/put_chart');
var put_vision = require('./Hospital/put_vision');
var put_mission = require('./Hospital/put_mission');
var put_values = require('./Hospital/put_values');
var put_award = require('./Hospital/put_award');
var delhospital = require('./Hospital/delhospital');
var del_award = require('./Hospital/del_award');

app.use(listhospital);
app.use(gethospital);
app.use(puthospital);
app.use(put_chart);
app.use(put_vision);
app.use(put_mission);
app.use(put_values);
app.use(put_award);
app.use(delhospital);
app.use(del_award);

//KPI
var listkpi = require('./Kpi/list');
var getkpi = require('./Kpi/get');
var putkpi = require('./Kpi/put');
var delkpi = require('./Kpi/del');

app.use(listkpi);
app.use(getkpi);
app.use(putkpi);
app.use(delkpi);

//temp
var listtemp = require('./Template/list');
var gettemp = require('./Template/get');
var puttemp = require('./Template/put');
var deltemp = require('./Template/del');
var matchtemp = require('./Template/match');

app.use(listtemp);
app.use(gettemp);
app.use(puttemp);
app.use(deltemp);
app.use(matchtemp);

//news
var listnews = require('./News/list');
var getnews = require('./News/get');
var putnews = require('./News/put');
var delnews = require('./News/del');

app.use(listnews);
app.use(getnews);
app.use(putnews);
app.use(delnews);

//sheet
var listsheet = require('./sheet/list');
var getsheet = require('./sheet/get');
var putsheet = require('./sheet/put');
var sendsheet = require('./sheet/send');
var history = require('./sheet/history');

app.use(listsheet);
app.use(getsheet);
app.use(putsheet);
app.use(sendsheet);
app.use(history);

//lookup
var version = require('./lookup/version');
var versions = require('./lookup/versions');
var language = require('./lookup/language');
var users_depart = require('./lookup/users_depart');
var users_posit = require('./lookup/users_posit');
var role = require('./lookup/role');
var hospital_type = require('./lookup/hospital_type');
var hospital_class = require('./lookup/hospital_class');
var hospital_cmi = require('./lookup/hospital_cmi');
var hospital_cert_type = require('./lookup/hospital_cert_type ');
var kpi_formula = require('./lookup/kpi_formula');
var kpi_formula_input_type = require('./lookup/kpi_formula_input_type');
var kpi_interpret = require('./lookup/kpi_interpret');
var kpi_criteria = require('./lookup/kpi_criteria');
var kpi_frequency = require('./lookup/kpi_frequency');
var kpi_type = require('./lookup/kpi_type');
var kpi_matric = require('./lookup/kpi_matric');
var kpi_quality = require('./lookup/kpi_quality');
var kpi_sample = require('./lookup/kpi_sample');
var kpi_collection = require('./lookup/kpi_collection');
var kpi_input_matric = require('./lookup/kpi_input_matric');
var kpi_input_recorder = require('./lookup/kpi_input_recorder');

app.use(version);
app.use(versions);
app.use(language);
app.use(users_depart);
app.use(users_posit);
app.use(role);
app.use(hospital_type);
app.use(hospital_class);
app.use(hospital_cmi);
app.use(hospital_cert_type);
app.use(kpi_formula);
app.use(kpi_formula_input_type);
app.use(kpi_interpret);
app.use(kpi_criteria);
app.use(kpi_frequency);
app.use(kpi_type);
app.use(kpi_matric);
app.use(kpi_quality);
app.use(kpi_sample);
app.use(kpi_collection);
app.use(kpi_input_matric);
app.use(kpi_input_recorder);



// start server
app.listen(port, function () {
    console.log('Server start at port' + port);
});