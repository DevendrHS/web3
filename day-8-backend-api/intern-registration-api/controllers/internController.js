const interns = require("../data/interns");

// Register Intern
const registerIntern = (req, res) => {

    const { name, email, role } = req.body;

    const newIntern = {
        id: interns.length + 1,
        name,
        email,
        role
    };

    interns.push(newIntern);

    res.status(201).json({
        message: "Intern Registered Successfully",
        intern: newIntern
    });
};

// Get All Interns
const getInterns = (req, res) => {

    res.status(200).json(interns);

};

module.exports = {
    registerIntern,
    getInterns
};