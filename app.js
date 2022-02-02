const express = require('express')

const path = require('path')

const port = 3065

const app = express() 
app.use(express.static(resolve(__dirname + '/public/')));

 app.listen(port , () => { console.log(`Listen WS NODE EXPRESS on port ${port} by eri`)
})
    app.get('/' , (req , res) =>{ res.send("Bien-Venid@s a mercado LIEBRE")
    res.sendFile(__dirname + './views/index.html')
    });
app.get('/login', (req , res ) => {
   res.sendFile(__dirname + './views/login.html')
    });
app.get('/registro' ,(req , res ) => {
    res.sendFile(__dirname + './views/register.html')
    });
app.get('/home', (req , res ) => {
    res.sendFile('./public' + '/views/home.html')
    });
app.get('/404' , (req, res) => {
 res.sendFile(__dirname + './views/error404.html')
 })