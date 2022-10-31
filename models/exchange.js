const mongoose = require('mongoose');

let exchange = new mongoose.Schema({

    S_No: {
        type: Number,
    },

    exchangeId: {
        type: Number,
        unique:true
    },

    exchangeName: {
        type: String,
        required:true
    },

    NoOf_Coins: {
        type: Number,
        default:0
    },

    status: {
        type: Boolean,
        default:false
    },

    baseUrl: {
        type: String,
        default:""
    },
    
    NoOfApi: {
        type: Number,
        default :0
    }


})

module.exports = mongoose.model("exchange", exchange);