const exchangeModel = require('../models/all_Exchanges');
const pairModel = require('../models/all_Coins');

const { isValidRequestBody } = require("../utils/helper")

const createExchange = async (req, res) => {
   try {

      let body = req.body;

      if (!isValidRequestBody(body)) {
         return res.status(400).send({ msg: "field are required in body" })
      }

      let S_No;
      let exchangeId;

      let { exchangeName, totalCoins } = req.body

      if (!exchangeName) {
         return res.status(400).send({ msg: "exchange name must required in this field" })
      }
      let isExchangeNameExist = await exchangeModel.findOne({ exchangeName })
      if (isExchangeNameExist) return res.status(400).send({ msg: "exchange name already exists in data base" })

      let allExchange = await exchangeModel.find()

      //   let exchangeId = Number(random(4, ["0", "9"]));

      S_No = allExchange.length + 1;
      exchangeId = allExchange.length + 1;

      let newExchange = {
         S_No,
         exchangeId,
         exchangeName,
         totalCoins
      }

      let resp = await exchangeModel.create(newExchange)

      return res.status(201).send({
         msg: "exchange created successfully",
         data: resp
      })

   } catch (error) {
      console.log(error.message)
      return res.status(500).send({ masg: "internal sever errror", error })
   }

}


const getAllExchanges = async (req, res) => {
   try {
      let findExchangeInDb = await exchangeModel.find();
      return res.status(200).send({ msg: "successfull", allExchanges: findExchangeInDb });
   } catch (error) {
      return res.status(500).send({ msg: "internal sever errror", error })
   }
}

const getCoinAndExchange = async (req, res) => {
   try {
      let exchangeId = req.params.exchangeId;


      let findExchange = await exchangeModel.findById(exchangeId).populate('coinId');
      return res.status(200).send({ msg: "successfull", findExchange });
   } catch (error) {
      return res.status(500).send({ masg: "internal sever errror", error })
   }
}

const e_idandc_id = async (req, res) => {
   try {
      let exchangeId = req.params.exchangeId;
      //let coinId = req.params.coinId;

      let data = await pairModel.findById(exchangeId).populate('exchangeId').populate('coinId');
      return res.status(200).send({ msg: "successfull", data });
   } catch (error) {
      return res.status(500).send({ msg: "internal sever errror", error })
   }
}

module.exports = {
   createExchange,
   getAllExchanges,
   getCoinAndExchange,
   e_idandc_id
}