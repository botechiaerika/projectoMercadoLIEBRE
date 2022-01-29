const express = require('express')
cons app = express()

app.listen(3030, () => {
	console.log(‘scream en 3000 port can you listen’)})
/*
// command c frena web server

const. path = requiere(‘path’)
// libreria path unifica rutas en distintos sistemas operativos para express llegar a estas con seguridad  
// metodo resolve —> resolve ruta en todos dispositivos
//dirname referencia a ubicacion en que encontro desde raiz hacia public


const publicPath = path.join(__dirname, ‘./public’); 
app.use( express.static(path.resolve(publicPath))

