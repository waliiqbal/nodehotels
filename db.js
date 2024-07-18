// Load the MongoDB package
const mongoose = require('mongoose');

// Define the MongoDB URI and Database name
const uri =  'mongodb+srv://waliiqbal2020:QwXfF6vnGHPDih1W@cluster0.gqktgu9.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'test';

// Create a database connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// define event listener for database collection
db.on ("connected" , ()=> {
    console.log("connected to mongodb server");
})
db.on ("error" , (err)=> {
    console.log("mongodb connection error" , err);
})
db.on ("disconnected" , ()=> {
    console.log("mongodb disconned");
})
// export database connection
module.exports = db;

