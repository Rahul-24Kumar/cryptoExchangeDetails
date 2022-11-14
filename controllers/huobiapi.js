const bitget = require("../models/bitget")
const axios = require("axios")

const huobiapiExchange = async () => {

    try {

        let options = {
            method: "get",
            url: "https://api.huobi.pro/market/tickers"
        }


        let response = await axios(options);

        let result = response.data.data

        let huobiapiApiData = [];


        result.forEach(element => {
            huobiapiApiData.push({

                pairName: element.symbol,
                lastPrice: element.close,
                highPrice: element.high,
                lowPrice: element.low,
                volume: element.vol,
                askPrice: element.ask,
                bidPrice: element.bid,
                tradeCount: element.count,
                amount: element.amount

            });
        });



        let huobiapiInDb = await bitget.insertMany(huobiapiApiData);
        console.log(huobiapiInDb);

        // return res.status(200).send({ msg: "successful", huobiapiAllData: huobiapiInDb });

    } catch (error) {
        //  return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

 // setInterval(huobiapiExchange, 1500);



let getHuobiapiAllPair = async (req, res) => {
    try {

        let bitgetApi = await bitget.find().select({ pairName: 1 })

        return res.status(200).send({ msg: "successfull", huobiapiPairData: bitgetApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}

module.exports = { huobiapiExchange, getHuobiapiAllPair }
