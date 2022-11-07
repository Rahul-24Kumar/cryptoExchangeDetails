const poloniex = require("../models/poloniex")
const axios = require("axios")

const poloniexExchange = async (req, res) => {

    try {

        let options = {
            method: "get",
            url: "https://api.poloniex.com/markets/ticker24h"
        }


        let response = await axios(options);

        let result = response.data

        let poloniexApiData = [];


        result.forEach(element => {
            poloniexApiData.push({
                coinName: element.displayName,
                pairName: element.symbol,
                lastPrice: element.close,
                highPrice: element.high,
                lowPrice: element.low,
                baseVolume: element.baseVolume,
                quoteVolume: element.quoteVolume
            });
        });



        let poloniexInDb = await poloniex.insertMany(poloniexApiData);


        return res.status(200).send({ msg: "successful", poloniexAllData: poloniexInDb });

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

let getPoloniexAllPair = async (req, res) => {
    try {

        let poloniexApi = await poloniex.find().select({ pairName: 1 })

        return res.status(200).send({ msg: "successfull", poloniexPairData: poloniexApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}

module.exports = { poloniexExchange, getPoloniexAllPair }
