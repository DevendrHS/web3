const express = require("express");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// Database Connection
connectDB();

// Routes
const internRoutes = require("./routes/internRoutes");

app.use("/api/interns", internRoutes);

app.get("/", (req, res) => {
    res.send("Intern Profile Database Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
});