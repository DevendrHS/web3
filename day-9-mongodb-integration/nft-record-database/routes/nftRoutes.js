const express = require("express");

const router = express.Router();

const {
    createNFT,
    getNFTs
} = require("../controllers/nftController");

// POST API
router.post("/create", createNFT);

// GET API
router.get("/", getNFTs);

module.exports = router;