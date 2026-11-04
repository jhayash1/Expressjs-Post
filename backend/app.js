const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const PORT = 3000;

const taskRoutes = require("./routes/taskRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:"http://localhost:5173"
}))



mongoose
  .connect("mongodb://127.0.0.1:27017/taskdb")
  .then(() => {
    console.log(`Mongo DB connected Sucessfully`);
  })
  .catch((err) => console.log(`Mongo DB : ${err}`));

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
