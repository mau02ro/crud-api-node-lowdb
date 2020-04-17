const { Router } = require("express");
const {
  getTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTaks,
} = require("../controllers/tasks.controllers");
//initialize
const router = Router();

//routes
router.get("/tasks", getTasks);
router.get("/task/:id", getTask);
router.post("/task", createTasks);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTaks);

//exports
module.exports = router;
