// build your `Resource` model here
const db = require('../../data/dbConfig');
const getAll = () => {
  return db('resources');
};

const getById = (id) => {
  return db('resources').where('id', id).first()
}


const insert = data => {
  return db('resources')
    .insert(data)
    .then(([id]) => {
      return db('resources').where('id', id).first();
    });
};

function update(id, changes) {
  return db('resources')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? getById(id) : null));
}

const remove = (id) => {
  return db('resources').where({ id }).del()
}


module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};