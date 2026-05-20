const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const internRoutes = require("./routes/internRoutes");
const taskRoutes = require("./routes/taskRoutes");
const tokenRoutes = require("./routes/tokenRoutes");

// Use Routes
app.use("/api/interns", internRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/tokens", tokenRoutes);

app.get("/", (req, res) => {
    res.send("Backend API Running Successfully");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});