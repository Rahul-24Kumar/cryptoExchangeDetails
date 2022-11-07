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

  coinId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coinsDetails',
  }
});


module.exports = mongoose.model("allExchanges", exchange);
