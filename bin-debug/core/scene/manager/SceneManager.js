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
 * 场景管理类
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    /**
     * 构造函数
     */
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this._scenes = {};
        return _this;
    }
    /**
     * 清空处理
     */
    SceneManager.prototype.clear = function () {
        var nowScene = this._scenes[this._currScene];
        if (nowScene) {
            nowScene.onExit();
            this._currScene = undefined;
        }
        this._scenes = {};
    };
    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    SceneManager.prototype.register = function (key, scene) {
        this._scenes[key] = scene;
    };
    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    SceneManager.prototype.runScene = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var nowScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }
        var oldScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }
        nowScene.onEnter.apply(nowScene, param);
        this._currScene = key;
    };
    /**
     * 获取当前Scene
     * @returns {number}
     */
    SceneManager.prototype.getCurrScene = function () {
        return this._currScene;
    };
    return SceneManager;
}(BaseClass));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map