const User = require("../models/user.model");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errHandler } = require("../utils/error");
module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    next(error);
  }
};

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errHandler(400, "All fields are reuired"));
  }

  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
      return next(errHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errHandler(400, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports.google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
  } catch (error) {}
};
