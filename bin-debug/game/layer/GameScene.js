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
 * 游戏场景
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    /**
     * 构造函数
     */
    function GameScene() {
        return _super.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    GameScene.prototype.onEnter = function () {
        _super.prototype.onEnter.call(this);
        this.addLayer(LayerMgr.Game_Main);
        //初始打开Loading页面
        App.ViewManager.open(ViewConst.Game);
        // App.ViewManager.open(ViewConst.Game);
        // App.ViewManager.open(ViewConst.GameUI);
        //播放背景音乐
        // App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    GameScene.prototype.onExit = function () {
        _super.prototype.onExit.call(this);
    };
    return GameScene;
}(BaseScene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map