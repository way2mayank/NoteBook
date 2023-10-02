import userSchema from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Please provide email and password" });
    }

    const exist = await userSchema.findOne({ email });
    if (exist) {
      return res.status(203).json({ message: "User already exists" });
    }
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    await userSchema.create({ email, password: hashPassword });
    res
      .status(201)
      .json({ success: true, message: "User Register Successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .send({ success: false, message: "Please provide email and password" });
    }

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Please check your email and password",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).send({
        success: false,
        message: "Please check your email and password",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId:user._id
      },
      "This-is-my-secret",
      { expiresIn: "7d" }
    );
    
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).send({ success: true, message: "Successfully login", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
