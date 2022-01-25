const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Cargar INDEX')
})

app.listen(3030, () => {
    console.log("LISTEN WEB SERVER ON PORT 3030")
})