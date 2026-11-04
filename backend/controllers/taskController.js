const Task = require("../model/Task.js");
const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Task title is required",
      });
    }

    const newTask = await Task.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Task created successfully!",
      task: newTask,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description } = req.body;
    const update = await Task.findByIdAndUpdate(taskId, {
      title: title,
      description: description,
    });
    if (!update) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({
      message: "Task updated successfully",
      task: update,
    });
  } catch (error) {
    res.status(500).json({
      message: "Task not updated",
      error: error.message,
    });
  }
};
const deleteTask = async (req, res) => {
  try {
     const taskId = req.params.id;
     const deleteTask = await Task.findByIdAndDelete(taskId)
     if (!deleteTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({
      message: "Task Delete successfully",
      task: deleteTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Task not Deleted",
      error: error.message,
    });
  }
};

module.exports = { getTask, createTask, updateTask, deleteTask };
