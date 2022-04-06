/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let str = n.toString()
    let sum = 0,product = 1
    for(let i = 0; i <str.length;i++){
        sum = sum + parseInt(str[i])
       product = product * parseInt(str[i])
    }
    
    return  product - sum
};