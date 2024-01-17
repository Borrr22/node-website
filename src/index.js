const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo!!</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Hola Mundo 2</h1>");
});

app.listen(3000)
console.log('Server on port', 3000)