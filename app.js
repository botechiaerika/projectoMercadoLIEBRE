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
