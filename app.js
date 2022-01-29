const express = require('express');
const app = express();
app.use(express.static('/public'));

app.listen(5000, () => {
  console.log('Levante WS EXPRESS on 5000');
});

let client = path('/__dirname');
console.log(client);
const pathPublic = path.join(client, './public');
const resolve = path.join(pathPublic, './path');

app.get('/home', (req, res) => {
  res.sendFile(path.resolve('./views/home.html'));
});

app.use(express.static(pathPublic));
