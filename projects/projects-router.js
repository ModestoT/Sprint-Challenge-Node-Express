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

router.post('/', async (req, res) => {
    if(!req.body.name || !req.body.description){
        res.status(400).json({ errorMessage: 'Please provide name and description for the project' });
    } else {
        try {
            const project = await Projects.insert(req.body);
 
            res.status(201).json(project);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "There was an error while saving the project to the database" });
        }
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const projectId = await Projects.remove(req.params.id);

        if(projectId){
            res.status(200).json({ message: 'Project deleted' });
        } else {
            res.status(404).json({ errorMessage: "The project with the specified ID does not exist." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The project could not be removed" });
    }
});

module.exports = router;