const express = require("express");
const app = express();
const mongoDB = require("./config/db");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./utils/errorHandler");
// const fileUpload = require("express-fileupload");

require("dotenv").config();
mongoDB();

const port = process.env.PORT || 4000;

// ? Regular Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorHandler);

// Import all routes here
const user = require("./routes/user");

// Router Middleware
app.use("/api/v1", user);

app.listen(port, console.log("server is running at 3000..."));

// Health api
app.get("/health", (req, res) => {
  res.status(200);
  console.log("Health is good");
});
