const axios = require("axios")


let apiKey= async(req, res)=>{

    try {
        let option = {

            method:"get",
            url: `https://rest.coinapi.io/v1/exchangerate/BTC`,

            headers:{

                'X-CoinAPI-Key':  '9D8AD828-B516-43E1-8AC1-2085CE413CB7'
            }
           }
           let resp = await axios(option)
            let value =  resp.data;
        console.log(value);
            return res.status(200).send({msg: "result", value})

    } catch (error) {
        console.log(error)
    }
   }

   module.exports = {apiKey}