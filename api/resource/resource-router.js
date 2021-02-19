// build your `/api/resources` router here
const express = require('express')

const resources = require('./resource-model')

const router = express.Router()

router.get('/', (req, res) => {
  resources.getAll()
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.get('/:id', (req, res) => {
  resources.getById(req.params)
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.post('/', (req, res) => {
  resources.insert(req.body)
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.put('/:id', (req, res) => {
  resources.update(req.params, req.body)
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

router.delete('/:id', (req, res) => {
  resources.remove(req.params)
    .then(resource => {
      res.json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
})

module.exports = router
