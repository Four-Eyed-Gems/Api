require('dotenv').config()
const express = require('express');
const dbconnect = require('./src/dbConnection/dbConnect');
const routes = require("./src/routes/indexRoutes");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (res, req) => {
    req.send("Four-Eyed Server Working.....")
})
app.use("/auth", routes);
app.get("*", (res, req) => {
    req.send("Not Found.....")
})


const start = async () => {
    try {
        await dbconnect()
        app.listen(4100, console.log("Four-Eyed Server Stared"))
    } catch (err) {
        console.log("App Server Stopped", err)
    }
}

start();