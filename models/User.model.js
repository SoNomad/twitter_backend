const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  _savedPostsId: [{ ref: "Posts", type: mongoose.SchemaTypes.ObjectId }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
