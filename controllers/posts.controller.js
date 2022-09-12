const Post = require("../models/Post.model");

module.exports.postsController = {
  addPost: async (req, res) => {
    const { _userId, content, _likes } = req.body;
    try {
      await Post.create({
        _userId,
        content,
        _likes,
      });
      res.json(`Пост добавлен.`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении поста. Код ошибки:" + e);
    }
  },
  getPosts: async (req, res) => {
    try {
      const post = await Post.find().populate("_userId", "name");
      res.json(post);
    } catch (e) {
      res.json(e);
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndRemove(req.params.id);
      res.json("Пост удален");
    } catch (e) {
      res.json("Возникла ошибка при удалении поста. Код ошибки:/n" + e);
    }
  },
  editPost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.id, req.body);
      res.json("Изменения сохранены");
    } catch (e) {
      res.json(e);
    }
  },
  addLike: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post._likes.includes(req.body._userId)) {
        await post.updateOne({
          $push: { _likes: req.body._userId },
        });
        const poster = await Post.findById(req.params.id);
        return res.json(poster);
      } else {
        await post.updateOne({
          $pull: { _likes: req.body._userId },
        });
        const poster = await Post.findById(req.params.id);
        return res.json(poster);
      }
    } catch (e) {
      res.json(e);
    }
  },
};
