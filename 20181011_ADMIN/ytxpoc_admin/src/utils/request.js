import axios from 'axios';
import tool from './tool';

let codes = {
    successData: {code: 200, reason: "请求成功"},
    errorApi: {code: 6000, reason: "请求接口不存在"},
    wrongData: {code: 6001, reason: "请求数据为空"},
    errorRequest: {code: 6002, reason: "请求失败"}
};
export default {
    getData: function (url, data, success, error) {
        if(url) {
            axios.get(url, {
                params: data || {}
            }).then(function (json) {
                if(json) {
                    tool.systemOut(tool.debugLevel.api, "request->getData", "接口" + url + "数据请求成功");
                    success({code: codes.successData.code, msg: codes.successData.reason, data: json});
                } else {
                    typeof error === "function" && error({code: codes.wrongData.code, msg: codes.wrongData.reason});
                }
            }).catch(function (err) {
                typeof error === "function" && error({code: codes.errorRequest.code, msg: codes.errorRequest.reason});
            });
        } else {
            typeof error === "function" && error({code: codes.errorApi.code, msg: codes.errorApi.reason + " -> " + url});
        }
    },
    postData: function (url, data, success, error) {
        if(url) {
            axios.post(url, data || {}).then(function (json) {
                if(json) {
                    tool.systemOut(tool.debugLevel.api, "request->postData", "接口" + url + "数据请求成功");
                    success({code: codes.successData.code, msg: codes.successData.reason, data: json});
                } else {
                    typeof error === "function" && error({code: codes.wrongData.code, msg: codes.wrongData.reason});
                }
            }).catch(function (err) {
                typeof error === "function" && error({code: codes.errorRequest.code, msg: codes.errorRequest.reason});
            });
        } else {
            typeof error === "function" && error({code: codes.errorApi.code, msg: codes.errorApi.reason + " -> " + url});
        }
    }
};


