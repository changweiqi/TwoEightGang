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
 * Created by yangsong on 15-11-20.
 */
var LoginModel = (function (_super) {
    __extends(LoginModel, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function LoginModel($controller) {
        return _super.call(this, $controller) || this;
    }
    return LoginModel;
}(BaseModel));
__reflect(LoginModel.prototype, "LoginModel");
//# sourceMappingURL=LoginModel.js.map