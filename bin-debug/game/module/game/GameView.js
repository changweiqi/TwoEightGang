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
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = "resource/skins/SceneSkin.exml";
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    GameView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
    };
    GameView.prototype.onComplete = function () {
        if (this.menuBtn) {
            this.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.menuBtnChangeHandler, this);
        }
    };
    GameView.prototype.menuBtnChangeHandler = function (e) {
        // this.playSound();
        if (this.menu) {
            this.menu.visible = !this.menu.visible;
        }
    };
    return GameView;
}(BaseEuiView));
__reflect(GameView.prototype, "GameView");
//# sourceMappingURL=GameView.js.map