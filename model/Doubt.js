const mongoose = require("mongoose");
const doubtSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your name"],
  },
  email: {
    type: String,
    require: [true, "Please enter your email"],
  },
  query: {
    type: String,
    require: [true, "Please enter your query"],
  },
});
module.exports = mongoose.model("doubts", doubtSchema);
