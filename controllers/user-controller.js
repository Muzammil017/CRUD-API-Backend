import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import usermodal from "../models/user-model.js";

dotenv.config();

export const postUserData = async (request, response) => {
  try {
    const { name, username, email, password } = request.body;
    const image = request.file && request.file.filename;
    console.log(name, username, email, password, image);
    const isemailexisted = await usermodal.findOne({ email: email });
    if (isemailexisted) {
      return response.status(400).json({ message: "Email already exists" });
    }
    const userData = new usermodal({
      name,
      username,
      email,
      password,
      image,
    });
    await userData.save();
    return response.status(200).json({
      message: "Data Saved Successfully",
      success: true,
      userData,
    });
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

//register api
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const User = await usermodal.create(userData);
    return res.json({
      message: "User registered successfully",
      User,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//login api with jwt

export const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await usermodal.findOne({ email: userData.email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const isValidPass = await bcrypt.compare(userData.password, user.password);

    if (!isValidPass) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const jwttoken = jwt.sign(
      {
        id: user.id,
        role: user.role,
        name: user.name,
        password: user.password,
      },
      process.env.PRIVATE_KEY,
      { expiresIn: "2h" }
    );
    //cookie
    res.cookie("jwt", jwttoken, {
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 60 * 1000 * 24,
    });
    return res.status(200).json({
      message: "Login Successful",
      token: jwttoken,
      userData,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//logout api with jwt

export const logoutUser = async (req, res) => {
  try {
    console.log("000000", req.user);
    res.clearCookie("jwt");
    return res.json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const getData = await usermodal.find();
    return res.status(200).json({ message: "HELLOO DATA GOT", getData });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
