const bitso = require("../models/bitso")
const axios = require("axios")

const bitsoExchange = async () => {

    try {

        let options = {
            method: "get",
            url: "https://api.bitso.com/v3/ticker/"
        }


        let response = await axios(options);

        let result = response.data.payload

        let bitsoApiData = [];


        result.forEach(element => {
            bitsoApiData.push({

                pairName: element.book,
                lastPrice: element.last,
                highPrice: element.high,
                lowPrice: element.low,
                volume: element.volume,
                bidPrice: element.bid,
                askPrice: element.ask,
                timeStamp: element.created_at
            });
        });


        let bitsoInDb = await bitso.insertMany(bitsoApiData);
        console.log(bitsoInDb);


        //  return res.status(200).send({ msg: "successful", bitsoAllData: bitsoInDb });

    } catch (error) {
        //  return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

//setInterval(bitsoExchange, 1500);

let getBitsoAllPair = async (req, res) => {
    try {

        let bitsoApi = await bitso.find().select({ pairName: 1 })

        return res.status(200).send({ msg: "successfull", bitsoPairData: bitsoApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}

module.exports = { bitsoExchange, getBitsoAllPair }
