const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    _userId: {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
    content: String,

    _likes: [{ ref: "User", type: mongoose.SchemaTypes.ObjectId }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", postSchema);
module.exports = Post;
