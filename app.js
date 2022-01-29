const express = require('express');
const app = express()
const path = require('path')


app.listen(3030, () => {
    console.log('LISTEN WEB SERVER ON PORT 3030')
})

app.get('./home', (req, res) => {
        let homeHTML = __dirname {
            res.send('./views/home.HTML')
        })
}
app.get('./*', (req, res) => {
    app.use(path.express(path.join(__dirname, './public')))
})
const nodemon = require('nodemon')
    //Metodo sendFile
    // Envia ARCHIVOS a WS
    //   RESPONDE A PETICION DE ESTRUCTURA ORGANIZADA Y COMPLEXA
    //  AUMENTO CADENA DE TEXTO UBICACION AL NAVEGADOR
    // PATH CON RUTAS ABSOLUTAS + COMODAS PARA EXPRESS