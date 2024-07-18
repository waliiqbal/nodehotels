const express = require('express');
const bodyParser = require('body-parser'); // Body-parser package
const cors = require('cors');
const db = require('./db'); // Ensure this connects to your MongoDB


const app = express();
const port = 3009;

// Middleware setup
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); // Body parser middleware

// Routes
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.get('/chicken', (req, res) => {
    res.send('Chicken dinner!');
});


const personroutes = require('./routes/personroutes');
app.use("/person", personroutes)
const MenuCardroutes = require('./routes/menuCardroutes');
app.use("/MenuCard", MenuCardroutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
