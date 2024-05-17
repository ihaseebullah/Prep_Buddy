const bcrypt = require('bcrypt');
const { USER } = require('../Database/User');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
function calculateDateDifference(dateString1, dateString2) {
    // Convert date strings to Date objects
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    // Calculate the difference in milliseconds
    const diffInMs = date2 - date1;

    // Convert the difference from milliseconds to days
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return diffInDays;
}
async function Login(req, res) {
    try {
        const { username, password } = req.body;
        let user = await USER.findOne({ username });
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                if (calculateDateDifference(user.lastLogin ? user.lastLogin : new Date(), new Date()) === 1) {
                    await USER.findByIdAndUpdate(user._id, {
                        streak: user.streak + 1,
                        lastLogin: new Date(),
                    })
                } else {
                    await USER.findByIdAndUpdate(user._id, {
                        streak: 1,
                        lastLogin: new Date(),
                    })
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
