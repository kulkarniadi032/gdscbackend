const Doubts = require("../model/Doubt");
var _ = require("lodash");
const sendEmail = require("../utils/email");
var arr;
exports.getAllDoubts = async (req, res) => {
  try {
    const data = await Doubts.find();
    res.status(200).json({
      success: true,
      message: "Get All Questions",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to get all doubts successfully ${error}`,
      data: null,
    });
  }
};
exports.deleteDoubts = async (req, res) => {
  try {
    const data = await Doubts.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Invalid User",
      });
    }
    const text = `<h1>${req.body.answer}</h1>`;
    sendEmail(data.email, data.name, text);
    res.status(200).json({
      success: true,
      message: "Delete doubt",
      data: data,
    });
    console.log(data.name);
    console.log(data.email);
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to delete doubts successfully ${error}`,
      data: null,
    });
  }
};
exports.getSingleDoubts = async (req, res) => {
  try {
    const data = await Doubts.findById(req.params.id);
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Invalid User",
      });
    }
    res.status(200).json({
      success: true,
      message: "Get Single data",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to get single doubts successfully ${error}`,
      data: null,
    });
  }
};
exports.createDoubtSheet = async (req, res) => {
  const reader = require("xlsx");
  const file = reader.readFile("./test.xlsx");
  const sheets = file.SheetNames;
  const temp = reader.utils.sheet_to_json(file.Sheets[sheets[0]]);
  try {
    const data = await Doubts.find();
    if (data) {
      let result = data.map((item) => _.pick(item, "name", "email", "query"));
      arr = result;
    }
    const newData = await Doubts.create(req.body);
    arr.push(req.body);
    res.status(200).json({
      success: true,
      message: "Data added in Sheet successfully",
      data: newData,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Sheet not create successfully ${error}`,
      data: null,
    });
  }
  const ws = reader.utils.json_to_sheet(arr);
  const wb = reader.utils.book_new();
  reader.utils.book_append_sheet(wb, ws, "test");
  reader.writeFile(wb, "test.xlsx");
};
