const mongoose = require("mongoose")

const poloniexSchema = new mongoose.Schema({

    symbol: {
        type: String,
        default: null
    },

    pairName: {
        type: String,
        default: null
    },

    coinName: {
        type: String,
        default: null
    },

    price: {
        type: String,
        default: null
    },

    priceChangePercent: {
        type: String,
        default: null
    },

    lastPrice: {
        type: String,
        default: null
    },


    openPrice: {
        type: String,
        default: null
    },

    lastQty: {
        type: Number,
        default: null
    },

    bidPrice: {
        type: String,
        default: null
    },

    lastPrice: {
        type: String,
        default: null
    },

    highPrice: {
        type: String,
        default: null
    },

    lowPrice: {
        type: String,
        default: null
    },

    volume: {
        type: String,
        default: null
    },
    
    baseVolume: {
        type: String,
        default: null
    },

    quoteVolume: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model("poloniex", poloniexSchema)