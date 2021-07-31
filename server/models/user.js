const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ipAddress:{
    type:String,
    required:true
  },
  OS:{
    type:String,
    required:true
  },
  network:{
    type:String,
    required:true
  },
  browser:{
    type:String,
    required:true
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);