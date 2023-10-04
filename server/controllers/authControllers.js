const User = require("../model/user.js");
const fileUpload = require("express-fileupload");
const cookieToken = require("../utils/cookieToken.js");

exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password, number } = req.body;

    const isUserAlreadyPresent = await User.findOne({ email });

    if (isUserAlreadyPresent) {
      throw new Error("User is already registered");
      res.status(409).json({
        message: "User is already registered",
      });
    }

    const isUserNumberAlreadyPresent = await User.findOne({ number });

    if (isUserNumberAlreadyPresent) {
      throw new Error("User number is already registered");
      res.status(409).json({
        message: "User number is already registered",
      });
    }

    if (!email || !name || !password || !number) {
      return next(new Error("name,email,password are required"));
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

exports.signIn = async (req, res, next) => {
  try {
    // De-struturing user for request body
    const { email, password } = req.body;

    console.log(email, password);
    
    // IF user is not throw an erro message

    if (!email || !password)
      return next(new Error("Require email or password to login in", 400));

    // seaching for user in DB using findone method
    const user = await User.findOne({ email }).select("+password");

    // If user is not in DB throw an error

    if (!user) return next(new Error("You are not an registerd user", 400));

    // Cheking the password using is validatedPassword methods
    const isPasswordCorrect = await user.isValidatedPassword(password);

    // If password does not match throw an error

    if (!isPasswordCorrect)
      return next(new Error("You are password is wrong", 400));

    // Creating and jsonwebtoken
    cookieToken(user, res);
  } catch (error) {
    console.log(error);
  }
};
