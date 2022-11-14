const express = require('express')
const router = express.Router()

const ftx = require('../controllers/ftx')
const api = require('../controllers/api')
const okx = require('../controllers/okx')
const bybit = require('../controllers/bybit')
const bitso = require('../controllers/bitso')
const indoex = require('../controllers/indoex')
const bitget = require('../controllers/bitget')
const binance = require('../controllers/binance')
const bitstamp = require('../controllers/bitstamp')
const poloniex = require('../controllers/poloniex')
const huobiapi = require('../controllers/huobiapi')
const allCoins = require('../controllers/all_Coins')
const exchanges = require('../controllers/exchange')
const coinPairData = require('../controllers/all_Pairs')

router.post("/ftxApi", ftx.ftxExchange)
router.get("/pairFtx", ftx.getFtxAllPair)

router.post('/okxApi', okx.okxExchange)
router.get('/pairOkx', okx.getOkxAllPair)

router.post('/allCoins', allCoins.createCoins)
router.get('/getCoins', allCoins.getAllCoins)

router.post('/bybitApi', bybit.bybitExchange)
router.get('/pairBybit', bybit.getBybitAllPair)

router.post("/indoexApi", indoex.indoexExchange)
router.get("/pairIndoex", indoex.getIndoexAllPair)

router.post('/bitgetApi', bitget.bitgetExchange)
router.get('/pairBitget', bitget.getBitgetAllPair)

router.post('/bitsoApi', bitso.bitsoExchange)
router.get('/pairBitso', bitso.getBitsoAllPair)

router.post('/binanceApi', binance.binanceFunction)
router.get('/pairBinance', binance.getBinanceAllPair)

router.post("/bitstampApi", bitstamp.bitstampFunction)
router.get('/pairBitstamp', bitstamp.getBitstampAllPair)

router.post('/huobiapi', huobiapi.huobiapiExchange)
router.get('/pairHuobiapi', huobiapi.getHuobiapiAllPair)

router.post("/poloniexApi", poloniex.poloniexExchange)
router.get('/pairPoloniex', poloniex.getPoloniexAllPair)

router.get('/getExchanges', exchanges.getAllExchanges)
router.post("/allExchange", exchanges.createExchange)
router.get('/exchangeCoins/:exchangeId', exchanges.getCoinAndExchange)
router.get('/e_id_c_id/:exchangeId/:coinId', exchanges.e_idandc_id)

router.get("/allPairs", coinPairData.coinPair)
router.get('/getCoinByExId', coinPairData.getCoinByExIdAndCoinId)

router.get("/apiKey", api.apiKey)


module.exports = router
