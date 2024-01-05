const express = require("express");
const app = express();
const mongoDB = require("./config/db");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./utils/errorHandler");
const cors = require("cors");

// This will allow all CORS requests
app.use(cors());


// const fileUpload = require("express-fileupload");

// Import all routes here
const user = require("./routes/auth");
const job = require("./routes/job");

require("dotenv").config();
mongoDB();

const port = process.env.PORT || 4000;

// ? Regular Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Router Middleware
app.use("/api/v1", user);
app.use("/api/v1", job);

app.listen(port, console.log("server is running at " + port, "..."));

// Health api
app.get("/health", (req, res) => {
  res.status(200);
  console.log("Health is good");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello !!!</h1>")
})
