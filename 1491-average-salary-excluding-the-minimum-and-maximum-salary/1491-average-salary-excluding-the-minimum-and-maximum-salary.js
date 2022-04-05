/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = salary[0],min = salary[0],maxPosition,minPosition,sum = 0,avg,a,b
    
    salary.sort((a,b) => a-b)
    salary.pop()
    salary.shift()
    
   
    for(let k = 0 ;k<= salary.length-1;k++){
        sum += salary[k]
    }
    avg = (sum/salary.length)
    return avg.toFixed(5)
};
