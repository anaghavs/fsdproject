//this file is used to create ALL THE ROUTES (POST,PUT,DELETE,GET)
//holds express features
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//route imports
const hospitalRoutes = require('./routes/hospital');
//const reviewsRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
//const spPolicyRoutes = require('./routes/policy');
const dmcaRoutes = require('./routes/dmca');

const app = express(); //returns us an express app which can now be used

//connecting to my mongoDB Atlas database
mongoose.connect("mongodb://localhost:27017/project")
    .then(() => {
        console.log('Database connection successfu!');
    })
    .catch(() => {
        console.log('Database connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//declaring headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});

//forwarding incoming requests to the appropriate routes
// routes seperated into different folders to keep the code organized
app.use("/api/hospital", hospitalRoutes);

//app.use("/api/reviews", reviewsRoutes);

app.use("/api/user", userRoutes);

app.use("/api/admin", adminRoutes);

//app.use("/api/policy", spPolicyRoutes);

app.use("/api/dmca", dmcaRoutes);

//exporting the module
module.exports = app;