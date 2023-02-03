const { Sequelize } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { hashPassword } = require("../utils");

// View all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: "Error getting user data",
      error: err,
    });
  }
};

// Get a single user
const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching the user",
      error: err,
    });
  }
};

// Create a user
const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const user = await User.create({
      ...userData,
      password: await hashPassword(userData.password),
    });
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({
      message: "Error create a new user",
      error: err,
    });
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = req.body;

  console.log(id, userData, req.body);

  try {
    const user = await User.findByPk(id);
    user.update({
      ...userData,
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Error updating the selected user" + err,
      error: err,
    });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await User.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({ id });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting the selected user",
      error: err,
    });
  }
};

// Delete multiple users
const deleteUsers = async (req, res) => {
  const { ids } = req.body;
  try {
    await User.destroy({
      where: {
        id: {
          [Sequelize.Op.in]: ids,
        },
      },
    });

    res.status(200).json({ ids });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting the selected users",
      error: err,
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    // If username does not exist
    if (!user)
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" });

    const isMatch = await bcrypt.compare(password, user.password);

    // If username and password do not match
    if (!isMatch)
      return res
        .status(401)
        .json({ message: "Username or password is incorrect" });

    res.json({
      firstname: user.firstname,
      isAdmin: user.isAdmin,
      token: generateToken({ id: user.id, isAdmin: user.isAdmin }),
    });
  } catch (err) {
    res.status(500).json({
      message: "Error while trying to login.",
      error: err,
    });
  }
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers,
  loginUser,
};
