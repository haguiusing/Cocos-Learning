System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Toggle, EventHandler, log, Node, Sprite, ToggleContainer, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson41_Toggle;

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
      Toggle = _cc.Toggle;
      EventHandler = _cc.EventHandler;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      ToggleContainer = _cc.ToggleContainer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "722c0Kl8d9CBacLYM8nl2EF", "Lesson41_Toggle", undefined); // Lesson41_Toggle.ts


      __checkObsolete__(['_decorator', 'Component', 'Toggle', 'EventHandler', 'log', 'Node', 'Sprite', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson41_Toggle
       * 演示 Cocos Creator 3.8 Toggle 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson41_Toggle", Lesson41_Toggle = (_dec = ccclass('Lesson41_Toggle'), _dec2 = property({
        type: Toggle
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class Lesson41_Toggle extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 Toggle 组件 ========================= */
          // #region 获取/创建 Toggle
          _initializerDefineProperty(this, "toggle", _descriptor, this);

          // #endregion

          /* ========================= 3. 设置选中图标 ========================= */
          // #region 设置选中图标
          _initializerDefineProperty(this, "checkMarkNode", _descriptor2, this);

          // #endregion

          /* ========================= 5. 设置为单选按钮（与 ToggleGroup 配合） ========================= */
          // #region 单选按钮
          _initializerDefineProperty(this, "toggleGroupNode", _descriptor3, this);
        }

        /** 运行时动态创建或获取 Toggle 组件 */
        getOrCreateToggle() {
          var _this$toggle;

          var t = (_this$toggle = this.toggle) != null ? _this$toggle : this.getComponent(Toggle);

          if (!t) {
            t = this.addComponent(Toggle);
            log('动态添加 Toggle 组件');
          }

          return t;
        } // #endregion

        /* ========================= 2. 设置选中状态 ========================= */
        // #region 设置选中状态


        setChecked(value) {
          var t = this.getOrCreateToggle();
          if (!t) return; // 直接设置选中状态

          t.isChecked = value;
          log("\u5F53\u524D\u9009\u4E2D\u72B6\u6001: " + t.isChecked);
        }
        /** 切换选中状态 */


        toggleChecked() {
          var t = this.getOrCreateToggle();
          if (!t) return;
          t.isChecked = !t.isChecked;
          log("\u9009\u4E2D\u72B6\u6001\u5DF2\u5207\u6362\u4E3A: " + t.isChecked);
        }

        setCheckMark() {
          var t = this.getOrCreateToggle();
          if (!t) return; // 设置选中图标节点

          if (this.checkMarkNode) {
            t.checkMark = this.checkMarkNode.getComponent(Sprite);
          }
        } // #endregion

        /* ========================= 4. 事件监听 ========================= */
        // #region 事件监听


        addCheckEvent() {
          var t = this.getOrCreateToggle();
          if (!t) return; // 添加选中事件

          var handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'Lesson41_Toggle';
          handler.handler = 'onToggleChecked';
          t.checkEvents.push(handler);
        }

        onToggleChecked(toggle) {
          log("Toggle \u88AB\u9009\u4E2D: " + toggle.isChecked);
        }

        setAsRadioButton() {
          var t = this.getOrCreateToggle();
          if (!t) return; // 将 Toggle 添加到 ToggleGroup 中

          if (this.toggleGroupNode) {
            var group = this.toggleGroupNode.getComponent(ToggleContainer);

            if (group) {
              t.node.removeFromParent();
              group.node.addChild(t.node);
            }
          }
        } // #endregion

        /* ========================= 6. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setChecked(true); // 初始化为选中状态

          this.addCheckEvent(); // 添加事件监听
        }

        start() {
          // 演示：3 秒后切换选中状态
          this.scheduleOnce(() => this.toggleChecked(), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "checkMarkNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleGroupNode", [_dec4], {
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
//# sourceMappingURL=2112f054b4eaa3fafd8989fbb8504850d839635a.js.map