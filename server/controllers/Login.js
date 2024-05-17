const bcrypt = require('bcrypt');
const { USER } = require('../Database/User');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
function calculateDateDifference(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const start = new Date(date1).setHours(0, 0, 0, 0);
    const end = new Date(date2).setHours(0, 0, 0, 0);
    return Math.round((end - start) / oneDay);
}

async function Login(req, res) {
    try {
        const { username, password } = req.body;
        let user = await USER.findOne({ username });
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const lastLogin = user.lastLogin ? new Date(user.lastLogin) : new Date();
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                lastLogin.setHours(0, 0, 0, 0);
                const dateDifference = calculateDateDifference(lastLogin, today);
                if (dateDifference === 1) {
                    await USER.findByIdAndUpdate(user._id, {
                        streak: user.streak + 1,
                        lastLogin: today,
                    });
                } else if (dateDifference > 1) {
                    await USER.findByIdAndUpdate(user._id, {
                        streak: 1,
                        lastLogin: today,
                    });
                }
                user = await USER.findById(user._id)
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
