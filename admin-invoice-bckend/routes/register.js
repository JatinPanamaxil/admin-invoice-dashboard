const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const duplicate = await User.findOne({ email: user }).exec();
  if (duplicate)
    return res.status(409).json({ message: "Email already registered" });

  try {
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: user,
      password: hashedPwd,
    });

    const result = await newUser.save();
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
