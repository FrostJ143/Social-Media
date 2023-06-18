const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    };

    try {
        await User.create(user);
        return res.status(201).json(user);
    } catch (error) {
        return res.sendStatus(404);
    }
};

const loginUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!email || !password) {
        res.status(404).json({ message: "Username and password are required!" });
    }

    try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(404).json({ message: `Could not find user with email: ${email}` });
        }

        const matchPassword = await bcrypt.compare(password, foundUser.password);
        if (!matchPassword) {
            return res.status(404).json({ message: "Wrong password!" });
        }

        res.json(foundUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { registerUser, loginUser };
