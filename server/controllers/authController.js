import bcrypt from "bcryptjs";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

/*
@desc    Admin Login
@route   POST /api/admin/login
@access  Public
*/

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find admin
    const admin = await User.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email",
      });
    }

    // Check role
    if (admin.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(admin._id),
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};