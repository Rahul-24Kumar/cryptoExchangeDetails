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
        default: null
    },

    symbol: {
        type: String,
        default: null
    },

    price: {
        type: String,
        default: null
    },

    contractAddrress: {
        type: String,
        default: null
    },

    network: {
        type: String,
        default: null
    },

    volume: {
        type: String,
        default: null
    },

    marketCap: {
        type: String,
        default: null
    },

    priceChangePercent1h: {
        type: String,
        default: null
    },

    priceChangePercent24h: {
        type: String,
        default: null
    },

    priceChangePercent7d: {
        type: String,
        default: null
    },

    circulatingSupply: {
        type: String,
        default: null
    },

    website: {
        type: String,
        default: null
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("coinsDetails", allCoins);
