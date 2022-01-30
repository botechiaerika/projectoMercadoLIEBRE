const express = require('express');
const port = 3030
console.log(__dirname)
const app = express()
var path = require('path')
var favocon = require('serve-favicon')
const resolve = require ('resolve')


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Add your routes here, etc.
app.listen(port , (req, res) => {
    console.log("ws rodando P3030")
})