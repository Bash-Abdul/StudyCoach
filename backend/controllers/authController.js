const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (!fullName || !email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] }
  });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { fullName, email, username, password: hashedPassword }
  });
  res.status(201).json({ message: "User registered", user: { ...user, password: undefined } });
};


exports.login = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email && !username) {
    return res.status(400).json({ message: "Email or username required" });
  }
  const user = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] }
  });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.cookie('token', token, { httpOnly: true, secure: true });
  res.json({ message: "Logged in", user: { ...user, password: undefined } });
};