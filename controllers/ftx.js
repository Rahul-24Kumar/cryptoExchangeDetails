const ftx = require('../models/ftx');
const axios = require('axios');

const ftxExchange =  async () => {
    try {
        let options = {
            method: 'get',
            url: 'https://ftx.com/api/markets'
        }

        let response = await axios(options);


        let result = response.data.result

        let ftxApiData = [];
        

        result.forEach(element => {
            ftxApiData.push({

                coinName: element.underlying,
                pairName: element.name,
                price: element.price,
                askPrice: element.ask,
                lastPrice: element.last,
                bidPrice: element.bid,
                highPrice: element.priceHigh24h,
                lowPrice: element.priceLow24h,
                volume: element.volumeUsd24h,
                quoteVolume: element.quoteVolume24h,
                baseCurrency: element.baseCurrency,
                quoteCurrency: element.quoteCurrency,
                change1h: element.change1h,
                change24h: element.change24h,
                
            });                
        });



        let ftxInDb = await ftx.insertMany(ftxApiData);

         console.log(ftxInDb);
       // return res.status(200).send({ msg: "successful", ftxAllData: ftxInDb });

    } catch (error) {
      //  return res.status(500).send({ msg: "There is some technical error!", error });
    }
}

 setInterval(ftxExchange, 1500);



let getFtxAllPair = async () => {
    try {
       
        let ftxApi = await ftx.find().select({pairName: 1});
console.log(ftxApi);
       
       // return res.status(200).send({ msg: "successfull", ftxAllPairData: ftxApi })

    } catch (error) {
      //  return res.status(500).send({ msg: "There is some technical error!", error });
    }

}


    
module.exports = { ftxExchange, getFtxAllPair };





// function addDataInTenMin(n) {
//     setInterval(ftxInDb, n * 1000);
// }

// addDataInTenMin(10);


// let timer  = setInterval( async () => {
//     await ftx.insertMany(ftxInDb)
//      }, 1000).then()
 
//      console.log(timer);

 