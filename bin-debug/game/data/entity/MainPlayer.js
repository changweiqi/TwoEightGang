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
var data;
(function (data) {
    var MainPlayer = (function (_super) {
        __extends(MainPlayer, _super);
        function MainPlayer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MainPlayer;
    }(data.Player));
    data.MainPlayer = MainPlayer;
    __reflect(MainPlayer.prototype, "data.MainPlayer");
})(data || (data = {}));
//# sourceMappingURL=MainPlayer.js.map