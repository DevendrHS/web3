const express = require("express");

const router = express.Router();

const Intern = require("../models/Intern");

// Register Intern
router.post("/register", async (req, res) => {

    try {

        const intern = await Intern.create(req.body);

        res.status(201).json(intern);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// Get Interns
router.get("/", async (req, res) => {

    try {

        const interns = await Intern.find();

        res.status(200).json(interns);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;