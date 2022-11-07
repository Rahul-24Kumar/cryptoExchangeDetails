const mongoose = require("mongoose");

let allCoins = new mongoose.Schema({

    S_NO: {
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

    contract_Addrress: {
        type: String,
        default: null
    },

    network: {
        type: String,
        default: null
    },

    website: {
        type: String,
        default: null
    },

});

module.exports = mongoose.model("coinsDetails", allCoins);
