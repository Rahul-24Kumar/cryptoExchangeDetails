require("dotenv")
require("mongoose")

function random(length, ...ranges) {

    let str = "";

    while (length--) {
        let ind = Math.floor(Math.random() * ranges.length);
        let min = ranges[ind][0].charCodeAt(0),
            max = ranges[ind][1].charCodeAt(0);
        let c = Math.floor(Math.random() * (max - min + 1)) + min;
        str += String.fromCharCode(c);
    }
    
    return str;

}


const isValid = (value) => {
    if (typeof value == 'undefined' || value == null) return false;
    if (typeof value == 'String' && value.trim().length === 0) return false;
    if (typeof value == 'Number' && value.toString().length === 0) return false;
    return true;
}

const isValidRequestBody = (requestBody) => {
    if (Object.keys(requestBody).length > 0) return true;
    return false;
}

module.exports = { isValid, isValidRequestBody };

module.exports ={
    random,
    isValid,
    isValidRequestBody
}