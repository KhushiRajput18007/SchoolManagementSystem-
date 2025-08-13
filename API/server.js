const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());


mongoose.connect("mongodb://localhost:27017/schoolManagement2025")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });


app.get("/test", (req, res) => {
    res.send({ id: 1, message: "Welcome, it is working!" });
});


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log("Server is running on port =>", PORT);
});

