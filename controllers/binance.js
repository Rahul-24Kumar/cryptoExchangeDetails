let axios = require('axios');
let binanceModel = require('../models/binance');

const binanceFunction = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'https://api.binance.com/api/v3/ticker/24hr',
        };

        let response = await axios(options)

        let result = response.data

        let binanceApiData = []

        result.forEach(element => {
            binanceApiData.push({
                pairName: element.symbol,
                lastPrice: element.lastPrice,
                bidPrice: element.bidPrice,
                highPrice: element.highPrice,
                lowPrice: element.lowPrice,
                volume: element.volume,
                quoteVolume: element.quoteVolume
            })
        });


        let binanceApiInDb = await binanceModel.insertMany(binanceApiData);

        return res.status(200).send({ msg: "successful", binanceData: binanceApiInDb });

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

let getBinanceAllPair = async (req, res) => {
    try {
       
        let binanceApi = await binanceModel.find().select({pairName: 1})

        return res.status(200).send({ msg: "successfull", binanceApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}



module.exports = {
    binanceFunction,
    getBinanceAllPair
}
