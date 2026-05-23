const express = require("express");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
const nftRoutes = require("./routes/nftRoutes");

app.use("/api/nfts", nftRoutes);

app.get("/", (req, res) => {
    res.send("NFT Record Database Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});