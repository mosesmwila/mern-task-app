const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");


const app = express()

connectDB();

// Middle
app.use(express.json())
app.use(express.urlencoded({extended: false}));


// Routes
app.get("/", (req,res) => {
    res.send("Home Page");
});

// create a task
app.post("/api/tasks", async (req,res) => {
try {
   const task = await Task.create(req.body)
   res.status(200).json(task);
}  catch (error) {
   res.status(500).json({msg: error.message})
}
});

const PORT = process.env.PORT || 5000

mongoose
     .connect(process.env.MONGO_URI)
     .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
     })
     .catch((err) => console.log(err));

