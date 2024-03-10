const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();
const {createTask, getTasks} = require("../controllers/taskController");

// Api Routes
router.post("/api/tasks",createTask);
router.get("/api/tasks",getTasks);

module.exports = router;