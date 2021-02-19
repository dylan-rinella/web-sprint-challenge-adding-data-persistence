const express = require('express')

const projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
  projects.getAll()
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.get('/:id', (req, res) => {
  projects.getById(req.params)
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

module.exports = router
