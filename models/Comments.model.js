const mongoose = require("mongoose");
const commentSchema = mongoose.Schema(
  {
    _userId: {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
    content: String,

    _postId: [{ ref: "Posts", type: mongoose.SchemaTypes.ObjectId }],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comments", commentSchema);
module.exports = Comment;
