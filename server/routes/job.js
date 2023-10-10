const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../utils/isLoggedIn");

const {
  createJobPost,
  editJobPost,
  filteredJobs,
  jobInformation,
  allTheJobs,
} = require("../controllers/jobControllers");

router.route("/createjobpost").post(isLoggedIn, createJobPost);
router.route("/editjobpost/:id").put(isLoggedIn, editJobPost);
router.route("/filteredjobs").get(filteredJobs);
router.route("/jobinformation/:id").get(jobInformation);
router.route("/allthejobs").get(allTheJobs);

module.exports = router;
