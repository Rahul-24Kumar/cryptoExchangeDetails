const exchange = require('../models/exchange');

const exchangeApi = async (req, res) => {
    try {
        let body = req.body
        let createExchange = await exchange.create(body);
    } catch (error) {
        
    }
   
}