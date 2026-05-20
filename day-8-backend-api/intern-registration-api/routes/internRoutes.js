const express = require("express");

const router = express.Router();


const {
    registerIntern,
    getInterns
} = require("../controllers/internController");

// POST API
router.post("/register", registerIntern);

// GET API
router.get("/", getInterns);

module.exports = router;