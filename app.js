const express = require('express');
const path = require('path');
const app = express();
/*
const myLogger = (req, res, next) => {
    console.log('Middleware log 1');
    next();
} 
*/

//Middlewares
//app.use(myLogger);
app.use(express.static('public'))

app.get('/', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, 'temp/index.html'))

    /*const photo = {
        id: 1,
        name:"said photo",
        description: "Photo desc"
    }
    res.send(photo);
    */
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})