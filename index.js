let express = require('express');
const { ConnectionCheckOutFailedEvent } = require('mongodb');
const connect = require('./db/connection');
let app = express();
let conection=require("./db/connection")

conection.connect()

// Reuse database object in request handlers
app.listen(3000);
console.log("Listening on port 3000");