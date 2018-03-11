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
 * tabbar的按钮
 */
var TabBarButton = (function (_super) {
    __extends(TabBarButton, _super);
    function TabBarButton() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TabBarButton.prototype, "data", {
        get: function () {
            return this.mydata;
        },
        set: function (value) {
            this.mydata = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = this.data.title;
            }
            if (this.iconDisplaySelected) {
                this.iconDisplaySelected.source = this.data.titleSelected;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabBarButton.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.title;
        }
        if (instance == this.iconDisplaySelected) {
            this.iconDisplaySelected.source = this.data.titleSelected;
        }
    };
    return TabBarButton;
}(eui.ItemRenderer));
__reflect(TabBarButton.prototype, "TabBarButton");
//# sourceMappingURL=TabBarButton.js.map