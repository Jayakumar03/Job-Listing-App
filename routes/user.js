const express = require("express");
// const { isLoggedIn } = require("../middlewares/user");
const router = express.Router();


const {signUp} = require("../controllers/userControllets")



router.route("/signup").post(signUp)




module.exports = router;