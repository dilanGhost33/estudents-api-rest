
const express = require('express')
import { PORT } from './config.js'
const app= express()
//para reconocer html

//midlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use(require('./routes/index'))

//routes

//execution server web
app.listen(PORT)
console.log("Server running in http://localhost:4000")
app.get('/',(req,res)=>{res.send('Servidor Estudiantes ')})
