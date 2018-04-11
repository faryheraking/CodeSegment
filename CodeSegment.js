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

var timeFormat = function (seconds) {
    var w = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60 % 60 / 24) : Math.floor(seconds / 60 % 60 / 24);
    var m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60);
    var s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
    return w + ":" + m + ":" + s;
};

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

