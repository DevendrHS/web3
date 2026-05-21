const Intern = require("../models/Intern");

// Register Intern
const registerIntern = async (req, res) => {

    try {

        const newIntern = await Intern.create(req.body);

        res.status(201).json({
            message: "Intern Registered Successfully",
            intern: newIntern
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Interns
const getInterns = async (req, res) => {

    try {

        const interns = await Intern.find();

        res.status(200).json(interns);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    registerIntern,
    getInterns
};