const serverless = require("serverless-http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// Importing routes
const personRoutes = require("./src/routes/personRoutes");
const studentRoutes = require('./src/routes/studentRoutes');
const globalErrHandler = require("./src/controllers/errorController");

app.use(bodyParser.json());

// Routes
app.use("/api/v1/people", personRoutes);
app.use('/api/v1/students', studentRoutes );
//Error handler
app.use(globalErrHandler);

module.exports.handler = serverless(app);
