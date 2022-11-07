const okx = require("../models/okx")
const axios = require("axios")

const okxExchange = async (req, res) => {

    try {

        let options = {
            method: "get",
            url: "https://www.okx.com/api/v5/market/tickers?instType=SWAP"
        }


        let response = await axios(options);

        let result = response.data.data

        let okxApiData = [];


        result.forEach(element => {
            okxApiData.push({
                pairName: element.instId,
                lastPrice: element.last,
                highPrice: element.high24h,
                lowPrice: element.low24h,
                volume: element.vol24h,
            });
        });



        let okxInDb = await okx.insertMany(okxApiData);


        return res.status(200).send({ msg: "successful", okxAllData: okxInDb });

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

let getOkxAllPair = async (req, res) => {
    try {

        let okxApi = await okx.find().select({ pairName: 1 })

        return res.status(200).send({ msg: "successfull", okxPairData: okxApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}

module.exports = { okxExchange, getOkxAllPair }
