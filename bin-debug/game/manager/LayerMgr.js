var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by ikee on 2014/11/23.
 * 游戏层级类
 */
var LayerMgr = (function () {
    function LayerMgr() {
    }
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    // public static Game_Bg:BaseSpriteLayer = new BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    LayerMgr.Game_Main = new BaseEuiLayer();
    /**
     * UI主界面
     * @type {BaseEuiLayer}
     */
    LayerMgr.UI_Main = new BaseEuiLayer();
    /**
     * UI弹出框层
     * @type {BaseEuiLayer}
     */
    LayerMgr.UI_Popup = new BaseEuiLayer();
    /**
     * UI警告消息层
     * @type {BaseEuiLayer}
     */
    LayerMgr.UI_Message = new BaseEuiLayer();
    /**
     * UITips层
     * @type {BaseEuiLayer}
     */
    LayerMgr.UI_Tips = new BaseEuiLayer();
    return LayerMgr;
}());
__reflect(LayerMgr.prototype, "LayerMgr");
//# sourceMappingURL=LayerMgr.js.map