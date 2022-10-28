const mongoose = require("mongoose");

const binanceSchema = new mongoose.Schema({

    symbol: {
        type: String,
    },

    priceChange: {
        type: String,
    },

    priceChangePercent: {
        type: String,
    },

    weightedAvgPrice: {
        type: String,
    },

    prevClosePrice: {
        type: String,
    },

    lastPrice: {
        type: String,
    },

    lastQty: {
        type: Number,
    },

    bidPrice: {
        type: String,
    },

    bidQty: {
        type: String,
    },

    askPrice: {
        type: String,
    },

    askQty: {
        type: String,
    },

    openPrice: {
        type: String
    },

    highPrice: {
        type: String
    },

    lowPrice: {
        type: String
    },

    volume: {
        type: String,
    },

    quoteVolume: {
        type: String,
    },

    openTime: {
        type: Date
    },

    closeTime: {
        type: Date
    },

    firstId: {
        type: Number
    },

    lastId: {
        type: Number
    },

    count: {
        type: Number
    },
});

module.exports = mongoose.model("binance", binanceSchema);
