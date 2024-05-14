const bcrypt = require('bcrypt');
const { USER } = require('../Database/User');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')

async function Login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await USER.findOne({ username });
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                req.session.USER = user;
                jwt.sign({ user }, process.env.SESSION_SECRET, {}, (err, token) => {
                    res
                        .cookie("jwt", token, {
                            maxAge: 2 * 60 * 60 * 1000,
                            httpOnly: true,
                        }).status(200)
                        .json({ message: "Login Successfull", user });
                });
            } else {
                res.status(400).json({ message: "Invalid Password" });
            }
        } else {
            res.status(400).json({ message: "Invalid Username" });
        }
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { Login };
