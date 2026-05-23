const NFT = require("../models/NFT");

// Create NFT Record
const createNFT = async (req, res) => {

    try {

        const newNFT = await NFT.create(req.body);

        res.status(201).json({
            message: "NFT Record Created Successfully",
            nft: newNFT
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All NFT Records
const getNFTs = async (req, res) => {

    try {

        const nfts = await NFT.find();

        res.status(200).json(nfts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createNFT,
    getNFTs
};