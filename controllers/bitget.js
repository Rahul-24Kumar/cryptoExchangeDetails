const bitget = require("../models/bitget");
const axios = require("axios");

const bitgetExchange = async () => {
  try {
    let options = {
      method: "get",
      url: "https://api.bitget.com/api/mix/v1/market/tickers?productType=umcbl",
    };

    let response = await axios(options);

    let result = response.data.data;

    let bitgetApiData = [];

    result.forEach((element) => {
      bitgetApiData.push({
        pairName: element.symbol,
        lastPrice: element.last,
        highPrice: element.high24h,
        lowPrice: element.low24h,
        baseVolume: element.baseVolume,
        quoteVolume: element.quoteVolume,
        bidPrice: element.bestBid,
        askPrice: element.bestAsk,
        priceChangePercent: element.priceChangePercent,
        timeStamp: element.timestamp,
      });
    });

    let bitgetInDb = await bitget.insertMany(bitgetApiData);
    console.log(bitgetInDb);

    // return res.status(200).send({ msg: "successful", bitgetAllData: bitgetInDb });
  } catch (error) {
    // return res.status(500).send({ msg: "There is some technical error!", error });
  }
};


//setInterval(bitgetExchange, 1500);

let getBitgetAllPair = async (req, res) => {
  try {
    let bitgetApi = await bitget.find().select({ pairName: 1 });

    return res
      .status(200)
      .send({ msg: "successfull", bitgetPairData: bitgetApi });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "There is some technical error!", error });
  }
};

module.exports = {
  bitgetExchange,
  getBitgetAllPair,
};
