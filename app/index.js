const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
const cors = require("cors")
const app = express();

/** Install request logger */
app.use(morgan("dev"));

app.use(cors({credentials:true, origin: 
    "https://be-react-gmaps.herokuapp.com",
methods: ["GET", "POST","DELETE","PUT"]}))

/** Install JSON request parser */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/** Install Router */
app.use(router);

module.exports = app;
