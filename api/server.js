const express = require('express')

const projectRouter = require('../api/project/project-router')
const resourceRouter = require('../api/resource/resource-router')

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)

module.exports = server;