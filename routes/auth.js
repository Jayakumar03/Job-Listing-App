const express = require("express");
const router = express.Router();



const { signUp, login } = require("../controllers/authControllers");

router.route("/signup").post(signUp);
router.route("/login").get(login);

module.exports = router;
