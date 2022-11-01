const mysql = require('mysql');
const express = require('express');
const cors=require("cors");
const bodyparser = require('body-parser');

const db = mysql.createConnection({
    host: 'lfbn-cle-1-568-58.w92-157.abo.wanadoo.fr',
    user: 'crmuser',
    password: 'Jeremy1234',
    database: 'crm-database'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql CRM-DATABASE Connected ...');
});

const app = express();

app.use(bodyparser.json());

const corsOptions = {
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

 app.listen(8080, () => {
    console.log('Server started on port 8080');
});

app.get('/Customer/All', (req, res) => {

    let sql = 'SELECT * FROM customers ORDER BY idcustomer';

    db.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/Customer/Id/:id', (req, res) => {

    const id = req.params.id;
    let sql = 'SELECT * FROM customers WHERE idcustomer = ?';

    db.query(sql, [id], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
}); 

app.get('/User/Auth/:login/:pwd', (req, res) => {

    const login = req.params.login;
    const pwd = req.params.pwd;
    let sql = 'SELECT login, password = ? as result FROM users WHERE login = ?';

    db.query(sql, [pwd, login], (err, result) => {
        if (err) throw err;

        console.log(result);
        res.send(result);
    });
});

app.get('/User/role/:login', (req, res) => {
    
        const login = req.params.login;
        let sql = 'SELECT idRole FROM users WHERE login = ?';
    
        db.query(sql, [login], (err, result) => {
            if (err) throw err;
    
            console.log(result);
            res.send(result);
        });
});

app.post('/User/Add', (req, res) => {
    
    let form = req.body;

    console.log(form);

    const sql = `INSERT INTO users(lastname, firstname, idrole, login, password, phone, mail) VALUES ('${form.lastname}', '${form.firstname}', '${form.idrole}', '${form.login}', '${form.password}', '${form.phone}', '${form.mail}')`;
    db.query(sql , (err, result) => { 
        if (err) throw err;
        console.log(result);
        res.send('Post added...' + result.insertId);
    });
});