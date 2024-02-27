const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
/*
const myLogger = (req, res, next) => {
    console.log('Middleware log 1');
    next();
} 
*/

//template engine 
app.set("view engine", "ejs");

//Middlewares
//app.use(myLogger);
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add', (req, res) => {
    res.render('add');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})