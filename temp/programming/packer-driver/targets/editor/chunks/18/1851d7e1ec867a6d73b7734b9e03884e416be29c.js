System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Button, EventHandler, Sprite, Color, SpriteFrame, log, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson33_Button;

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
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      SpriteFrame = _cc.SpriteFrame;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "642478ZrNlJTbGQ0ll9EKbX", "Lesson33_Button", undefined); // Lesson33_Button.ts


      __checkObsolete__(['_decorator', 'Component', 'Button', 'EventHandler', 'Sprite', 'Color', 'SpriteFrame', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson33_Button
       * 演示 Cocos Creator 3.8 Button 组件的常用 API 与使用方式
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson33_Button", Lesson33_Button = (_dec = ccclass('Lesson33_Button'), _dec2 = property({
        type: Button
      }), _dec3 = property({
        type: SpriteFrame
      }), _dec4 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class Lesson33_Button extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取 Button 组件 ========================= */
          // #region 获取 Button 组件
          _initializerDefineProperty(this, "button", _descriptor, this);

          // #endregion

          /* ========================= 4. 设置精灵过渡 ========================= */
          // #region 精灵过渡
          _initializerDefineProperty(this, "normalSF", _descriptor2, this);

          _initializerDefineProperty(this, "pressedSF", _descriptor3, this);
        }

        /** 运行时动态获取或创建 Button 组件 */
        getOrCreateButton() {
          // 方式 1：直接获取
          let btn = this.getComponent(Button);

          if (!btn) {
            // 方式 2：动态添加
            btn = this.addComponent(Button);
            log('动态添加 Button 组件完成');
          }

          return btn;
        } // #endregion

        /* ========================= 2. 开关按钮交互 ========================= */
        // #region 开关按钮交互


        toggleInteractable() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return; // 关闭交互

          btn.interactable = false;
          log('按钮已禁用'); // 延迟 2 秒后恢复

          this.scheduleOnce(() => {
            btn.interactable = true;
            log('按钮已恢复交互');
          }, 2);
        } // #endregion

        /* ========================= 3. 设置颜色过渡 ========================= */
        // #region 颜色过渡


        setColorTransition() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return; // 启用 Color 过渡

          btn.transition = Button.Transition.COLOR; // 设置各状态颜色

          btn.normalColor = Color.WHITE;
          btn.pressedColor = Color.GRAY;
          btn.hoverColor = new Color(200, 200, 200);
          btn.disabledColor = new Color(100, 100, 100, 150); // 过渡时长

          btn.duration = 0.15;
        }

        setSpriteTransition() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return;
          btn.transition = Button.Transition.SPRITE; // 必须指定 target（通常是背景 Sprite 节点）

          const target = btn.target || this.node;
          const sp = target.getComponent(Sprite);

          if (!sp) {
            log('请先给 target 节点添加 Sprite 组件');
            return;
          }

          btn.normalSprite = this.normalSF;
          btn.pressedSprite = this.pressedSF;
        } // #endregion

        /* ========================= 5. 设置缩放过渡 ========================= */
        // #region 缩放过渡


        setScaleTransition() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return;
          btn.transition = Button.Transition.SCALE; // 点击时缩放到原始 scale * zoomScale

          btn.zoomScale = 0.9; // 缩小 10 %

          btn.duration = 0.1; // 动画时长 0.1 秒
        } // #endregion

        /* ========================= 6. 事件监听（方式 1：EventHandler） ========================= */
        // #region 事件监听 - EventHandler


        addClickEventHandler() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return; // 清空旧事件

          btn.clickEvents.length = 0;
          const handler = new EventHandler();
          handler.target = this.node; // 事件处理脚本所在节点

          handler.component = 'Lesson33_Button'; // 脚本类名（需与文件名保持一致）

          handler.handler = 'onButtonClick'; // 回调方法

          handler.customEventData = '自定义数据'; // 额外参数

          btn.clickEvents.push(handler);
        }

        onButtonClick(event, customData) {
          log('按钮被点击！', customData);
        } // #endregion

        /* ========================= 7. 事件监听（方式 2：node.on） ========================= */
        // #region 事件监听 - node.on


        addClickListener() {
          const btn = this.button || this.getOrCreateButton();
          if (!btn) return; // 先移除旧监听防止重复

          btn.node.off(Button.EventType.CLICK, this.onSimpleClick, this);
          btn.node.on(Button.EventType.CLICK, this.onSimpleClick, this);
        }

        onSimpleClick(button) {
          log('简单监听：按钮被点击', button.name);
        } // #endregion

        /* ========================= 8. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 初始化按钮
          this.setColorTransition();
          this.addClickEventHandler();
          this.addClickListener();
        }

        start() {
          // 演示：5 秒后禁用按钮
          this.scheduleOnce(() => {
            this.toggleInteractable();
          }, 5);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalSF", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pressedSF", [_dec4], {
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
//# sourceMappingURL=1851d7e1ec867a6d73b7734b9e03884e416be29c.js.map