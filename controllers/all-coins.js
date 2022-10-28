let allCoins = require('../models/all-coins');

let createCoins = async function (req, res) {
    try {
        let body = req.body;
        let storeInDb = await allCoins.create(body);
        return res.status(201).send({ msg: "successful", storeInDb });
    } catch (error) {
        return res.status(500).send({ msg: "error occured!", error });
    }


}

module.exports = {createCoins};