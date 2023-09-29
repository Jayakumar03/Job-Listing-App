const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../utils/isLoggedIn");

const { createJobPost, editJobPost,filteredJobs,jobDescription } = require("../controllers/jobControllers");

router.route("/createjobpost").post(isLoggedIn, createJobPost);
router.route("/editjobpost/:id").put(isLoggedIn, editJobPost);
router.route("/filteredjobs").get(filteredJobs);
router.route("/jobdescription/:id").get(jobDescription);


module.exports = router;
