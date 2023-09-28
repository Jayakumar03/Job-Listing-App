const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../utils/isLoggedIn");

const { createJobPost, editJobPost } = require("../controllers/jobControllers");

router.route("/createjobpost").post(isLoggedIn, createJobPost);
router.route("/editjobpost/:id").put(isLoggedIn, editJobPost);

module.exports = router;
