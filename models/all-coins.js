const mongoose = require("mongoose");

let allCoins = new mongoose.Schema({

    S_No: {
        type: Number,
    },
    Id :{
        type:String,
        unique :true
    },
    coinId: {
        type: Number,
        unique:true,
        default:null
    },
    coinName: {
        type: String,
        unique:true,
        default:null
    },
    symbol: {
        type: String,
        unique:true,
        default:null
    },
    protocol: {
        type: String,
    },
    network: {
        type: String,
        
    },
    website: {
        type: [String],
    },
    explore_Link: {
        type: [String],
    },

    socialMedia: {
        type: [String],
    }
});

module.exports = mongoose.model("coinInfo", allCoins);
