const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      console.log(User);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      const user = await User.findOne({ where: { id: decoded.id } });
      if (!user) return res.status(401).json({ message: "Token is invalid" });
      if (!user.isAdmin)
        return res
          .status(401)
          .json({ message: "Access level is not administrator" });
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: "Not authorized", error: err });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Token is required" });
  }
};

module.exports = { protect };
