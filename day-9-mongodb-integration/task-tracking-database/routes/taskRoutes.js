const express = require("express");

const router = express.Router();

const {
    createTask,
    getTasks
} = require("../controllers/taskController");

// POST API
router.post("/create", createTask);

// GET API
router.get("/", getTasks);

module.exports = router;