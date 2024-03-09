const jwt = require('jsonwebtoken');
const User = require('../model/User');
const router = require('express').Router();
const AuthMiddelware = require('../middleware/AuthCheck');

router.post('/signup', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id }, 'chi_code'); // replace 'secret_key' with your secret key
    res.status(201).send({ token });
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.isValidPassword(req.body.password))) {
        return res.status(400).send({ error: 'Invalid login credentials' });
    }
    const token = jwt.sign({ _id: user._id }, 'chi_code'); // replace 'secret_key' with your secret key
    res.send({ token });
});

router.get('/Profile', AuthMiddelware, async (req, res) => {
    // View logged in user profile
    res.send(req.user);
});

module.exports = router;