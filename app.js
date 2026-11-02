const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let tasks = [];
app.post("/tasks", (req, res) => {

    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Task title is required"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title: title,
        description: description || "",
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully!",
        task: newTask
    });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
