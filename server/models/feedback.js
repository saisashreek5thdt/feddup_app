const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required:true
  },
  message: {
    type: String,
    required: true
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedback", UserSchema);