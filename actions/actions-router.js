
const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req.params.id);
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The actions information could not be retrieved." });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id);
        res.status(200).json(action);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "The actions information could not be retrieved." });
    }
});

router.post('/', async (req, res) => {
    if(!req.body.notes || !req.body.description){
        res.status(400).json({ errorMessage: 'Please provide notes and description for the action' });
    } else {
         try {
            if(req.headers.projectid){
                const newAction = { ...req.body, project_id: req.headers.projectid};
                const action = await Actions.insert(newAction);
 
                res.status(201).json(action);
            } else {
                res.status(404).json({ errorMessage: 'Requires id of the project the actions belong to' });
            }
         } catch (error) {
            console.log(error);
            res.status(500).json({ error: "There was an error while saving the action to the database" });
         }
    }
 });
 
module.exports = router;