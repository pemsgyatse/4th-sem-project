const mongoose = require("mongoose");

const studentresult = new mongoose.Schema({
  health: {
    required: true,
    type: Number,
  },
  english: {
    required: true,
    type: Number,
  },

  math: {
    required: true,
    type: Number,
  },

  nepali: {
    required: true,
    type: Number,
  },

  optmath: {
    required: true,
    type: Number,
  },

  science: {
    required: true,
    type: Number,
  },

  social: {
    required: true,
    type: Number,
  },
  studentid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "studentinfo",
    required: true,
    // unique: true,
  },
});

const resultofstudent = mongoose.model("result", studentresult);
module.exports = resultofstudent;
