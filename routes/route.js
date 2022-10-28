const express = require('express');
const router = express.Router();

const binance = require('../controllers/binance');
const allCoins = require('../controllers/all-coins');

router.get('/binanceApi', binance.binanceApi);
router.post('/allCoins', allCoins.createCoins);

module.exports = router;
