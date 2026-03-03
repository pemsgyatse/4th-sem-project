const mongoose = require("mongoose");

const student = new mongoose.Schema({
  addmission_date: {
    type: Date,
    // default: Date.now,
    required: true,
  },
  class_addmission: {
    type: String,
    required: true,
  },
  p_address: {
    type: String,
    required: true,
  },
  p_email: {
    type: String,
    required: true,
  },
  p_fname: {
    type: String,
    required: true,
  },
  p_lname: {
    type: String,
    required: true,
  },
  p_phonenumber: {
    type: Number,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  st_address: {
    type: String,
    required: true,
  },
  st_dob: {
    type: Date,
    required: true,
  },
  st_email: {
    type: String,
    required: true,
  },
  st_fname: {
    type: String,
    required: true,
  },
  st_gender: {
    type: String,
    required: true,
  },
  st_lname: {
    type: String,
    required: true,
  },
  st_phone: {
    type: Number,
    required: true,
  },
});

const studentinfos = mongoose.model("studentinfo", student);
module.exports = studentinfos;
