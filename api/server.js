const express = require('express')

const projectRouter = require('../api/project/project-router')
const resourceRouter = require('../api/resource/resource-router')
const taskRouter = require('./task/task-router')

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;