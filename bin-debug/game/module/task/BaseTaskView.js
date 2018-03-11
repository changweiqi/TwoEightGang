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
var BaseTaskView = (function (_super) {
    __extends(BaseTaskView, _super);
    function BaseTaskView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.dataProvider = new eui.ArrayCollection();
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BaseTaskView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        //布局
        var layout = new eui.VerticalLayout();
        layout.horizontalAlign = "center";
        //创建一个列表
        this.taskList = new eui.List();
        this.taskList.itemRenderer = TaskItemRenderer;
        this.taskList.itemRendererSkinName = "resource/skins/TaskItemRendererSkin.exml";
        this.taskList.dataProvider = this.dataProvider;
        this.taskList.layout = layout;
        //创建一个 Scroller
        this.scroller = new eui.Scroller();
        this.scroller.percentWidth = this.scroller.percentHeight = 100;
        this.scroller.top = 5;
        this.scroller.viewport = this.taskList;
        this.contentGroup.addChild(this.scroller);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BaseTaskView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    return BaseTaskView;
}(BasePanelView));
__reflect(BaseTaskView.prototype, "BaseTaskView");
//# sourceMappingURL=BaseTaskView.js.map