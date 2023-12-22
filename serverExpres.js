/**
 *  > # SERVIDOR CON EXPRESS
 * 
 * > ** PASO 1 **
 *  npm init -y
 * 
 * > ** PASO 2 **
 *  npm i -D nodemon
 *  npm i express
 * 
 * > ** PASO 3 **
 *  "type": "module"
 *  "main": "nombreDelServer.js",
 *  "start": "node ./nombreDelServer.js",
 *  "dev": "nodemon ./nombreDelServer.js",
 * 
 * > ** PASO 4 **
 *  import express from 'express'
 *  const server = express()
 *  const port = 8080
 *  const ready = () => console.log(`Server ready on port ${port}`)
 *  server.listen(port,ready)
 * 
 * > ** PASO 5 ** Identificar el verbo HTTP
 * server.métodoHttp(ruta,función) para enviar datos y crear algo
 * server.post( “/” , ()=>{} ) para enviar datos y obtener algo
 * server.get( “/” , ()=>{} ) para enviar datos y obtener algo
 * server.put( “/” , ()=>{} ) PUT para enviar datos y modificar algo
 * server.delete( “/” , ()=>{} ) DELETE para enviar datos y eliminar algo
 *
 */

import express from 'express'
const server = express()
const port = 8080
const ready = () => console.log(`Server ready on port ${port}`)
server.listen(port,ready)

const indexRoute = "/" // Ruta de inicio

const productsRoute = '/products'

const indexFunction = (req,res) => res.send("Welcome to my first API") // Función de inicio

const productsFunction = (req,res) => res.send({
    success: true, products: []
})

server.get(indexRoute,indexFunction)

server.get(productsRoute,productsFunction)

// # PROGRAMAR UN PARAMETRO
/**
 * > # Request
 * El objeto de requerimientos cuenta con tres propiedades principales:
 *     req.params
 *     req.query
 *     req.body
 * 
 * Los parámetros (params) y las consulstas (query)las encia el cliente en la ** URL/ENPOINT **
 * 
 * La siguiente línea permitirá que el servidor pueda interpretar los datos enviados desde la ** URL ** 
 * 
 * server.use(express.urlencoded({extended:true}))
 * 
 * Un parámetro es un dato dinámico y obligatorio, para definirlo debemos colocar dos puntos delante del dato
 */

const paramsRoute = '/:name/:lastName'
const paramsFunction = (req,res) =>{
    const {name,lastName} = req.params // Desestructuramos los datos del requerimiento
    res.send({succes: true, message: `Hola ${name} ${lastName}`})
}

server.get(paramsRoute,paramsFunction)

// # PROGRAMAR UNA CONSULTA
/**
 * # QUERY
 * 
 * Consultas opcionales que se pueden hacer a una determinada ruta
 * Para consultar algo en el navegador, llamamos a un endpoint con ? seguido de la consulta con una igualdad
 * Express reconocerá que hay que meter información al objeto req.query, para poder utilizarlo en el endpoint
 * http://localhost:8080/nick?name=Maxi
 */
const queryRoute = '/nick'
const queryFunction = (req,res) => {
    const name = req.query.name ?? 'Coder'
    res.send({succes: true,message: `Hola ${name}!`})
}

server.get(queryRoute,queryFunction)
