const mongoose = require('mongoose');

let exchange = new mongoose.Schema({

    S_No: {
        type: Number,
    },

    exchangeId: {
        type: Number,
    },

    exchangeName: {
        type: String,
    },

    NoOf_Coins: {
        type: Number,
    },

    status: {
        type: Boolean,
    },

    baseUrl: {
        type: URL,
    },
    
    NoOfApi: {
        type: Number,
    }


})

module.exports = mongoose.model("exchange", exchange);