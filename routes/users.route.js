const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.post("/users", usersController.addUser);
router.delete("/users/:id", usersController.deleteUser);
router.get("/users", usersController.getUsers);
router.post("/users/likes/:id", usersController.addToSaves);
router.get("/users/likes/:id", usersController.getSaves);

module.exports = router;
