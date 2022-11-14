const mongoose = require("mongoose");

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

  markets: {
    type: String,
    default: null
  },

  volume: {
    type: String,
    default: null
  },

  coins: {
    type: Number,
    default: 0
  },

  avgLiquidity: {
    type: String,
    default: null
  },
  
  time: {
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model("allExchanges", exchange);
