require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");



const indexRoutes = require("./src/routes/index.routes");


const app = express();


app.set("port",5000);

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use( bodyParser.json() );


app.use(indexRoutes);

const server = app.listen(app.get("port"), () => {
    console.log(`server listening on ${app.get("port")}`);
})