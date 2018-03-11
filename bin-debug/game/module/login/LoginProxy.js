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
 * Created by Administrator on 2014/11/23.
 */
var LoginProxy = (function (_super) {
    __extends(LoginProxy, _super);
    function LoginProxy($controller) {
        return _super.call(this, $controller) || this;
        //注册从服务器返回消息的监听
        // this.receiveServerMsg(HttpConst.USER_LOGIN, this.loginSuccess, this);
    }
    /**
     * 用户登陆
     * @param userName
     * @param pwd
     */
    LoginProxy.prototype.login = function (userName, pwd) {
        var paramObj = {
            "uName": userName,
            "uPass": pwd
        };
        // this.sendHttpMsg(HttpConst.USER_LOGIN, paramObj);
    };
    /**
     * 用户登陆成功返回
     */
    LoginProxy.prototype.loginSuccess = function (obj) {
        this.applyFunc(LoginConst.LOGIN_S2C, obj);
    };
    return LoginProxy;
}(BaseProxy));
__reflect(LoginProxy.prototype, "LoginProxy");
//# sourceMappingURL=LoginProxy.js.map