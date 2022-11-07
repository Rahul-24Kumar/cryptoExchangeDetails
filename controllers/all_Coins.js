let coinModel = require("../models/all_Coins");
let { isValidRequestBody } = require("../utils/helper");

const createCoins = async function (req, res) {

  try {
    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({ msg: "field must be required in body" });
    }

    let S_NO;
    let coinId;

    let  {
      coinName,
      symbol,
      contract_Address,
      network,
      website,
    } = req.body;

    if (!coinName) {
      return res.status(400).send({ msg: "coin name is required in body" });
    }

    if (!symbol) {
      return res.status(400).send({ msg: "symbol is required in body" });
    }

    let allCoin = await coinModel.find();

    S_NO = allCoin.length + 1;
    coinId = allCoin.length + 1;

    let newCoin = {
      S_NO,
      coinId,
      coinName,
      contract_Address,
      symbol,
      network,
      website,
    };

    let resp = await coinModel.create(newCoin);
    console.log(resp);

    return res.status(201).send({ msg: "successfull", allCoins: resp });

  } catch (error) {
    console.log(error)
    return res.status(500).send({ msg: "error occured!", error });
  }
};

let getAllCoins = async (req, res) => {
  try {

    let findCoinInDb = await coinModel.find().select({ _v: 0 });
    return res.status(200).send({ msg: "successfull", allCoins: findCoinInDb })
  } catch (error) {
    return res.status(500).send({ msg: "error occured!", error });
  }
}

module.exports = { createCoins, getAllCoins };
