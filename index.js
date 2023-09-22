const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, console.log("server is running at 3000..."));

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hello form ${port}</h1>`);
});

// Health api
app.get("/health", (req, res) => {
  res.status(200);
  console.log("Health is good");
});
