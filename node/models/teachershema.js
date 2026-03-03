const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  t_name: {
    required: true,
    type: String,
  },
  t_dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  p_number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    requied: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  yearofExp: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  joining_date: {
    type: Date,
    required: true,
  },
  subject_teaches: {
    required: true,
    type: String,
  },
});

const teacherinformation = mongoose.model("teacherinfo", teacherSchema);
module.exports = teacherinformation;
