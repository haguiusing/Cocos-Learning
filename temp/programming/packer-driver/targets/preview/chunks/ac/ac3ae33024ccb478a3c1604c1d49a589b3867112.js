System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Lesson03_;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1fb3CM/HZG7qnZReH1hkHh", "Lesson03_", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Node', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson03_", Lesson03_ = (_dec = ccclass('Lesson03_'), _dec(_class = class Lesson03_ extends Component {
        // 节点加载时回调
        onLoad() {
          console.log('onLoad');
        } // 启用回调


        onEnable() {
          console.log('onEnable');
        } // 节点激活时回调


        onActive() {
          console.log('onActive');
        }

        start() {
          console.log('start');
        } // 每帧回调


        update(deltaTime) {
          console.log('update');
        } // update后回调


        lateUpdate(dt) {
          console.log('lateUpdate');
        } // 禁用回调


        onDisable() {
          console.log('onDisable');
        } // 销毁回调


        onDestroy() {
          console.log('onDestroy');
        } // 编辑器相关回调


        onLostFocusInEditor() {
          console.log('onLostFocusInEditor');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac3ae33024ccb478a3c1604c1d49a589b3867112.js.map