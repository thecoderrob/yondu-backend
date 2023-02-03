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

router
  .route("/")
  .get(protect, getUsers)
  .post(protect, createUser)
  .delete(protect, deleteUsers);
router
  .route("/:id")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.route("/login").post(loginUser);

module.exports = router;
