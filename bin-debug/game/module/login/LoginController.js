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
var LoginController = (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        var _this = _super.call(this) || this;
        //初始化Model
        _this.loginModel = new LoginModel(_this);
        //初始化UI
        _this.loginView = new LoginView(_this, LayerMgr.UI_Main);
        App.ViewManager.register(ViewConst.Login, _this.loginView);
        //初始化Proxy
        _this.loginProxy = new LoginProxy(_this);
        //注册模块间、模块内部事件监听
        //注册C2S消息
        _this.registerFunc(LoginConst.LOGIN_C2S, _this.onLogin, _this);
        //注册S2C消息
        _this.registerFunc(LoginConst.LOGIN_S2C, _this.loginSuccess, _this);
        return _this;
    }
    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    LoginController.prototype.onLogin = function (userName, pwd) {
        this.loginProxy.login(userName, pwd);
    };
    /**
     * 登陆成功处理
     */
    LoginController.prototype.loginSuccess = function (userInfo) {
        //保存数据
        this.loginModel.userInfo = userInfo;
        //本模块UI处理
        this.loginView.loginSuccess();
        //UI跳转
        App.ViewManager.close(ViewConst.Login);
        var model = this.getControllerModel(ControllerConst.Login);
    };
    return LoginController;
}(BaseController));
__reflect(LoginController.prototype, "LoginController");
//# sourceMappingURL=LoginController.js.map