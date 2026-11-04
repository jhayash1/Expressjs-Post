

const express = require("express")
const router = express.Router()

const tasksController = require("../controllers/taskController.js");

router.get("/",tasksController.getTask)
router.post("/",tasksController.createTask)
router.put("/:id",tasksController.updateTask)
router.delete("/:id",tasksController.deleteTask)

module.exports = router;