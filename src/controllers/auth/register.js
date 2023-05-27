const User = require('../../modals/userModal');

const register = async (req, res) => {
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
            return res.status(200).send("Already A User");
        }
        else {
            const newUser = await User.create(req.body)
            return res.status(404).send("User Registered Successfully");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}
module.exports = register;