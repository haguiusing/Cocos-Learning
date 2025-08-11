System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Widget, sys, log, view, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson32_Widget;

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
      Widget = _cc.Widget;
      sys = _cc.sys;
      log = _cc.log;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10773k4jNZCKrRWmGviM8rX", "Lesson32_Widget", undefined); // Lesson32_Widget.ts


      __checkObsolete__(['_decorator', 'Component', 'Widget', 'Node', 'UITransform', 'sys', 'log', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 演示 Cocos Creator 3.8 Widget 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson32_Widget", Lesson32_Widget = (_dec = ccclass('Lesson32_Widget'), _dec2 = property({
        type: Widget
      }), _dec(_class = (_class2 = class Lesson32_Widget extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/添加 Widget 组件 ========================= */
          // #region 获取/添加 Widget 组件
          _initializerDefineProperty(this, "widget", _descriptor, this);
        }

        /** 运行时动态添加/获取 Widget */
        addWidget() {
          // 方式1：直接获取
          var widget = this.getComponent(Widget);

          if (!widget) {
            // 方式2：动态添加
            widget = this.addComponent(Widget);
            log('已动态添加 Widget 组件');
          }

          return widget;
        } // #endregion

        /* ========================= 2. 基础对齐设置 ========================= */
        // #region 基础对齐


        setBasicAlignment() {
          var w = this.widget || this.addWidget();
          if (!w) return; // 居中

          w.isAlignHorizontalCenter = true;
          w.horizontalCenter = 0;
          w.isAlignVerticalCenter = true;
          w.verticalCenter = 0; // 贴边

          w.isAlignTop = true;
          w.top = 20; // 距离顶部 20px

          w.isAlignBottom = false;
          w.isAlignLeft = true;
          w.left = 10; // 距离左侧 10px

          w.isAlignRight = false; // 立即刷新（下一帧才生效，除非手动调用）

          w.updateAlignment();
        } // #endregion

        /* ========================= 3. 拉伸适配 ========================= */
        // #region 拉伸适配


        stretchToParent() {
          var w = this.widget || this.addWidget();
          if (!w) return; // 水平拉伸

          w.isAlignLeft = true;
          w.left = 0;
          w.isAlignRight = true;
          w.right = 0; // 垂直拉伸

          w.isAlignTop = true;
          w.top = 0;
          w.isAlignBottom = true;
          w.bottom = 0; // 检查拉伸状态

          log('当前是否水平拉伸:', w.isStretchWidth);
          log('当前是否垂直拉伸:', w.isStretchHeight);
          w.updateAlignment();
        } // #endregion

        /* ========================= 4. 百分比/像素混合 ========================= */
        // #region 百分比/像素混合


        mixPixelPercent() {
          var w = this.widget || this.addWidget();
          if (!w) return; // 左侧 10% 边距

          w.isAlignLeft = true;
          w.isAbsoluteLeft = false; // 使用百分比

          w.left = 0.1; // 10%
          // 右侧固定 20px

          w.isAlignRight = true;
          w.isAbsoluteRight = true; // 使用像素

          w.right = 20; // 垂直居中

          w.isAlignVerticalCenter = true;
          w.isAbsoluteVerticalCenter = true;
          w.verticalCenter = 0;
          w.updateAlignment();
        } // #endregion

        /* ========================= 5. 指定对齐目标 ========================= */
        // #region 指定对齐目标


        alignToCustomTarget() {
          var _this$node$parent;

          var w = this.widget || this.addWidget();
          if (!w) return; // 假设场景中有一个名为 "CustomTarget" 的节点

          var target = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getChildByName('CustomTarget');

          if (target) {
            w.target = target; // 相对于目标节点右下对齐

            w.isAlignRight = true;
            w.right = 0;
            w.isAlignBottom = true;
            w.bottom = 0;
            w.updateAlignment();
          }
        } // #endregion

        /* ========================= 6. 运行时动态更新 ========================= */
        // #region 运行时动态更新


        updateByScreenSize() {
          var w = this.widget || this.addWidget();
          if (!w) return;
          var visible = view.getVisibleSize();

          if (visible.width < 720) {
            // 小屏：缩小边距
            w.left = w.right = 5;
          } else {
            // 大屏：放大边距
            w.left = w.right = 30;
          }

          w.updateAlignment();
        } // #endregion

        /* ========================= 7. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 初始化一次
          this.setBasicAlignment();
        }

        start() {
          // 根据平台差异化处理
          if (sys.isMobile) {
            this.mixPixelPercent();
          }
        }

        onEnable() {// 注册窗口大小改变事件（如需）
          // view.on('design-resolution-changed', this.updateByScreenSize, this);
        }

        onDisable() {// view.off('design-resolution-changed', this.updateByScreenSize, this);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "widget", [_dec2], {
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
//# sourceMappingURL=a8e9de9820523dc1f3e58de70125f7fa36e4f7d4.js.map