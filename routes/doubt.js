const express = require("express");
const router = express.Router();
const {
  createDoubtSheet,
  getAllDoubts,
  getSingleDoubts,
  deleteDoubts,
} = require("../controller/doubt");
router.route("/doubt").post(createDoubtSheet).get(getAllDoubts);
router.route("/doubt/:id").get(getSingleDoubts).post(deleteDoubts);
module.exports = router;
