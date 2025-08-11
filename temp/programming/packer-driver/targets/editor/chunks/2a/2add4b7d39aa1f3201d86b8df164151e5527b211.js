System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIOpacity, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson48_UIOpacity;

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
      UIOpacity = _cc.UIOpacity;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72122tMKRFKM4gcYKTrnh8k", "Lesson48_UIOpacity", undefined); // Lesson48_UIOpacity.ts


      __checkObsolete__(['_decorator', 'Component', 'UIOpacity', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson48_UIOpacity
       * 演示 Cocos Creator 3.8 UIOpacity 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson48_UIOpacity", Lesson48_UIOpacity = (_dec = ccclass('Lesson48_UIOpacity'), _dec2 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = class Lesson48_UIOpacity extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 UIOpacity 组件 ========================= */
          // #region 获取/创建 UIOpacity
          _initializerDefineProperty(this, "uiOpacity", _descriptor, this);
        }

        /** 运行时动态创建或获取 UIOpacity 组件 */
        getOrCreateUIOpacity() {
          var _this$uiOpacity;

          let uiOpacity = (_this$uiOpacity = this.uiOpacity) != null ? _this$uiOpacity : this.getComponent(UIOpacity);

          if (!uiOpacity) {
            uiOpacity = this.addComponent(UIOpacity);
            log('动态添加 UIOpacity 组件');
          }

          return uiOpacity;
        } // #endregion

        /* ========================= 2. 设置透明度 ========================= */
        // #region 设置透明度


        setOpacity(value) {
          const uiOpacity = this.getOrCreateUIOpacity();
          if (!uiOpacity) return; // 设置透明度（0-255）

          uiOpacity.opacity = Math.max(0, Math.min(255, value));
          log(`透明度已设置为: ${uiOpacity.opacity}`);
        } // #endregion

        /* ========================= 3. 获取当前透明度 ========================= */
        // #region 获取透明度


        getOpacity() {
          const uiOpacity = this.getOrCreateUIOpacity();
          if (!uiOpacity) return;
          const opacity = uiOpacity.opacity;
          log(`当前透明度: ${opacity}`);
          return opacity;
        } // #endregion

        /* ========================= 4. 动态改变透明度 ========================= */
        // #region 动态改变透明度


        fadeOut(duration) {
          const uiOpacity = this.getOrCreateUIOpacity();
          if (!uiOpacity) return; // 逐渐变透明

          this.schedule(dt => {
            uiOpacity.opacity -= 255 * dt / duration;

            if (uiOpacity.opacity <= 0) {
              this.unscheduleAllCallbacks();
              uiOpacity.opacity = 0;
              log('完全透明');
            }
          }, 0, 0, 0);
        }

        fadeIn(duration) {
          const uiOpacity = this.getOrCreateUIOpacity();
          if (!uiOpacity) return; // 逐渐变不透明

          this.schedule(dt => {
            uiOpacity.opacity += 255 * dt / duration;

            if (uiOpacity.opacity >= 255) {
              this.unscheduleAllCallbacks();
              uiOpacity.opacity = 255;
              log('完全不透明');
            }
          }, 0, 0, 0);
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setOpacity(128); // 初始化透明度为半透明
        }

        start() {
          // 演示：3 秒后逐渐变透明
          this.scheduleOnce(() => this.fadeOut(2), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiOpacity", [_dec2], {
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
//# sourceMappingURL=2add4b7d39aa1f3201d86b8df164151e5527b211.js.map