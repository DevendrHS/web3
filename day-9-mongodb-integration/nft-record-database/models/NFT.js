const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({

    nftName: {
        type: String,
        required: true
    },

    ownerWallet: {
        type: String,
        required: true
    },

    tokenId: {
        type: Number,
        required: true
    },

    metadataURI: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("NFT", nftSchema);