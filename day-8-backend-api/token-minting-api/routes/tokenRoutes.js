const express = require("express");

const router = express.Router();

const {
    mintToken,
    getTokens
} = require("../controllers/tokenController");

// POST API
router.post("/mint", mintToken);

// GET API
router.get("/", getTokens);

module.exports = router;