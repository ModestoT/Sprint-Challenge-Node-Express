
const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id);
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The projects information could not be retrieved." });
    }
});

module.exports = router;