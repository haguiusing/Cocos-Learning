System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, BUILD, PREVIEW, EDITOR, DEBUG, DEV, HTML5, NATIVE, WECHAT, _dec, _class, _crd, ccclass, Lesson18_;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }, function (_ccEnv) {
      BUILD = _ccEnv.BUILD;
      PREVIEW = _ccEnv.PREVIEW;
      EDITOR = _ccEnv.EDITOR;
      DEBUG = _ccEnv.DEBUG;
      DEV = _ccEnv.DEV;
      HTML5 = _ccEnv.HTML5;
      NATIVE = _ccEnv.NATIVE;
      WECHAT = _ccEnv.WECHAT;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11f070DohxHl6zRNTDWUmCs", "Lesson18_", undefined); // Lesson18_.ts


      __checkObsolete__(['_decorator', 'Component', 'log']);

      ({
        ccclass
      } = _decorator);
      /**
       * 引擎模块 & 构建常量 示例
       * 核心类：Lesson18_
       */

      _export("Lesson18_", Lesson18_ = (_dec = ccclass('Lesson18_'), _dec(_class = class Lesson18_ extends Component {
        /* ------------------ 1. 日志输出 ------------------ */
        //#region 日志输出
        demoLog() {
          log('Hello world from cc.log!');
        } //#endregion

        /* ------------------ 2. 运行环境常量 ------------------ */
        //#region 运行环境


        checkEnv() {
          if (EDITOR) log('[ENV] Running inside Editor'); //是否正在编辑器环境中运行

          if (PREVIEW) log('[ENV] Running in Preview'); //是否正在预览环境中运行

          if (BUILD) log('[ENV] Running in Build'); //是否正在构建后的环境中运行
        } //#endregion

        /* ------------------ 3. 调试级别常量 ------------------ */
        //#region 调试级别


        checkDebug() {
          if (DEBUG) log('[DEBUG] Debug mode enabled'); //是否处于调试模式。
          // 仅当构建时未勾选调试选项的情况下为 false，其它情况下都为 true

          if (DEV) log('[DEV]  DEV mode (DEBUG | EDITOR | PREVIEW)'); //等价于 DEBUG/EDITOR/PREVIEW
        } //#endregion

        /* ------------------ 4. 平台标识 ------------------ */
        //#region 平台标识


        checkPlatform() {
          if (HTML5) log('[PLATFORM] Web'); //Web

          if (NATIVE) log('[PLATFORM] Native'); //原生平台（包括移动端和桌面端）

          if (WECHAT) log('[PLATFORM] WeChat MiniGame'); //微信小游戏
          // 其他小游戏/快游戏同理
        } //#endregion

        /* ------------------ 5. 调试模式下的输出示例 ------------------ */
        //#region 调试输出


        devOnlyLog() {
          if (DEV) {
            log('[DEV-ONLY] This log only prints in development mode!');
          }
        } //#endregion

        /* ------------------ 6. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          this.demoLog();
          this.checkEnv();
          this.checkDebug();
          this.checkPlatform();
          this.devOnlyLog();
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57e763d6e674f4298892511c41b5d48a46968f99.js.map