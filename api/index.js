require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./configs/dbConn");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Connect to DB first
connectDB();

// Get data from form to req.body
app.use(express.urlencoded({ extended: false }));
// Convert JSON to javascript object to req.body
app.use(express.json());

const corsOptions = {
    origin: (origin, callback) => {
        // if (whiteList.indexOf(origin) !== -1 || !origin) {
        //     callback(null, true);
        // } else {
        //     callback(new Error("Not allowed by CORS"));
        // }
        callback(null, true);
    },
};
app.use(cors(corsOptions));
// Protect app from toxic request headers
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// Logger for request
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        req.name = Date.now() + file.originalname;
        cb(null, req.name);
    },
});
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        res.status(200).json(req.name);
    } catch (error) {
        console.log(error);
    }
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

mongoose.connection.once("open", () => {
    console.log("Connect to DB");

    app.listen(8800, () => {
        console.log("Server is running on port 8800!");
    });
});
