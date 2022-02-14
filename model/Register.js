const mongoose = require("mongoose");
const Register = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("Register", Register);
