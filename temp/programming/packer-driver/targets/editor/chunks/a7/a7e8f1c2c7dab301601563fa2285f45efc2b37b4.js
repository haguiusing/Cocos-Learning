System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ScrollBar, ScrollView, Sprite, log, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson37_ScrollBar;

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
      ScrollBar = _cc.ScrollBar;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d60d19EhvJHzaFFqqPRnXyS", "Lesson37_ScrollBar", undefined); // Lesson37_ScrollBar.ts


      __checkObsolete__(['_decorator', 'Component', 'ScrollBar', 'ScrollView', 'Sprite', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson37_ScrollBar
       * 演示 Cocos Creator 3.8 ScrollBar 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson37_ScrollBar", Lesson37_ScrollBar = (_dec = ccclass('Lesson37_ScrollBar'), _dec2 = property({
        type: ScrollBar
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: ScrollView
      }), _dec(_class = (_class2 = class Lesson37_ScrollBar extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取 ScrollBar 组件 ========================= */
          // #region 获取 ScrollBar
          _initializerDefineProperty(this, "scrollBar", _descriptor, this);

          // #endregion

          /* ========================= 3. 设置滚动滑块 ========================= */
          // #region 滚动滑块
          _initializerDefineProperty(this, "handleSprite", _descriptor2, this);

          // #endregion

          /* ========================= 5. 关联到 ScrollView ========================= */
          // #region 关联 ScrollView
          _initializerDefineProperty(this, "scrollView", _descriptor3, this);
        }

        /** 运行时获取或动态创建 ScrollBar 组件 */
        getOrCreateScrollBar() {
          var _this$scrollBar;

          let sb = (_this$scrollBar = this.scrollBar) != null ? _this$scrollBar : this.getComponent(ScrollBar);

          if (!sb) {
            sb = this.addComponent(ScrollBar);
            log('动态添加 ScrollBar 组件');
          }

          return sb;
        } // #endregion

        /* ========================= 2. 设置滚动方向 ========================= */
        // #region 滚动方向


        setDirection() {
          const sb = this.getOrCreateScrollBar();
          if (!sb) return; // 垂直滚动

          sb.direction = ScrollBar.Direction.VERTICAL; // 水平滚动
          // sb.direction = ScrollBar.Direction.HORIZONTAL;
        }

        setHandle() {
          const sb = this.getOrCreateScrollBar();
          if (!sb) return; // 设置滑块节点（需挂载 Sprite）

          if (this.handleSprite) {
            sb.handle = this.handleSprite;
          }
        } // #endregion

        /* ========================= 4. 自动隐藏 ========================= */
        // #region 自动隐藏


        toggleAutoHide() {
          const sb = this.getOrCreateScrollBar();
          if (!sb) return;
          sb.enableAutoHide = true; // 开启自动隐藏

          sb.autoHideTime = 2; // 2 秒后隐藏
        }
        /** 立即隐藏 */


        hideNow() {
          const sb = this.getOrCreateScrollBar();
          sb == null || sb.hide();
        }
        /** 立即显示 */


        showNow() {
          const sb = this.getOrCreateScrollBar();
          sb == null || sb.show();
        }

        bindToScrollView() {
          const sb = this.getOrCreateScrollBar();
          if (!sb || !this.scrollView) return; // 将 ScrollBar 绑定到 ScrollView

          sb.setScrollView(this.scrollView);
        } // #endregion

        /* ========================= 6. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setDirection();
          this.setHandle();
          this.toggleAutoHide();
          this.bindToScrollView();
        }

        start() {
          // 演示：5 秒后自动隐藏
          this.scheduleOnce(() => this.hideNow(), 5);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "handleSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
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
//# sourceMappingURL=a7e8f1c2c7dab301601563fa2285f45efc2b37b4.js.map