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
        type:Number
    },
    highPrice:{
        type:Number
    },
    openPrice:{
        type:Number
    },
    closePrice:{
        type:Number
    },
    volume:{
        type:Number
    },
    marketCap:{
        type:String
    },
    circulatingSUpply:{
        type:String
    },
    timeStamp:{
        type:Number
    }
})

module.exports = mongoose.model("Coinpair", pairSchema)