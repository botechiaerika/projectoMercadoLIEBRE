const express = require('express');
const app = express()
const path = require('path')


app.listen(3030, () => {
    console.log('LISTEN WEB SERVER ON PORT 3030')
})

app.get('./home', (req, res) => {
        let homeHTML = __dir +
            './home'
        res.send('./views/home.HTML')
    }
}

//Metodo sendFile
/* - Envia ARCHIVOS a WS
    RESPONDE A PETICION DE ESTRUCTURA ORGANIZADA Y COMPLEXA
    ARGUMENTO CADENA DE TEXTO UBICACION AL NAVEGADOR
PATH CON RUTAS ABSOLUTAS + COMODAS PARA EXPRESS
    
*/