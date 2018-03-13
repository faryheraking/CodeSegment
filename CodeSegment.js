/* 限制字符 */
function limitChar(str, n, errMsg) {
    var length = str.length, arr = str.match(/[a-zA-Z]+/g);
    var charLength = 0;
    if (arr && arr !== null && typeof arr == "object") {
        charLength = arr.join("").length;
    }
    var wordLength = length - charLength;
    if (wordLength * 2 + charLength > n) {
        alert(errMsg);
        return false;
    } else {
        return true;
    }
}