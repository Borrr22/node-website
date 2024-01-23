require('dotenv').config()

const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo!!</h1><p>" + process.env.MYSQL_HOST + "</p>");
});

app.get('/about', (req, res) => {
    res.send("<h1>Hola Mundo 2</h1>");
});

app.get('/env', (req, res) => {
    const t1 = "<h1>HOST: " + process.env.MYSQL_HOST + "</h1>"
    const t2 = "<h1>USER: " + process.env.MYSQL_USER + "</h1>"
    const t3 = "<h1>PASS: " + process.env.MYSQL_PASS + "</h1>"
    res.send(t1 + t2 + t3);
});


// console.log(process.env.SALEM)

app.listen(5000)
console.log('Server on port', 5000)