const User = require("../models/user");
const { JWT_SECRET } = require('../config/keys');
const JWT = require('jsonwebtoken');

signToken = user => {
    return JWT.sign({
        iss: 'ElPoeta',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {

        const { email, password } = req.body;

        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }

        const newUser = new User({
            email,
            password
        });

        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {
        const token = signToken(req.user);
        res.status(200).json({ token });
    },
    secret: async (req, res, next) => {
        res.status(200).json({ secret: "Welcome! to the super top secret page you are authenticated" });
    }
}
