/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = salary[0],min = salary[0],maxPosition,minPosition,sum = 0,avg,a,b
    
    salary.sort((a,b) => a-b)
    salary.pop()
    salary.shift()
    // for(let i = 1;i< salary.length-1;i++){
    //     if(salary[i] > max){
    //         max =salary[i]
    //         maxPosition = i
    //     }
    // }hey
    // for(let j = 1;j< salary.length-1;j++){
    //     if(salary[j] < min){
    //         min = salary[j]
    //         minPosition = j
    //     }
    // }
    
 //salary.pop()
   
    for(let k = 0 ;k<= salary.length-1;k++){
        sum += salary[k]
    }
    avg = (sum/salary.length)
    return avg.toFixed(5)
};
