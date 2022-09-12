const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");
const router = Router();

router.post("/posts", postsController.addPost);
router.delete("/posts/:id", postsController.deletePost);
router.patch("/posts/:id", postsController.editPost);
router.get("/posts/", postsController.getPosts);
router.patch("/posts/:id/likes", postsController.addLike);

module.exports = router;
