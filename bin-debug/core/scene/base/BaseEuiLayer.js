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
 * Created by ikee on 15-1-7.
 */
var BaseEuiLayer = (function (_super) {
    __extends(BaseEuiLayer, _super);
    function BaseEuiLayer() {
        var _this = _super.call(this) || this;
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        _this.touchEnabled = false;
        return _this;
    }
    return BaseEuiLayer;
}(eui.Group));
__reflect(BaseEuiLayer.prototype, "BaseEuiLayer");
//# sourceMappingURL=BaseEuiLayer.js.map