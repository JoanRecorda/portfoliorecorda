const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../toBePublic');

app.use(express.static(publicDirectoryPath));
console.log(publicDirectoryPath);

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: "Home",
        name: "Recordà"
    })
})

app.get('/agile', function (req, res) {
    res.render('agile', {
        title: "Agile Software Development",
        name: "Recordà"
    })
})

app.get('/about', function (req, res) {
    res.send('Hello from the about page')
})

app.listen(3000, () => {
    console.log("The server is running on port 3000");
})
