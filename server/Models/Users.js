const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: "true",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: "true",
  },
  status: {
    type: String,
    enum: ["doctor", "patient"],
    default: "patient",
  },
  speciality: {
    type: String,
    enum: [
      "surgery",
      "pediatrics",
      "general medicine",
      "gynecology",
      "neurology",
      "radiology",
      "cardiology",
      "others",
      "null",
    ],
    default: "null",
  },
  appiontment: {
    type: [String],
    default: ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00"],
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserModel", UserSchema);
