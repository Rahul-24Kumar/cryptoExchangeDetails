const mongoose = require("mongoose");

let allCoins = new mongoose.Schema({

    S_No: {
        type: Number,
    },
    coinId: {
        type: Number,
    },
    coinName: {
        type: String,
    },
    symbol: {
        type: String,
    },
    logo: {
        type: String,
    },
    contractAddress: {
        type: String,
    },
    Decimal: {
        type: Number,
    },

    protocol: {
        type: String,
    },
    network: {
        type: String,
    },
    website: {
        type: String,
    },
    exploreLink: {
        type: String,
    },

    socialMedia: {
        type: String,
    }
});

module.exports = mongoose.model("coinInfo", allCoins);
