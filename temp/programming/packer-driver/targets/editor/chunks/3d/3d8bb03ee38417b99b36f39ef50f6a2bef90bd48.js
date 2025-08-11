System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventTarget, _dec, _class, _crd, ccclass, Lesson13_;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bccf01gOb1B3LWgDnIXLFJM", "Lesson13_", undefined); // Lesson13_.ts


      __checkObsolete__(['_decorator', 'Component', 'EventTarget']);

      ({
        ccclass
      } = _decorator);
      /**
       * 事件监听与发射完整示例
       * 核心类：Lesson13_
       */

      _export("Lesson13_", Lesson13_ = (_dec = ccclass('Lesson13_'), _dec(_class = class Lesson13_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 创建全局事件目标 ------------------ */
          //#region 1. 创建 EventTarget
          this.eventTarget = new EventTarget();
        }

        //#endregion

        /* ------------------ 2. 常规监听（on） ------------------ */
        //#region 2. on 监听
        registerOn() {
          // 方式 A：箭头函数 + 第三个参数指定 this
          this.eventTarget.on('hello', msg => {
            console.log('[on] 收到 hello：', msg, this.node.name);
          }, this); // 方式 B：bind(this)

          this.eventTarget.on('add', function (a, b) {
            console.log('[on] add 结果：', a + b, this.node.name);
          }.bind(this));
        } //#endregion

        /* ------------------ 3. 一次性监听（once） ------------------ */
        //#region 3. once 监听


        registerOnce() {
          this.eventTarget.once('once-only', () => {
            console.log('[once] 只会触发一次');
          }, this);
        } //#endregion

        /* ------------------ 4. 取消监听（off） ------------------ */
        //#region 4. 取消监听


        _sayHello() {
          console.log('[callback] Hello World');
        }

        onEnable() {
          // 注册
          this.eventTarget.on('foobar', this._sayHello, this);
        }

        onDisable() {
          // 精确取消
          this.eventTarget.off('foobar', this._sayHello, this);
        }
        /** 演示全部清空 */


        clearAll() {
          this.eventTarget.targetOff(this); // 或 eventTarget.off('事件名');
        } //#endregion

        /* ------------------ 5. 事件发射（emit） ------------------ */
        //#region 5. 发射事件


        emitEvents() {
          // 发射 hello
          this.eventTarget.emit('hello', '来自 emit 的问候'); // 发射 add（最多 5 个参数）

          this.eventTarget.emit('add', 3, 7); // 触发 once-only

          this.eventTarget.emit('once-only');
          this.eventTarget.emit('once-only'); // 第二次无效
        } //#endregion

        /* ------------------ 6. 生命周期 ------------------ */
        //#region 6. 生命周期


        start() {
          this.registerOn();
          this.registerOnce();
          this.emitEvents();
        }

        onDestroy() {
          this.clearAll();
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d8bb03ee38417b99b36f39ef50f6a2bef90bd48.js.map