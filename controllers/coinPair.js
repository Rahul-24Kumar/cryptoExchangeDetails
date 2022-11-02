const coinpairModel = require("../models/coinpairModel");
const exchangeModel = require("../models/exchange");
const coinModel = require("../models/all-coins");
const axios = require("axios");
const random = require("../utils/helper")
const createCoinpairData = async (req, res) => {
  try {
    // insert data in db using axios
    let option = {
      method: "get",
      url: "https://api.indoex.io/getMarketDetails/",
    };

    let resp = await axios(option);  

    let result = resp.data.marketdetails;
    console.log(result);

    // let isExchangeIdPresent = await exchangeModel.findOne({
    //   exchangeId: req.query.exchangeId,
    // });

    //   console.log(isExchangeIdPresent.exchangeId)

    // let iscoinIdPresent = await coinModel.findOne({ coinId: req.query.coinId });
    //  console.log(iscoinIdPresent)
       result.sort((a,b)=>{
           Number(b['24hrhigh']) - Number(a['24hrhigh'])
       })

       console.log(result)

    let targetObj = [];
    result.forEach((element) => {
      targetObj.push({
        coinownId: element.cmcid,
        coinName: element.name,
        coin24hPrice: element["24hrhigh"],
        coinSymbol: element.pair,
        lowPrice: element.lowsale,
        highPrice: element.highsale,
        closePrice: element.last,
        volume: element.baseVolume,
        exchangeId: 1,
        
      });
    });

    // console.log(targetObj);
    let saveData = await coinpairModel.insertMany(targetObj);
    //  console.log(saveData)
    return res.status(201).send({ msg: "data created", data: saveData });
  } catch (error) {
    console.log(error.message);
  }
};

const getCoinByExIdAndCoinId = async (req, res) => {
  try {
    let { coinName, exchangeId } = req.body;

    let fetchedData = await coinpairModel.find({
      coinName:coinName,
      exchangeId: exchangeId,
    });
    res.status(200).json({
      message: `success`,
      error: null,
      data: fetchedData,
    });
  } catch (error) {
    // console.log(error);
  }
};
module.exports = { createCoinpairData, getCoinByExIdAndCoinId };
