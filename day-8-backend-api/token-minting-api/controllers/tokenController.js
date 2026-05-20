const tokens = require("../data/tokens");

// Mint Token
const mintToken = (req, res) => {

    const { wallet, amount, token } = req.body;

    const newMint = {
        id: tokens.length + 1,
        wallet,
        amount,
        token
    };

    tokens.push(newMint);

    res.status(201).json({
        message: "Token Minted Successfully",
        mint: newMint
    });
};

// Get All Mint Records
const getTokens = (req, res) => {

    res.status(200).json(tokens);

};

module.exports = {
    mintToken,
    getTokens
};