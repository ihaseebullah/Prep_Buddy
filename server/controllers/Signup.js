const bcrypt = require('bcrypt')
const { USER } = require('../Database/User')
const salt = bcrypt.genSaltSync(10)
async function Signup(req, res) {
    const { username, password, fullName, email, phone, dob } = req.body;
    try {
        const newUser = new USER({
            username: username,
            phone,
            email,
            dob,
            fullName,
            password: bcrypt.hashSync(password, salt)
        });

        await newUser.save().then(() => {
            console.log(newUser)
            res.status(200).json({ success: true, newUser });
        });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.username) {
            res.status(400).json({ success: false, error: 'Username already exists' });
        } else if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map((val) => val.message);
            res.status(400).json({ success: false, error: errorMessages });
        } else {
            console.log(error)
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }


}

module.exports = { Signup }