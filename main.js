const Contenedor = require("./contenedor")
const express = require('express')
const app = express()
const PORT = 3000;

app.get('/productos', (req, res) => {
    productos.getAll()
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

app.get('/productoRandom', (req, res) => {
    productos.getAll()
    .then(data => {
        const random = Math.floor(Math.random() * data.length)
        res.send(data[random])
    })
    .catch(err => console.error(err))
})

app.listen(PORT, ()=>{
    console.log (`Server running on port ${PORT}`)
})

const productos = new Contenedor("datos.json")