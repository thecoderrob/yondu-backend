const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers,
  loginUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser).delete(deleteUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/login").post(loginUser);

module.exports = router;
