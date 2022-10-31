const express = require('express');
const router = express.Router();

const binance = require('../controllers/binance');
const allCoins = require('../controllers/all-coins');
const exchangeCoins = require("../controllers/exchange")
const coinpairData = require("../controllers/coinPair")

router.post('/binanceApi/:exchangeId/:coinId', binance.binanceApi);

router.get("/:exchangeid/:coinid", binance.binanceGetDetails)
router.post('/allCoins', allCoins.createCoins);
router.post("/exchangeApi",exchangeCoins.createExchange )

router.post("/insertdata",coinpairData.createCoinpairData)


module.exports = router;
