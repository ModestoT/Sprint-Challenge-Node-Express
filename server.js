const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const actionsRouter = require('./actions/actions-router.js'); 
const projectsRouter = require('./projects/projects-router.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;