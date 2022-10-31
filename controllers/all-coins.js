let coinModel = require("../models/all-coins");
let { random, isValid, isValidRequestBody } = require("../utils/helper");
require("dotenv").config();
const createCoins = async function (req, res) {
  try {
    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({ msg: "field must be required in body" });
    }

    let S_NO;

    let {
        contract_Address,
      coin_Name,
      symbol,
      decimal,
      logo,
      exchange_name,
      exchange_Link,
      network,
      protocol,
      website,
      explorer_Link,
      social_Media,
    } = req.body;
    

    if (!coin_Name) {
      return res.status(400).send({ msg: "coinname is required in body" });
    }

    if (!symbol) {
      return res.status(400).send({ msg: "symbol is required in body" });
    }

    let allCoin = await coinModel.find();

    // console.log(allCoin)

    // contract_Address = "gakjdfkuagkfgajgfjgajkghjkgi";


    // let contactAddress = allCoin.find(e => e.contract_Address == contract_Address || e.coin_Name == coin_Name)
      
    
    // if (contactAddress) {
    //   return res
    //     .status(400)
    //     .send({ msg: "contract address already exists in database" });
    // }

    let coinId = Number(random(4, ["0", "9"]));
    console.log(coinId)

    // allCoin.forEach((e) => {
    //   if (e.coinId == coinId) {
    //     coinId = Number(random(4, ["0", "9"]));
    //   }
    // });

    S_NO = allCoin.length + 1;

    
    let newCoin = {
      S_NO,
      coinId,
      coin_Name,
      contract_Address,
      symbol,
      decimal,
      logo,
      exchange_name,
      exchange_Link,
      network,
      protocol,
      website,
      explorer_Link,
      social_Media,
    };

    let resp = await coinModel.create(newCoin);

    // console.log(resp)

    return res.status(201).send({
      msg: "coin info created",
      data: resp,
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).send({ msg: "error occured!", data:error.message });
  }
};

module.exports = { createCoins };
