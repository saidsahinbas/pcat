const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Photo = require('./models/Photo');
const app = express();
//connect
mongoose.connect('mongodb://localhost/pcat-test-db');
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
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', async(req, res) => {
    const photos = await Photo.find({});
    res.render('index', {
        photos
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add', (req, res) => {
    res.render('add');
})

app.post('/photos', async (req, res) =>{
    await Photo.create(req.body);
    res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})