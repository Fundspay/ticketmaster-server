// const jwt = require("jsonwebtoken");
// const CONFIG = require("../config/config");

// // 📌 Verify JWT Token
// exports.verifyToken = (req, res, next) => {
//     const token = req.header("Authorization");
//     if (!token) return res.status(401).json({ error: "Access denied" });

//     try {
//         const verified = jwt.verify(token.replace("Bearer ", ""), CONFIG.secretKey);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.status(400).json({ error: "Invalid token" });
//     }
// };

// // 📌 Check If User Is Admin
// exports.isAdmin = (req, res, next) => {
//     if (req.user.role !== "admin") return res.status(403).json({ error: "Admin access required" });
//     next();
// };
