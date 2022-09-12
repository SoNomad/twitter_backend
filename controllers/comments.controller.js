const Comment = require("../models/Comments.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    const { author, content, post } = req.body;
    try {
      const Comment = await Comment.create({
        author,
        content,
        post,
      });
      res.json(`Коммент добавлен.`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении коммента. Код ошибки:" + e);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.json("Коммент удален");
    } catch (e) {
      res.json("Возникла ошибка при удалении коммента. Код ошибки:/n" + e);
    }
  },
  getUserComments: async (req, res) => {
    try {
      const comments = await Comment.find({ author: req.params.id }).populate(
        "post"
      );
      res.json(comments);
    } catch (e) {
      res.json(e);
    }
  },
};
