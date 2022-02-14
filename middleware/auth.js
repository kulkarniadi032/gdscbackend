const jwt = require("jsonwebtoken");

exports.protector = async (req, res, next) => {
  console.log("hello");

  try {
    const token = req.headers.authorization;
    if (!req.headers.authorization) {
      return res.status(404).json({
        success: false,
        message: "no authorization token",
        data: null,
      });
    }
    const isVerify = await jwt.verify(token, "gdscSecreate");
    next();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Invalid token ${error}`,
      data: null,
    });
  }
};
