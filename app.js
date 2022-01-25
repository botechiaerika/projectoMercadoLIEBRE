const express = require('express');
const app = express();
const path = requiere('path')
app publicFolderPath = path.resolve(__dirname, './public')
app.use(express.static(publicFolderPath))

app.get('/home', (req, res) => {
    console.log(__dirname); // mostra variable ubicacion archivo html en pc
    let htmlHome = path.resolve(__dirname, './index.hml')
    res.sendFile(htmlHome)
})


app.listen(3030, () => {
    console.log("LISTEN WEB SERVER ON PORT 3030")
})