const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
//const routes = require('./routes/index');
const mongoUrl = 'mongodb+srv://josejdiaz:1@cluster0.xpjr6lo.mongodb.net/PID?retryWrites=true&w=majority';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('',(req, res) /* importa el orden */ =>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    console.log("Hubo un get a localhost");
})

//app.use('', routes); /* apartir de localhost:3000 */

mongoose.connect(mongoUrl).then(client =>{
    app.listen(3000,() =>{ //CONECTARSE AL PUERTO 3000
        console.log('App is running.....');
    });
}).catch(err=>{
    console.log('No se pudo conectar a la base de datos',err);
  
})