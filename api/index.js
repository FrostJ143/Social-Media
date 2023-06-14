require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./configs/dbConn");

// Connect to DB first
connectDB();

// Get data from form to req.body
app.use(express.urlencoded({ extended: false }));
// Convert JSON to javascript object to req.body
app.use(express.json());
// Protect app from toxic request headers
app.use(helmet());
// Logger for request
app.use(morgan("common"));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

mongoose.connection.once("open", () => {
    console.log("Connect to DB");

    app.listen(8800, () => {
        console.log("Server is running on port 8800!");
    });
});
