import User from "../models/User.js";
import { generateAccessToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(400).json({ msg: "Invalid credentials" });

  const token = generateAccessToken(user);

  res.json({ user, token });
};