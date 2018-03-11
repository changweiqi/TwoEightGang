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
 * Created by ikee on 15-3-25.
 */
var ByteArrayMsgByProtobuf = (function (_super) {
    __extends(ByteArrayMsgByProtobuf, _super);
    /**
     * 构造函数
     */
    function ByteArrayMsgByProtobuf() {
        var _this = _super.call(this) || this;
        _this.msgClass = null;
        _this.protoConfig = null;
        _this.protoConfigSymmetry = null;
        _this.msgClass = {};
        _this.protoConfig = App.ProtoConfig;
        _this.protoConfigSymmetry = {};
        var keys = Object.keys(_this.protoConfig);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = _this.protoConfig[key];
            _this.protoConfigSymmetry[value] = key;
        }
        return _this;
    }
    /**
     * 获取msgID对应的类
     * @param key
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgClass = function (key) {
        var cls = this.msgClass[key];
        if (cls == null) {
            cls = App.ProtoFile.build(key);
            this.msgClass[key] = cls;
        }
        return cls;
    };
    /**
     * 获取msgID
     * @param key
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgID = function (key) {
        return this.protoConfigSymmetry[key];
    };
    /**
     * 获取msgKey
     * @param msgId
     * @returns {any}
     */
    ByteArrayMsgByProtobuf.prototype.getMsgKey = function (msgId) {
        return this.protoConfig[msgId];
    };
    /**
     * 消息解析
     * @param msg
     */
    ByteArrayMsgByProtobuf.prototype.decode = function (msg) {
        var msgID = msg.readShort();
        var len = msg.readShort();
        if (msg.bytesAvailable >= len) {
            var bytes = new egret.ByteArray();
            msg.readBytes(bytes, 0, len);
            var obj = {};
            obj.key = this.getMsgKey(msgID);
            App.DebugUtils.start("Protobuf Decode");
            obj.body = this.getMsgClass(obj.key).decode(bytes.buffer);
            App.DebugUtils.stop("Protobuf Decode");
            Log.trace("收到数据：", "[" + msgID + " " + obj.key + "]", obj.body);
            return obj;
        }
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    ByteArrayMsgByProtobuf.prototype.encode = function (msg) {
        var msgID = this.getMsgID(msg.key);
        var msgBody = new (this.getMsgClass(msg.key))(msg.body);
        App.DebugUtils.start("Protobuf Encode");
        var bodyBytes = new egret.ByteArray(msgBody.toArrayBuffer());
        App.DebugUtils.stop("Protobuf Encode");
        Log.trace("发送数据：", "[" + msgID + " " + msg.key + "]", msg.body);
        var sendMsg = new egret.ByteArray();
        sendMsg.writeShort(msgID);
        sendMsg.writeShort(bodyBytes.length);
        sendMsg.writeBytes(bodyBytes);
        return sendMsg;
    };
    return ByteArrayMsgByProtobuf;
}(ByteArrayMsg));
__reflect(ByteArrayMsgByProtobuf.prototype, "ByteArrayMsgByProtobuf");
//# sourceMappingURL=ByteArrayMsgByProtobuf.js.map