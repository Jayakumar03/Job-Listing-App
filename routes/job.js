const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../utils/isLoggedIn");

const { createJobPost } = require("../controllers/jobControllers");

router.route("/createjobpost").post(isLoggedIn, createJobPost);

module.exports = router;
