/*
Write another function convertGBPtoUSD 
that takes in a specified amount in £, 
and converts it to $ using a given exchange rate. 
It should behave in a very similar way to the previous function.
*/

// dollars exchange rate 1.27

function convertGBPtoUSD (pounds) {

    let usd = pounds * 1.27

    return usd;
}

console.log(convertGBPtoUSD(100))