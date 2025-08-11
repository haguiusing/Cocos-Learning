System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Slider, EventHandler, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson43_Slider;

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
      Slider = _cc.Slider;
      EventHandler = _cc.EventHandler;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3846dnkwUBNh6p46a23Kuy+", "Lesson43_Slider", undefined); // Lesson43_Slider.ts


      __checkObsolete__(['_decorator', 'Component', 'Slider', 'EventHandler', 'Vec3', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson43_Slider
       * 演示 Cocos Creator 3.8 Slider 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson43_Slider", Lesson43_Slider = (_dec = ccclass('Lesson43_Slider'), _dec2 = property({
        type: Slider
      }), _dec(_class = (_class2 = class Lesson43_Slider extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 Slider 组件 ========================= */
          // #region 获取/创建 Slider
          _initializerDefineProperty(this, "slider", _descriptor, this);
        }

        /** 运行时动态创建或获取 Slider 组件 */
        getOrCreateSlider() {
          var _this$slider;

          var s = (_this$slider = this.slider) != null ? _this$slider : this.getComponent(Slider);

          if (!s) {
            s = this.addComponent(Slider);
            log('动态添加 Slider 组件');
          }

          return s;
        } // #endregion

        /* ========================= 2. 设置滑动方向 ========================= */
        // #region 设置滑动方向


        setHorizontalDirection() {
          var s = this.getOrCreateSlider();
          if (!s) return; // 设置为水平滑动

          s.direction = Slider.Direction.Horizontal;
        }

        setVerticalDirection() {
          var s = this.getOrCreateSlider();
          if (!s) return; // 设置为垂直滑动

          s.direction = Slider.Direction.Vertical;
        } // #endregion

        /* ========================= 3. 设置进度值 ========================= */
        // #region 设置进度值


        setProgress(value) {
          var s = this.getOrCreateSlider();
          if (!s) return; // 设置进度值（0~1）

          s.progress = Math.max(0, Math.min(1, value));
          log("\u5F53\u524D\u8FDB\u5EA6: " + s.progress);
        } // #endregion

        /* ========================= 4. 事件监听 ========================= */
        // #region 事件监听


        addSlideEvent() {
          var s = this.getOrCreateSlider();
          if (!s) return; // 添加滑动事件

          var handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'Lesson43_Slider';
          handler.handler = 'onSliderValueChanged';
          s.slideEvents.push(handler);
        }

        onSliderValueChanged(slider) {
          log("\u6ED1\u5757\u503C\u5DF2\u66F4\u6539: " + slider.progress);
        } // #endregion

        /* ========================= 5. 获取滑块节点 ========================= */
        // #region 获取滑块节点


        getHandleNode() {
          var s = this.getOrCreateSlider();
          if (!s) return;
          var handleNode = s.handle.node;
          log("\u6ED1\u5757\u8282\u70B9: " + handleNode.name);
        } // #endregion

        /* ========================= 6. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setHorizontalDirection(); // 设置为水平滑动

          this.setProgress(0.5); // 设置初始进度为 50%

          this.addSlideEvent(); // 添加滑动事件
        }

        start() {
          // 演示：3 秒后将进度设置为 100%
          this.scheduleOnce(() => this.setProgress(1), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "slider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=52b6697e556951cdf756f6bff6e0660329ca6094.js.map