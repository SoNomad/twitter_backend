const User = require("../models/User.model");
const mongo = require("mongodb");

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
        _savedPostsId: req.body.id,
      });
      res.json(`Пользователь ${user.name} добавлен в коллекцию.`);
    } catch (e) {
      res.json("Возникла ошибка при добавлении юзера. Код ошибки:" + e);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Юзер удален");
    } catch (e) {
      res.json("Возникла ошибка при удалении юзера. Код ошибки:/n" + e);
    }
  },
  getUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  addToSaves: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $addToSet: {
          _savedPostsId: req.body._postId,
        },
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  getSaves: async (req, res) => {
    try {
      const saves = await User.find({}, { _savedPostsId: 1 }).populate(
        "_savedPostsId"
      );
      res.json(saves);
    } catch (e) {
      res.json(e);
    }
  },
};
