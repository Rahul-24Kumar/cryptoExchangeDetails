const exchangeModel = require('../models/exchange');

const {isValid, isValidRequestBody, random}= require("../utils/helper")
require("dotenv").config()

const createExchange = async (req, res) => {
    try {
        
     let body = req.body;

     if (!isValidRequestBody(body)){
        return res.status(400).send({msg:"field are required in body"})
     }

     let S_No;

     let { exchangeName, NoOf_Coins,status, baseUrl, NoOfApi }= body

     if (! exchangeName) {
        return res.status(400).send({msg:"exchange name must required in this field"})
     }
    let isExchangeNameExist = await exchangeModel.findOne({exchangeName})
    if (isExchangeNameExist) return res.status(400).send({msg:"exchange name already exists in data base"})

     let allExchange = await exchangeModel.find()
    
     let exchangeId = Number(random(4, ["0", "9"]));

     S_No = allExchange.length + 1;

     let newExchange = {
        S_No,
        exchangeId,
        exchangeName,
        NoOf_Coins,
        NoOfApi,
        status,
        baseUrl
     }

     let resp = await exchangeModel.create(newExchange)

     return res.status(201).send({
        msg:"exchange created successfully",
        data:resp
     })

    } catch (error) {
        console.log(error.message)
        return res.status(500).send({masg:"internal sever errror", data:error.message})
    }
   
}


module.exports ={createExchange}