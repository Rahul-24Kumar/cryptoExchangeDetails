const mongoose = require("mongoose")

const pairSchema = new mongoose.Schema({
      
    exchangeId:{
         type:mongoose.Schema.Types.Number,
         ref:"allExchanges"
    },

    coinId :{
        type:mongoose.Schema.Types.Number,
        ref:"coinsDetails"
    },

    pairSymbol: {
        type: String,
    },
    
    lowPrice:{
        type:Number,
        default:null
    },

    highPrice:{
        type:Number,
        default:null
    },

    openPrice:{
        type:Number,
        default:null
    },

    closePrice:{
        type:Number,
        default:null
    },

    volume:{
        type:Number
    },

    marketCap:{
        type:String,
        default:null
    },
    
})

module.exports = mongoose.model("coinPairs", pairSchema)