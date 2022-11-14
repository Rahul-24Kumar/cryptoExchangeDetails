const ftx = require('../models/ftx');
const indoex = require('../models/indoex');
const binance = require('../models/binance');
const coinModel = require("../models/all_Coins");
const coinpairModel = require("../models/all_Pairs");
const exchangeModel = require("../models/all_Exchanges");








const coinPair = async (req, res) => {

  try {
  
    let allPairData = [];

    let findInbinance = await binance.find();
    let findInftx = await ftx.find();
    let findInIndoex = await indoex.find();

    allPairData.push(findInbinance);
    allPairData.push(findInftx);
    allPairData.push(findInIndoex);

    return res.status(200).send({msg: "successful", pairsDetails: allPairData});

  } catch (error) {
    return res.status(500).send({msg: "some error!", error});
  }
}





const getCoinByExIdAndCoinId = async (req, res) => {
  try {
    
    let { coinName, exchangeId } = req.body;

    let fetchedData = await coinpairModel.find({
      coinName:coinName,
      exchangeId: exchangeId,
    });
    
    res.status(200).json({
      message: `success`,
      error: null,
      data: fetchedData,
    });
  } catch (error) {
   
  }
};


module.exports = { coinPair, getCoinByExIdAndCoinId };
