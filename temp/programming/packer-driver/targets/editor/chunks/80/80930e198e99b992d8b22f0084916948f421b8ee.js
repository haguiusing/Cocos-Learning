System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UISkew, Vec2, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson49_UISkew;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UISkew = _cc.UISkew;
      Vec2 = _cc.Vec2;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e927sBlQJKlpyRa7NdR7kF", "Lesson49_UISkew", undefined); // Lesson49_UISkew.ts


      __checkObsolete__(['_decorator', 'Component', 'UISkew', 'Vec2', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson49_UISkew
       * 演示 Cocos Creator 3.8 UISkew 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson49_UISkew", Lesson49_UISkew = (_dec = ccclass('Lesson49_UISkew'), _dec2 = property({
        type: UISkew
      }), _dec(_class = (_class2 = class Lesson49_UISkew extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 UISkew 组件 ========================= */
          // #region 获取/创建 UISkew
          _initializerDefineProperty(this, "uiSkew", _descriptor, this);
        }

        /** 运行时动态创建或获取 UISkew 组件 */
        getOrCreateUISkew() {
          var _this$uiSkew;

          let skew = (_this$uiSkew = this.uiSkew) != null ? _this$uiSkew : this.getComponent(UISkew);

          if (!skew) {
            skew = this.addComponent(UISkew);
            log('动态添加 UISkew 组件');
          }

          return skew;
        } // #endregion

        /* ========================= 2. 设置斜切角度 ========================= */
        // #region 设置斜切角度


        setSkew(x, y) {
          const skew = this.getOrCreateUISkew();
          if (!skew) return;
          skew.skew = new Vec2(x, y);
          log(`斜切角度已设置为: X=${x}, Y=${y}`);
        } // #endregion

        /* ========================= 3. 获取斜切角度 ========================= */
        // #region 获取斜切角度


        getSkew(out = new Vec2()) {
          const skew = this.getOrCreateUISkew();
          if (!skew) return out;
          return skew.getSkew(out);
        } // #endregion

        /* ========================= 4. 动态调整斜切角度 ========================= */
        // #region 动态调整斜切角度


        skewOverTime(duration, targetSkew) {
          const skew = this.getOrCreateUISkew();
          if (!skew) return;
          const startSkew = skew.skew.clone();
          let elapsed = 0;
          this.schedule(dt => {
            elapsed += dt;
            const t = Math.min(elapsed / duration, 1);
            skew.skew = startSkew.lerp(targetSkew, t);

            if (t >= 1) {
              this.unscheduleAllCallbacks();
              log('斜切动画完成');
            }
          }, 0, 0, 0);
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setSkew(10, 20); // 初始化斜切角度
        }

        start() {
          // 演示：3 秒后斜切角度变为 (30, 40)
          this.scheduleOnce(() => this.skewOverTime(2, new Vec2(30, 40)), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiSkew", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80930e198e99b992d8b22f0084916948f421b8ee.js.map