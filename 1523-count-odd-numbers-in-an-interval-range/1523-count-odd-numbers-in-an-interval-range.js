/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    if(low < 0 || high < 0){
        console.log("Enter positive numbers only")
    }
    for(let i = low;i<= high; i++){
        if(i%2 != 0){
            count += 1;
        }
    }
    return count;
};