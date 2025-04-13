const repeatString = function(str, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";
    
    let res = "";

    for (let i = 0; i < numOfTimes; i++) {
        res += str;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
