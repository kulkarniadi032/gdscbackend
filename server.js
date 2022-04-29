const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config/.env" });
const db = require("./config/db");
db();
const cors = require("cors");
const doubts = require("./routes/doubt");
const register = require("./routes/register");
const login = require("./routes/login");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
// below route is for after refresh the page that current page will show again
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/", "public", "index.html"));
});
app.use("/api/v1", doubts);
app.use("/api/v1", register);
app.use("/api/v1", login);
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
