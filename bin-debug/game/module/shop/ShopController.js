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
 * Created by egret on 15-1-7.
 */
var ShopController = (function (_super) {
    __extends(ShopController, _super);
    function ShopController() {
        var _this = _super.call(this) || this;
        _this.shopView = new ShopView(_this, LayerMgr.UI_Popup);
        App.ViewManager.register(ViewConst.Shop, _this.shopView);
        return _this;
    }
    return ShopController;
}(BaseController));
__reflect(ShopController.prototype, "ShopController");
//# sourceMappingURL=ShopController.js.map