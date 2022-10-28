let axios = require("axios");
let binanceModel = require('../models/binance');

let binanceApi = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.binance.com/api/v3/ticker/24hr",
        };
        let result = await axios(options);

        console.log(result);
        let data = result.data;

       // let ifDataPresent = await binanceModel.d
        let saveDataInDb = await binanceModel.insertMany(data);
       


        res.status(200).send({ msg: "successful", saveDataInDb });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

module.exports = { binanceApi };
