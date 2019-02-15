const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.params.id);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The projects information could not be retrieved." });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The projects information could not be retrieved." });
    }
});

module.exports = router;