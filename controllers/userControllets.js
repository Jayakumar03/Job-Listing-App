const User = require("../model/user.js");
const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;
const cookieToken = require("../utils/cookieToken");

exports.signUp = async (req, res, next) => {
  try {
    console.log(req.body);

    const { name, email, password, number } = req.body;

    if (!email || !name || !password || !number) {
      return next(new Error("name,email,password are required", 400));
    }

    // Wait for the User.create promise to resolve and get the user object
    const user = await User.create({
      name,
      email,
      password,
      number,
    });

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
  }
};
