const router = require('express').Router();
const Equipe = require('../model/Equipe');

// Create equipe
router.post('/equipes', async (req, res) => {
    const equipe = new Equipe(req.body);
    await equipe.save();
    res.status(201).send(equipe);
});

// Read all equipes
router.get('/equipes', async (req, res) => {
    const equipes = await Equipe.find({});
    res.send(equipes);
});

// Read one equipe
router.get('/equipes/:id', async (req, res) => {
    const equipe = await Equipe.findById(req.params.id);
    if (!equipe) {
        return res.status(404).send();
    }
    res.send(equipe);
});

// Update equipe
router.patch('/equipes/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'Country']; // the fields that can be updated
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }
    const equipe = await Equipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!equipe) {
        return res.status(404).send();
    }
    res.send(equipe);
});

// Delete equipe
router.delete('/equipes/:id', async (req, res) => {
    const equipe = await Equipe.findByIdAndDelete(req.params.id);
    if (!equipe) {
        return res.status(404).send();
    }
    res.send(equipe);
});

module.exports = router;