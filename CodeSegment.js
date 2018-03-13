/* 限制字符 */
function limitChar(str, n, errMsg) {
    var length = str.length;
    var charLength = str.match(/[a-zA-Z]+/g).join("").length;
    var wordLength = length - charLength;
    if (wordLength * 2 + charLength > n) {
        alert(errMsg);
    }
}