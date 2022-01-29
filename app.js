const express = require('express');
const app = express()
const path = require('path')
const resolve = path.resolve(__dirname + './public')


app.listen(3030, () =>
    console.log('LISTEN WEB SERVER ON PORT 3030')
)


app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
})