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
    protocol: {
        type: String,
    },
    network: {
        type: String,
    },
    website: {
        type: String,
    },
    explore_Link: {
        type: String,
    },

    socialMedia: {
        type: String,
    }
});

module.exports = mongoose.model("coinInfo", allCoins);
