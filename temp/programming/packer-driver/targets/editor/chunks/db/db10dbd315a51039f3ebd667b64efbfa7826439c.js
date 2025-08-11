System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Lesson07_;

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

      _cclegacy._RF.push({}, "75ab2ZsIVdIm5p1XG5yllta", "Lesson07_", undefined); // Lesson0X_.ts


      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 计时器（schedule）使用示例
       * 核心类：Lesson07_
       */

      _export("Lesson07_", Lesson07_ = (_dec = ccclass('Lesson07_'), _dec(_class = class Lesson07_ extends Component {
        constructor(...args) {
          super(...args);
          //#endregion

          /* ------------------ 4. 手动取消计时器 ------------------ */
          //#region 4. 手动取消计时器
          this.count = 0;
          this.callback = null;
        }

        /* ------------------ 1. 基础循环计时器 ------------------ */
        //#region 1. 基础循环计时器
        startLoopTimer() {
          this.schedule(() => {
            this.doSomething('loop timer tick');
          }, 5); // 每 5 秒执行一次
        } //#endregion

        /* ------------------ 2. 带参数计时器 ------------------ */
        //#region 2. 带参数计时器


        startComplexTimer() {
          const interval = 5; // 间隔（秒）

          const repeat = 3; // 重复次数（实际执行 repeat + 1 次）

          const delay = 10; // 首次执行延迟（秒）

          this.schedule(() => {
            this.doSomething('complex timer tick');
          }, interval, repeat, delay);
        } //#endregion

        /* ------------------ 3. 一次性计时器 ------------------ */
        //#region 3. 一次性计时器


        startOnceTimer() {
          this.scheduleOnce(() => {
            this.doSomething('once timer fired');
          }, 2); // 2 秒后执行一次
        }

        startCancelableTimer() {
          this.count = 0;

          this.callback = () => {
            this.count++;

            if (this.count >= 6) {
              this.unschedule(this.callback); // 第 6 次后取消

              return;
            }

            this.doSomething(`cancelable timer ${this.count}`);
          };

          this.schedule(this.callback, 1); // 每秒执行一次
        } //#endregion

        /* ------------------ 5. 取消全部计时器 ------------------ */
        //#region 5. 取消全部计时器


        cancelAllTimers() {
          this.unscheduleAllCallbacks();
        } //#endregion

        /* ------------------ 6. 生命周期演示 ------------------ */
        //#region 6. 生命周期


        start() {
          this.startLoopTimer();
          this.startComplexTimer();
          this.startOnceTimer();
          this.startCancelableTimer();
        }

        doSomething(msg) {
          console.log('[Lesson0X_]', msg);
        }

        onDestroy() {
          // 场景销毁时统一清理计时器（可选）
          this.cancelAllTimers();
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db10dbd315a51039f3ebd667b64efbfa7826439c.js.map