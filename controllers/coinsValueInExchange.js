let okx = require('../models/okx');
let ftx = require('../models/ftx');
let bybit = require('../models/bybit');
let bitso = require('../models/bitso');
let bitget = require('../models/bitget');
let indoex = require('../models/indoex');
let binance = require('../models/binance');
let bitstamp = require('../models/bitstamp');
let huobiapi = require('../models/huobiapi');
let poloniex = require('../models/poloniex');


let coinsValueInAllExchanges = async (req, res) => {
    try {


        let valueOfOkxPair = await okx.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfFtxPair = await ftx.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfBybitPair = await bybit.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfBitsoPair = await bitso.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfIndoexPair = await indoex.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfBitgetPair = await bitget.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfBinancePair = await binance.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfPoloniexPair = await poloniex.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfBitstampPair = await bitstamp.find().select({ pairName: 1, coinName: 1, price: 1 });
        let valueOfHuobiapiPair = await huobiapi.find().select({ pairName: 1, coinName: 1, price: 1 });


let finalValue  =   [];

finalValue.push(valueOfOkxPair);
finalValue.push(valueOfFtxPair);
finalValue.push(valueOfBybitPair);
finalValue.push(valueOfBitsoPair);


    } catch (error) {
        return res.status(500).send({ msg: "some error!", error });
    }
}

module.exports = { coinsValueInAllExchanges }






    // let binanceId = req.param.binanceId
    // let ftxId = req.param.ftxId
    // let bitstampId = req.param.bitstampId
    // let indeoxId = req.param.indeoxId
