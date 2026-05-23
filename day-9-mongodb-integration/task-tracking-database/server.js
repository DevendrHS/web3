const express = require("express");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Tracking Database Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});