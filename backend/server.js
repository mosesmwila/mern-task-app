const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose") 

const app = express()

connectDB();

// Routes
app.get("/", (req,res) => {
    res.send("Home Page");
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

