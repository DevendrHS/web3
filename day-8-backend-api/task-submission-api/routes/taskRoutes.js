const express = require("express");

const router = express.Router();

const {
    submitTask,
    getTasks
} = require("../controllers/taskController");

// POST API
router.post("/submit", submitTask);

// GET API
router.get("/", getTasks);

module.exports = router;