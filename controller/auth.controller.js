const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const model = require("../model");
const CONFIG = require("../config/config");

// User Registration
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await model.User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await model.User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// User Login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await model.User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ error: "User not found" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid password" });

        const token = jwt.sign({ id: user.id, role: user.role }, CONFIG.secretKey, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
