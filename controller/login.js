const Login = require("../model/Register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.admiLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Login.findOne({ email });
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email Address",
      });
    }
    const isAdmin = await bcrypt.compare(password, data.password);
    if (!isAdmin) {
      return res.status(200).json({
        success: false,
        message: "Invalid Credential",
      });
    }
    // const token = await jwt.sign({ id: data._id }, "gdscSecreate");
    res.status(200).json({
      success: true,
      message: "Admin Login Successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Admin not Login Successfully`,
      data: null,
    });
  }
};
