System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, screen, macro, _dec, _class, _crd, ccclass, Lesson16_;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      screen = _cc.screen;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e18d2ePAndOA6TC/YAPdjNw", "Lesson16_", undefined); // Lesson16_.ts


      __checkObsolete__(['_decorator', 'Component', 'screen', 'macro']);

      ({
        ccclass
      } = _decorator);
      /**
       * 屏幕事件系统示例（window-resize / orientation-change / fullscreen-change）
       * 核心类：Lesson16_
       */

      _export("Lesson16_", Lesson16_ = (_dec = ccclass('Lesson16_'), _dec(_class = class Lesson16_ extends Component {
        /* ------------------ 1. 注册所有屏幕事件 ------------------ */
        //#region 注册
        onLoad() {
          screen.on('window-resize', this.onWindowResize, this);
          screen.on('orientation-change', this.onOrientationChange, this);
          screen.on('fullscreen-change', this.onFullScreenChange, this);
        } //#endregion

        /* ------------------ 2. 取消所有屏幕事件 ------------------ */
        //#region 注销


        onDestroy() {
          screen.off('window-resize', this.onWindowResize, this);
          screen.off('orientation-change', this.onOrientationChange, this);
          screen.off('fullscreen-change', this.onFullScreenChange, this);
        } //#endregion

        /* ------------------ 3. 窗口尺寸变化 ------------------ */
        //#region window-resize


        onWindowResize(width, height) {
          console.log("[WindowResize] " + width + " x " + height);
        } //#endregion

        /* ------------------ 4. 屏幕方向变化 ------------------ */
        //#region orientation-change


        onOrientationChange(orientation) {
          var isLandscape = orientation === macro.ORIENTATION_LANDSCAPE_LEFT || orientation === macro.ORIENTATION_LANDSCAPE_RIGHT;
          console.log("[OrientationChange] " + (isLandscape ? 'Landscape' : 'Portrait'), orientation);
        } //#endregion

        /* ------------------ 5. 全屏状态变化 ------------------ */
        //#region fullscreen-change


        onFullScreenChange(width, height) {
          console.log("[FullScreenChange] " + width + " x " + height);
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76be6dc243b10c64781aa5e3edbd5fbef7521485.js.map