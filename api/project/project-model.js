const db = require('../../data/dbConfig');
const getAll = () => {
  return db('projects');
};

const getById = (id) => {
  return db('projects').where('id', id).first()
}


const insert = data => {
  return db('projects')
    .insert(data)
    .then(([id]) => {
      return db('projects').where('id', id).first();
    });
};

function update(id, changes) {
  return db('projects')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? getById(id) : null));
}

const remove = (id) => {
  return db('projects').where({ id }).del()
}


module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};