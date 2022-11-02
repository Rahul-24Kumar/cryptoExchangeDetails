let axios = require("axios");
let binanceModel = require('../models/binance');
const coinModel = require("../models/all-coins")
const exchangeModel = require("../models/exchange")



const binanceApi = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.binance.com/api/v3/ticker/24hr",
        };
        let result = await axios(options);

        // console.log(result);
        let data = result.data;
        // data.sort((a,b)=>{
        //   return Number(a.openPrice) -Number(b.openPrice)
        // })
        //  console.log(data)
              console.log(data)
        //  let exchangeId = req.params;
        //  let coinId = req.params;
         

        //  let isPresentexchangeId = await exchangeModel.findOne({exchangeId:req.params.exchangeId})
        //  console.log(isPresentexchangeId) 
        //  let isPresentcoinId = await coinModel.findOne({coinId:req.params.coinId})
        //  console.log(isPresentcoinId)


                  
    //    let ifDataPresent = await binanceModel.d
        let saveDataInDb = await binanceModel.insertMany(data);
       


       return res.status(200).send({ msg: "successful", saveDataInDb });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

   const binanceGetDetails = async (req, res)=>{
       try {
           let _exchangeId = req.params.exchangeId;
           let _coinId = req.params.coinId;

           let exchangeDetails= await binanceModel.find({_exchangeId:_exchangeId}).populate("exchangeId")
           console.log(exchangeDetails)
           return res.status(200).send({msg:"success", data:exchangeDetails})

       } catch (error) {
        console.log(error.message)
        // return res.status(500).send({msg:"server error!"})
       }

        
   }


module.exports = { binanceApi, binanceGetDetails };
