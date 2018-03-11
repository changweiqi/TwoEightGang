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
var MailView = (function (_super) {
    __extends(MailView, _super);
    function MailView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.icon = "table_mail";
        return _this;
    }
    return MailView;
}(BasePanelView));
__reflect(MailView.prototype, "MailView");
//# sourceMappingURL=MailView.js.map