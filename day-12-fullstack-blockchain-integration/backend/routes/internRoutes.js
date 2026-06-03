const express = require("express");
const router = express.Router();

const Intern = require("../models/Intern");

router.post("/", async (req, res) => {

    try {

        const intern = new Intern(req.body);

        await intern.save();

        res.status(201).json(intern);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

});

router.get("/", async (req, res) => {

    const interns = await Intern.find();

    res.json(interns);

});

module.exports = router;