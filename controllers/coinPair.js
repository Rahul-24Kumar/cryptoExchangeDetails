const coinpairModel = require("../models/coinpairModel")
const exchangeModel = require("../models/exchange")
const coinModel = require("../models/all-coins")
const axios = require("axios")
    const createCoinpairData = async (req, res)=>{

       try {
        
       // insert data in db using axios
       let option = {
            method:"get",
            url:"https://api.indoex.io/getMarketDetails/"
       }

       let resp = await axios(option)
       
         let result = resp.data;
         // console.log(result)

         
         
         for (let i=0; i <result.marketdetails.length; i++){
                console.log(result.marketdetails[i]["name"])
               
         }
      //  let isExchangeIdPresent = await exchangeModel.findOne({exchangeId:req.query.exchangeId})

         //   console.log(isExchangeIdPresent.exchangeId)        
    //    console.log(isExchangeIdPresent)
         //  let iscoinIdPresent = await coinModel.findOne({coinId:req.query.coinId})
         //  console.log(iscoinIdPresent)

         let newData = {
            exhangeId:isExchangeIdPresent.exchangeId,
            coinId:iscoinIdPresent.coinId,
            coinownId :result.marketdetails[0]["cmcid"],
            coinName : result.marketdetails[0]["name"],
            coin24hPrice : result.marketdetails[0]["24hrhigh"]
         }
         
         // let spreadData = {...newData}
         // console.log(spreadData)
             let saveData = await coinpairModel.create(newData)
            //  console.log(saveData)
              res.status(201).send({msg:"data created" , data:saveData})

             
      
       } catch (error) {
        console.log(error.message)
       }

    }
module.exports = {createCoinpairData}
