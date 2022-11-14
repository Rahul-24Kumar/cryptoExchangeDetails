let axios = require("axios");
let binanceModel = require("../models/binance");
const { find } = require("../models/poloniex");

const binanceFunction = async function () {
  try {
    let options = {
      method: "get",
      url: "https://api.binance.com/api/v3/ticker/24hr",
    };

    let response = await axios(options);

    let result = response.data;

    let binanceApiData = [];

    result.forEach((element) => {
      binanceApiData.push({
        pairName: element.symbol,
        lastPrice: element.lastPrice,
        bidPrice: element.bidPrice,
        highPrice: element.highPrice,
        lowPrice: element.lowPrice,
        volume: element.volume,
        quoteVolume: element.quoteVolume,
        priceChange: element.priceChange,
        priceChangePercent: element.priceChangePercent,
        weightedAvgPrice: element.weightedAvgPrice,
        prevClosePrice: element.prevClosePrice,
        lastQty: element.lastQty,
        bidQty: element.bidQty,
        askPrice: element.askPrice,
        openPrice: element.openPrice,
        openTime: element.openTime,
        closeTime: element.closeTime,
        firstId: element.firstId,
        lastId: element.lastId,
        tradeCount: element.count,
      });
    });

    let binanceApiInDb = await binanceModel.insertMany(binanceApiData);
    let findTime = await binanceModel.find(time);
    console.log(findTime);

    let indian = new Date(findTime);
    let indianTime = indian.toLocaleString(indian);
    binanceModel.updateMany({ time: indianTime });

    //
    // const dateInIndian = new Date(time);
    //
    // let indianTime = dateInIndian.toLocaleString()
    // binanceApiData.push(indianTime);
    // console.log(indianTime);
    //
    console.log(binanceApiInDb);

    //  return res.status(200).send({ msg: "successful", binanceData: binanceApiInDb });
  } catch (error) {
    // return res.status(500).send({ msg: "There is some technical error!", error });
  }
};

//setInterval(binanceFunction, 1000);

let getBinanceAllPair = async (req, res) => {
  try {
    // let binanceApi = await binanceModel.find()
    // console.log(binanceApi)
    //
    //
    let binanceApi = await binanceModel
      .find()
      .select({ lastPrice: 1, pairName: 1 })
      .sort({ lastPrice: -1 });

    console.log(binanceApi);
    return res.status(200).send({ msg: "successfull", binanceApi });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "There is some technical error!", error });
  }
};

module.exports = {
  binanceFunction,
  getBinanceAllPair,
};
