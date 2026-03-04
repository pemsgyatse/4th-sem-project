const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
      unique: true, // prevents duplicate email
    },
    userpassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // it auto add the two fields like this ("createdAt": "2026-03-04T07:00:00.000Z", "updatedAt": "2026-03-04T07:00:00.000Z",)
);

const User = mongoose.model("User", userSchema);

module.exports = User;
