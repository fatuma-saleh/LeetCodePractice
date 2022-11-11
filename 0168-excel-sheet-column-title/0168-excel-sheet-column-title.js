/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let answer = "";
    while(columnNumber >= 1){
        answer = String.fromCharCode(((columnNumber - 1) %26) + 65) + answer
        columnNumber =(columnNumber -1)/26
    }
    return answer;
};