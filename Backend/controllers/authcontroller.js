const User = require('../models/usermodel');
const uri = "mongodb+srv://Dhruv:Dhruv2004@cluster0.kd8ttho.mongodb.net/tquest?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose');

async function loginUser(req, res) {
    try {
        const { userId } = req.body;
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (userId !== user.userId) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = loginUser;
