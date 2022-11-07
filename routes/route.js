const express = require('express');
const router = express.Router();

const binance = require('../controllers/binance');
const allCoins = require('../controllers/all_Coins');
const exchanges = require("../controllers/exchange")
const coinpairData = require("../controllers/all_Pairs")
const indoex = require('../controllers/indoex')
const ftx = require('../controllers/ftx')
const api = require('../controllers/api');
const bitstamp = require('../controllers/bitstamp')
const poloniex = require('../controllers/poloniex')
const bitget = require('../controllers/bitget');
const bitso = require('../controllers/bitso');
const huobiapi = require('../controllers/huobiapi');
const bybit = require('../controllers/bybit');
const okx = require('../controllers/okx');

router.post('/binanceApi', binance.binanceFunction)
router.get('/pairBinance', binance.getBinanceAllPair);

router.post("/indoexApi", indoex.indoexExchange)
router.get("/pairIndoex", indoex.getIndoexAllPair);

router.post("/ftxApi", ftx.ftxExchange);
router.get("/pairFtx", ftx.getFtxAllPair);

router.post('/bitgetApi', bitget.bitgetExchange);
router.get('/pairBitget', bitget.getBitgetAllPair);

router.post('/bybitApi', bybit.bybitExchange);
router.get('/pairBybit', bybit.getBybitAllPair);

router.post('/bitsoApi', bitso.bitsoExchange);
router.get('/pairBitso', bitso.getBitsoAllPair);

router.post('/huobiapi', huobiapi.huobiapiExchange);
router.get('/pairHuobiapi', huobiapi.getHuobiapiAllPair);

router.post("/bitstampApi", bitstamp.bitstampFunction);
router.get('/pairBitstamp', bitstamp.getBitstampAllPair);

router.post('/okxApi', okx.okxExchange);
router.get('/pairOkx', okx.getOkxAllPair);

router.post("/poloniexApi", poloniex.poloniexExchange);
router.get('/pairPoloniex', poloniex.getPoloniexAllPair);

router.get('/getCoins', allCoins.getAllCoins);
router.post('/allCoins', allCoins.createCoins);

router.get('/getExchanges', exchanges.getAllExchanges)
router.post("/allExchange", exchanges.createExchange)
router.get('/exchangeCoins/:exchangeId', exchanges.getCoinAndExchange);
router.get('/e_id_c_id/:exchangeId/:coinId', exchanges.e_idandc_id)

router.get("/allPairs", coinpairData.coinPair)
router.get('/getCoinByExId', coinpairData.getCoinByExIdAndCoinId)

router.get("/apiKey", api.apiKey)


module.exports = router;
