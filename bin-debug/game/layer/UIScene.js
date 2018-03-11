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
 * Created by ikee on 2014/11/28.
 * UI场景层
 */
var UIScene = (function (_super) {
    __extends(UIScene, _super);
    /**
     * 构造函数
     */
    function UIScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    UIScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        //添加该Scene使用的层级
        this.addLayer(LayerMgr.UI_Main);
        this.addLayer(LayerMgr.UI_Popup);
        this.addLayer(LayerMgr.UI_Message);
        this.addLayer(LayerMgr.UI_Tips);
        //添加一个纯色背景
        var rect = new eui.Rect();
        rect.fillColor = 0x78b93f;
        rect.percentHeight = 100;
        rect.percentWidth = 100;
        LayerMgr.UI_Main.addChild(rect);
        //初始打开Home页面
        App.ViewManager.open(ViewConst.Home);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    UIScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return UIScene;
}(BaseScene));
__reflect(UIScene.prototype, "UIScene");
//# sourceMappingURL=UIScene.js.map