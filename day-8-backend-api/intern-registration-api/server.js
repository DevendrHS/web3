const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const internRoutes = require("./routes/internRoutes");

// Use Routes
app.use("/api/interns", internRoutes);

app.get("/", (req, res) => {
    res.send("Intern Registration API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});