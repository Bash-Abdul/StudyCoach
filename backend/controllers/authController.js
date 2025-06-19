const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// exports.register = async (req, res) => {
//   const { fullName, email, username, password } = req.body;
//   if (!fullName || !email || !username || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }
//   const existingUser = await prisma.user.findFirst({
//     where: { OR: [{ email }, { username }] }
//   });
//   if (existingUser) {
//     return res.status(409).json({ message: "User already exists" });
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await prisma.user.create({
//     data: { fullName, email, username, password: hashedPassword }
//   });
//   res.status(201).json({ message: "User registered", user: { ...user, password: undefined } });
// };
exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await prisma.user.findFirst({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { fullName, email, password: hashedPassword }
    });

    res.status(201).json({
      message: "User registered",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        // username: user.username
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password required" });
//   }
//   const user = await prisma.user.findUnique({
//     where: { email }
//   });

//   if (!user) return res.status(404).json({ message: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//   res.cookie('token', token, { httpOnly: true, secure: true });
//   res.json({ message: "Logged in", user: { ...user, password: undefined } });
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    // For development, set secure to false if not using HTTPS
    res.cookie('token', token, { httpOnly: true, secure: false }); 

    // res.json({ message: "Logged in", user: { ...user, password: undefined } });
    res.json({
      message: "Logged in",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email
      }
    });
    

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


exports.logout = async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};




// exports.google = async (req, res) => {
//   const { credential } = req.body;

//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: credential,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const email = payload.email;
//     const fullName = payload.name;

//     // Find or create user in your database
//     let user = await prisma.user.findUnique({ where: { email } });

//     if (!user) {
//       user = await prisma.user.create({
//         data: {
//           email,
//           fullName,
//           password: '', // or mark as Google-only user
//           provider: 'google'
//         }
//       });
//     }

//     // Create your own JWT token
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//     // Send it as cookie
//     res.cookie('token', token, { httpOnly: true, secure: false });
//     res.json({ message: 'Logged in with Google', user: { id: user.id, email, fullName } });

//   } catch (err) {
//     console.error('Google login error:', err);
//     res.status(401).json({ message: 'Invalid Google token' });
//   }
// };