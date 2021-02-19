// build your `Task` model here
const db = require('../../data/dbConfig');
const getAll = () => {
  return db('tasks');
};

const getById = (id) => {
  return db('tasks').where('id', id).first()
}


const insert = data => {
  return db('tasks')
    .insert(data)
    .then(([id]) => {
      return db('tasks').where('id', id).first();
    });
};

function update(id, changes) {
  return db('tasks')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? getById(id) : null));
}

const remove = (id) => {
  return db('tasks').where({ id }).del()
}


module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};