const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const internRoutes = require("./routes/internRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/interns", internRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/internDapp")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});