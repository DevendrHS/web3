const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({

    name: String,

    email: String,

    walletAddress: String,

    rewardPoints: Number

});

module.exports = mongoose.model(
    "Intern",
    internSchema
);