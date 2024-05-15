const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const config = require('../config');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = userModel.createUser(username, hashedPassword, role);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = userModel.findUserByUsername(username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const permissions = {
      admin: ["READ", "WRITE", "DELETE"],
      user: ["READ", "WRITE"]
    };

    const token = jwt.sign({ userId: user.id, username: user.username, role: user.role, permissions: permissions[user.role] }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, username: user.username, role: user.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
