const Register = require("../model/Register");
const bcrypt = require("bcryptjs");
exports.createRegisterUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const data = await Register.create(req.body);
    res.status(200).json({
      success: true,
      message: "Admin user register successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Admin user not register successfully ${error}`,
      data: null,
    });
  }
};
