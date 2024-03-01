const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const fs = require('fs');
const fileUpload = require('express-fileupload');

const Photo = require('./models/Photo');
const photoContoller = require('./controller/photoController');
const aboutController = require('./controller/aboutController');
const addPageController = require('./controller/addPageController');

const app = express();

//connect
mongoose.connect('mongodb://localhost/pcat-test-db');

//template engine 
app.set("view engine", "ejs");

//Middlewares
//app.use(myLogger);
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods:['POST', 'GET']
}))

//ROUTES
app.get('/', photoContoller.getAllPhotos);
app.get('/photos/:id', photoContoller.getPhotoWithId);
app.post('/photos', photoContoller.createPhoto);
app.get('/photo/edit/:id', photoContoller.editPhotoPageWithId);
app.put('/photo/:id', photoContoller.updatePhoto);
app.delete('/photo/:id', photoContoller.deletePhoto);

//route about page
app.get('/about', aboutController.aboutPage);
//route add photo page
app.get('/add', addPageController.addPage);

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})