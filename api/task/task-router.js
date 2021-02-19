// build your `/api/tasks` router here
const express = require('express')

const tasks = require('./task-model')

const router = express.Router()

router.get('/', (req, res) => {
  tasks.getAll()
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.get('/:id', (req, res) => {
  tasks.getById(req.params)
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.post('/', (req, res) => {
  tasks.insert(req.body)
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.put('/:id', (req, res) => {
  tasks.update(req.params, req.body)
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.delete('/:id', (req, res) => {
  tasks.remove(req.params)
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

module.exports = router
