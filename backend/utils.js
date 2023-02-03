const bcrypt = require("bcryptjs");
const User = require("./models/User");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) return false;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (err) {
    return { message: "An error occured", error: err };
  }
};

module.exports = {
  hashPassword,
  authenticateUser,
};
