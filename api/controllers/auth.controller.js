import User from "../models/User.model.js";
import comparePassword from "../utils/comparePassword.js";
import errorHandler from "../utils/error.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import hashPassword from "../utils/hashPassword.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(errorHandler(400, "fill all the required fields!"));
    }

    const user = User.findOne({ email });
    if (user) {
      return next(errorHandler(400, "Email already exist!"));
    }
    const hashPass = hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashPass,
    });
    await newUser.save();

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(400, "fill all the required fields!"));
    }

    const user = User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "Email doesn't exist!"));
    }
    const comparePass = comparePassword(password, user.password);
    if (!comparePass) {
      return next(errorHandler(400, "Invalid creadentials!"));
    }
    generateTokenAndSetCookie(user._id, res, user.role);
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token", { path: "/" });
    res.status(200).json({ message: "Logged Out Successfully!" });
  } catch (error) {
    next(error);
  }
};
