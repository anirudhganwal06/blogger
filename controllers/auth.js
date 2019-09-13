const User = require('../models/user');

const validateSignupInput = require('../validation/signup');

exports.postSignup = async (req, res) => {
    try {
        const { errors, isValid } = validateSignupInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const oldUserWithEmail = await User.findOne({ email: req.body.email });
        if (oldUserWithEmail) {
            errors.email = 'This email is already registered with us';
            return res.status(400).json(errors);
        } else {
            const oldUserWithUsername = await User.findOne({ username: req.body.username });
            if (oldUserWithUsername) {
                errors.username = 'This username is already taken';
                return res.status(400).json(errors);
            } else {
                const user = new User({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password1
                });
                await user.save();
                return res.json(user);
            }
        }
    } catch (err) {
        console.log(err);
    }
}