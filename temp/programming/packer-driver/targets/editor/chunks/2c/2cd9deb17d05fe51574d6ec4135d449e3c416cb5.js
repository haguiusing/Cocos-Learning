System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Toggle, ToggleContainer, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson42_ToggleContainer;

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
      ToggleContainer = _cc.ToggleContainer;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95ddfd9oilO0I0zO7TfVVaa", "Lesson42_ToggleContainer", undefined); // Lesson42_ToggleContainer.ts


      __checkObsolete__(['_decorator', 'Component', 'Toggle', 'ToggleContainer', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson42_ToggleContainer
       * 演示 Cocos Creator 3.8 ToggleContainer 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson42_ToggleContainer", Lesson42_ToggleContainer = (_dec = ccclass('Lesson42_ToggleContainer'), _dec2 = property({
        type: ToggleContainer
      }), _dec3 = property({
        type: Toggle
      }), _dec(_class = (_class2 = class Lesson42_ToggleContainer extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 ToggleContainer 组件 ========================= */
          // #region 获取/创建 ToggleContainer
          _initializerDefineProperty(this, "toggleContainer", _descriptor, this);

          // #endregion

          /* ========================= 3. 添加/移除 Toggle ========================= */
          // #region 添加/移除 Toggle
          _initializerDefineProperty(this, "toggleToAdd", _descriptor2, this);
        }

        /** 运行时动态创建或获取 ToggleContainer 组件 */
        getOrCreateToggleContainer() {
          var _this$toggleContainer;

          let tc = (_this$toggleContainer = this.toggleContainer) != null ? _this$toggleContainer : this.getComponent(ToggleContainer);

          if (!tc) {
            tc = this.addComponent(ToggleContainer);
            log('动态添加 ToggleContainer 组件');
          }

          return tc;
        } // #endregion

        /* ========================= 2. 设置允许取消选中 ========================= */
        // #region 设置允许取消选中


        setAllowSwitchOff(value) {
          const tc = this.getOrCreateToggleContainer();
          if (!tc) return;
          tc.allowSwitchOff = value;
          log(`允许取消选中: ${value}`);
        }

        addToggle() {
          const tc = this.getOrCreateToggleContainer();
          if (!tc || !this.toggleToAdd) return;
          tc.node.addChild(this.toggleToAdd.node);
          log('添加 Toggle 到 ToggleContainer');
        }

        removeToggle() {
          const tc = this.getOrCreateToggleContainer();
          if (!tc || !this.toggleToAdd) return;
          this.toggleToAdd.node.removeFromParent();
          log('从 ToggleContainer 移除 Toggle');
        } // #endregion

        /* ========================= 4. 刷新状态 ========================= */
        // #region 刷新状态


        notifyToggleCheck() {
          const tc = this.getOrCreateToggleContainer();
          if (!tc) return;
          tc.notifyToggleCheck(this.toggleToAdd);
          log('刷新 Toggle 状态');
        }

        ensureValidState() {
          const tc = this.getOrCreateToggleContainer();
          if (!tc) return;
          tc.ensureValidState();
          log('确保状态有效');
        } // #endregion

        /* ========================= 5. 获取当前选中的 Toggle ========================= */
        // #region 获取当前选中的 Toggle


        getActiveToggles() {
          const tc = this.getOrCreateToggleContainer();
          if (!tc) return;
          const activeToggles = tc.activeToggles();
          log(`当前选中的 Toggle 数量: ${activeToggles.length}`);
        } // #endregion

        /* ========================= 6. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setAllowSwitchOff(true); // 初始化允许取消选中

          this.addToggle(); // 添加 Toggle
        }

        start() {
          // 演示：3 秒后刷新状态
          this.scheduleOnce(() => this.notifyToggleCheck(), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleToAdd", [_dec3], {
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
//# sourceMappingURL=2cd9deb17d05fe51574d6ec4135d449e3c416cb5.js.map