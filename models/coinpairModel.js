const mongoose = require("mongoose")

const pairSchema = new mongoose.Schema({

      
    exchangeId:{
         type:mongoose.Schema.Types.Number,
         ref:"exchange"
    },

    coinId :{
        type:mongoose.Schema.Types.Number,
        ref:"coinInfo"
    },

    coinownId:{
        type:Number
    },
    coinName :{
        type:String
    },
    coinSymbol:{
        type:String
    },
    coinPrice:{
        type:Number
    },
    coin24hPrice:{
        type:Number
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
    circulatingSUpply:{
        type:String,
        default:null
    },
    timeStamp:{
        type:Number
    }
})

module.exports = mongoose.model("Coinpair", pairSchema)