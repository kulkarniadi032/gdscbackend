const mongoose = require("mongoose");
const db = async () => {
  console.log();
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log(`Serve is not connected to db ${error}`);
  }
};
module.exports = db;
