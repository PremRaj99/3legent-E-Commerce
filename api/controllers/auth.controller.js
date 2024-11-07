import User from "../models/User.model.js";
import comparePassword from "../utils/comparePassword.js";
import errorHandler from "../utils/error.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import hashPassword from "../utils/hashPassword.js";
import responseHandler from "../utils/response.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(errorHandler(400, "fill all the required fields!"));
    }

    const user = await User.findOne({ email });
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

    const { password: pass, ...rest } = newUser._doc;

    res.status(200).json(responseHandler(200, rest, "User created successfully"));
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

    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "Email doesn't exist!"));
    }
    const comparePass = comparePassword(password, user.password);
    if (!comparePass) {
      return next(errorHandler(400, "Invalid creadentials!"));
    }
    generateTokenAndSetCookie(user._id, res, user.role);
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .json(responseHandler(200, rest, "User logged in successfully"));
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token", { path: "/" });
    res.status(200).json(responseHandler(200, [], "User logged out successfully"));
  } catch (error) {
    next(error);
  }
};
