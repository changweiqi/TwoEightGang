var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by ikee on 15-3-20.
 */
var UTFMsgByJson = (function (_super) {
    __extends(UTFMsgByJson, _super);
    /**
     * 构造函数
     */
    function UTFMsgByJson() {
        return _super.call(this) || this;
    }
    /**
     * 消息解析
     * @param msg
     */
    UTFMsgByJson.prototype.decode = function (msg) {
        return JSON.parse(msg);
    };
    /**
     * 消息封装
     * @param msg
     */
    UTFMsgByJson.prototype.encode = function (msg) {
        return JSON.stringify(msg);
    };
    return UTFMsgByJson;
}(UTFMsg));
__reflect(UTFMsgByJson.prototype, "UTFMsgByJson");
//# sourceMappingURL=UTFMsgByJson.js.map