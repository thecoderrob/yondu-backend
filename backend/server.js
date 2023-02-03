const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { authenticateUser } = require("./utils");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users/", userRoutes);

// Starting the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
