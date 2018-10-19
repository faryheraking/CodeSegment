let debug = {
    enableInfo: true,
    enableApi: true,
    enableEvent: true,
    enableAction: true
};

export default {
    debugLevel: {
        info: "info",
        api: "api",
        event: "event",
        action: "action",
        error: "error"
    },
    systemOut: function (type, name, msg) {
        switch(type) {
        case "info":
            debug.enableInfo && window.console.log("[RL-ADMIN]" + name + "消息::", msg);
            break;
        case "api":
            debug.enableApi && window.console.log("[RL-ADMIN]" + name + "接口消息::", msg);
            break;
        case "event":
            debug.enableEvent && window.console.log("[RL-ADMIN]" + name + "事件消息::", msg);
            break;
        case "action":
            debug.enableAction && window.console.log("[RL-ADMIN]" + name + "执行栈消息::", msg);
            break;
        case "error":
            window.console.log("[RL-ADMIN]" + name + "错误消息::", msg);
            break;
        }
    }
};