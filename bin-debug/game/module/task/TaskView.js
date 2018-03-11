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
var TaskView = (function (_super) {
    __extends(TaskView, _super);
    function TaskView(controller, parent) {
        var _this = _super.call(this, controller, parent) || this;
        _this.icon = "table_task";
        return _this;
    }
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    TaskView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
    };
    return TaskView;
}(BaseTaskView));
__reflect(TaskView.prototype, "TaskView");
//# sourceMappingURL=TaskView.js.map