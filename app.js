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
