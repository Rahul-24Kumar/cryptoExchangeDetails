let axios = require('axios');
let bitstampModel = require('../models/bitstamp');


const bitstampFunction = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: 'https://www.bitstamp.net/api/v2/ticker/',
        };

        let response = await axios(options)

        let result = response.data

        let bitstampApiData = []

        result.forEach(element => {

            bitstampApiData.push({

                pairName: element.pair,
                lastPrice: element.last,
                bidPrice: element.bid,
                highPrice: element.high,
                lowPrice: element.low,
                volume: element.volume

            })
        });


        let bitstampApiInDb = await bitstampModel.insertMany(bitstampApiData);

        return res.status(200).send({ msg: "successful", bitstampData: bitstampApiInDb });

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

let getBitstampAllPair = async (req, res) => {
    try {
       
        let bitstampApi = await bitstampModel.find().select({pairName: 1});

       
        return res.status(200).send({ msg: "successfull", bitstampApiData: bitstampApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}


module.exports = {
    bitstampFunction,
    getBitstampAllPair
}
