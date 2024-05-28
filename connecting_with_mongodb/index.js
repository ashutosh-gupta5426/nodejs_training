const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser')
const config = require('./src/config/config.js');
const route = require('./src/routes/route.js');

// Define the database URL to connect to.
const mongoDBUrl = `mongodb+srv://${config.dbUsername}:${config.dbPassword}@cluster0.muo4eas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/user_data_db`;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

mongoose.connect(mongoDBUrl)
.then(() => console.log("Successfully connected to DB"))
.catch((e) => console.log(e));

app.use('/', route)

app.listen(config.port, () => console.log(`App listening on port: ${config.port}`));