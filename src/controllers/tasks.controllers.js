//require
const { getConnection } = require("../database");
const { v4 } = require("uuid");

//route get('/tasks')
const getTasks = (req, res) => {
  const tasks = getConnection().get("tasks").value();
  res.send(tasks);
};

//route post('/task')
const createTasks = (req, res) => {
  const newTaks = {
    id: v4(),
    title: req.body.title,
    description: req.body.description,
  };
  getConnection().get("tasks").push(newTaks).write();
  console.log(newTaks);
  res.redirect("/tasks");
};

//route get('/task/:id')
const getTask = (req, res) => {
  const id_task = req.params.id;
  const task = getConnection().get("tasks").find({ id: id_task });
  res.json(task);
};

//route put('/task/:id')
const updateTask = (req, res) => {
  const id_task = req.params.id;
  getConnection()
    .get("tasks")
    .find({ id: id_task })
    .assign(req.body)
    .write()
    .then((data) => {
      res.redirect("/tasks");
    });
};

//route deleta('/task/:id')
const deleteTaks = (req, res) => {
  const id_task = req.params.id;
  getConnection()
    .get("tasks")
    .remove({ id: id_task })
    .write()
    .then((data) => {
      res.redirect("/tasks");
    });
};

module.exports = {
  getTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTaks,
};
