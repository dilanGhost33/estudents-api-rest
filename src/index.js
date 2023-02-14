
const express = require('express')
const app= express()
//para reconocer html

//midlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use(require('./routes/index'))

//routes

//execution server web
app.listen(4000)
console.log("Server running in http://localhost:4000")
app.get('/',(req,res)=>{res.send('Servidor Estudiantes ')})
