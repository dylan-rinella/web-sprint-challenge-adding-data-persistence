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

router.post('/', (req, res) => {
  projects.insert(req.body)
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.put('/:id', (req, res) => {
  projects.update(req.params, req.body)
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.delete('/:id', (req, res) => {
  projects.remove(req.params)
    .then(project => {
      res.json(project)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

module.exports = router
