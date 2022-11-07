let binance = require('../models/binance');
let ftx = require('../models/ftx');
let indeox = require('../models/indoex');
let bitstamp = require('../models/bitstamp');


let coinsValueInAllExchanges = async (req, res) => {
try {

    let binanceId = req.param.binanceId
    let ftxId = req.param.ftxId
    let bitstampId = req.param.bitstampId
    let indeoxId = req.param.indeoxId

    
    let valueOfCoins = await binance.find()
} catch (error) {
    return res.status(500).send({msg: "some error!", error});
}
}

module.exports = {coinsValueInAllExchanges}