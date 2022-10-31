const mongoose = require("mongoose");

let allCoins = new mongoose.Schema({

    coinId:{
        type:Number,
        
    },

    S_NO: {
        type:Number,
        
    },
    contract_Addrress:{
        type:String,
        
        default:null
    },
    coin_Name:{
        type:String,
        
        required:true
    },
    symbol:{
        type:String,
        
        required:true
    },
    decimal:{
        type:String,
        default:null
    },
    logo:{
        type:String,
        
        default:null
    },
    exchange_Name:{
        type:String,
        
        default:null
    },
    exchange_Link:{
        type:String,
        default:null
    },
    network:{
        type:String,
        
        default:null
    },
    protocol:{
        type:String,
        default:null
    },
    website:{
        type:String
    },
    explorerlink:{
        type:String,
        defalt:null
    },
    social_Media:{
        type:String,
        default:null
    }
});

module.exports = mongoose.model("coinInfo", allCoins);
