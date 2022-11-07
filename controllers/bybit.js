const bybit = require('../models/bybit');
const axios = require('axios');

const bybitExchange =  async (req, res) => {
    try {
        let options = {
            method: 'get',
            url: 'https://api-testnet.bybit.com/v2/public/tickers'
        }

        let response = await axios(options);


        let result = response.data.result

        let bybitApiData = [];
        

        result.forEach(element => {
            bybitApiData.push({
                pairName: element.symbol,
                lastPrice: element.last_price,
                bidPrice: element.bid_price,
                highPrice: element.high_price_24h,
                lowPrice: element.low_price_24h,
                volume: element.volume_24h,
               
            });
        });



        let bybitInDb = await bybit.insertMany(bybitApiData);

   
        return res.status(200).send({ msg: "successful", bybitAllData: bybitInDb });

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

let getBybitAllPair = async (req, res) => {
    try {
       
        let bybitApi = await bybit.find().select({pairName: 1});

       
        return res.status(200).send({ msg: "successfull", bybitAllPairData: bybitApi })

    } catch (error) {
        return res.status(500).send({ msg: "There is some technical error!", error });
    }

}


    
module.exports = { bybitExchange, getBybitAllPair };





// function addDataInTenMin(n) {
//     setInterval(ftxInDb, n * 1000);
// }

// addDataInTenMin(10);


// let timer  = setInterval( async () => {
//     await ftx.insertMany(ftxInDb)
//      }, 1000).then()
 
//      console.log(timer);

 