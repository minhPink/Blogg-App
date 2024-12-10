const User = require("../models/user.model");

const bcryptjs = require("bcryptjs");
const { errHandler } = require("../utils/error");
module.exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errHandler(400, 'All fields are required'));
    };

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json({ message: 'Signup successful'});
    } catch (error) {
        next(error);
    }
}