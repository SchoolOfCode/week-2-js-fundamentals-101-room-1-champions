/*

PROBLEM:

A travel agency, Travel-holics, wants to create a travel tool to help their clients. 
They have grand plans, from allowing hotel and travel booking through to real-time translation. Having surveyed their customers, here were the results of the question "What is you biggest problem that we could help you with?":

1. 80% said understanding what their spending budget in £ is worth in €
2. 60% said understanding what their spending budget in £ is worth in $
3. 10% said being able to book transport through an app
4. 5% said being able to book hotels through an app
5. 2% said getting alerts about deals on hotels they've previously seen

*/



/*
### Plan


## MVP 1 ##
  
Write a JavaScript function `convertGBPtoEUR` that takes in a specified amount in £, and converts it to € using a given exchange rate. The function should return the converted amount.


* Must be a function called "convertGBPtoEUR"
* Number input, "pounds"
* =====> Number output, "euros" 
* pounds => euros. 
* Current exchange rate: 1.21.
* pounds * 1.21 = euros.


*/

function convertGBPtoEUR(pounds) {
    let euro = pounds * 1.21;
    return euro;
};

console.log(convertGBPtoEUR(100000));