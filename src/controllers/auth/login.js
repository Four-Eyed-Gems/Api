const User = require('../../modals/userModal');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        if (!req.body.email && req.body.password) {
            return res.status(404).send("Invalid email")
        }

        if (req.body.email && !req.body.password) {
            return res.status(404).send("Invalid password")
        }

        if (!req.body.email && !req.body.password) {
            return res.status(404).send("Invalid email and password")
        }

        const auhthenticatedUser = await User.find({ email: req.body.email })
        if (auhthenticatedUser.length > 0) {
            let availUser = auhthenticatedUser[0];
            // delete availUser._id
            let payload = {
                email: availUser.email,
                password: availUser.password
            }

            if (availUser.password !== req.body.password) {
                return res.status(200).send("Invalid Credential");
            }
            else {
                const keys = process.env.JWT_SECERET_KEY;
                const token = jwt.sign(payload, keys, { expiresIn: '1h' });
                return res.status(200).json({
                    data: availUser,
                    access_token: token
                });
            }
        }
        else {
            res.status(404).send("Unauthorized User");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = login;