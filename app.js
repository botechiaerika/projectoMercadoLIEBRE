const express = require('express');
const app = express()
const path = require('path')
<<<<<<< Updated upstream
const resolve = path.express(__dirname
        const resolve = path.resolve(__dirname + './public')


        app.listen(3030, () => {
            console.log('LISTEN WEB SERVER ON PORT 3030')
        }) app.get('/', (req, res) => {
            res.sendFile(path.resolve(__dirname, ''
                views / home.html))
        })
=======

const resolve = path.resolve(__dirname + './public')


app.listen(3030, () => {
    console.log('LISTEN WEB SERVER ON PORT 3030')
}) app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, ''
        views / home.html))
})
>>>>>>> Stashed changes
=======
var path = require('path')
var favicon = require('serve-favicon')
const resolve = require ('resolve')


app.use(resolve(favicon(path.join(__dirname, 'public', 'favicon.ico'))))
    app.get('/' ,(req , res ) => {
    res.sendFile(favicon + 'register.html')
    });
    pp.get('/login', (req , res ) => {
   res.sendFile(favicon + 'login.html')
    });
app.get('/registro' ,(req , res ) => {
    res.sendFile(favicon + 'register.html')
    });
app.get('/home', (req , res ) => {
    res.sendFile(favicon + 'home.html')
    });
app.get('/404' , (req, res) => {
 res.sendFile(favicon + 'error404.html')
 })

// Add your routes here, etc.
app.listen(port , (req, res) => {
    console.log("ws rodando P3030")})
>>>>>>> f0102c85b65cf6965f5a725e3450abe47c12094e
