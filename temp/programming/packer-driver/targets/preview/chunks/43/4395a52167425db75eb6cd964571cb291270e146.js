System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, KeyCode, screen, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson17_;

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
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      screen = _cc.screen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c29848xqiFAloX3MLXfCh43", "Lesson17_", undefined); // Lesson17_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'Input', 'EventTouch', 'EventMouse', 'EventKeyboard', 'KeyCode', 'screen']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 全局 + 节点 触摸 / 鼠标 / 键盘 事件 API 全整合
       * 核心类：Lesson17_
       */

      _export("Lesson17_", Lesson17_ = (_dec = ccclass('Lesson17_'), _dec2 = property(Node), _dec(_class = (_class2 = class Lesson17_ extends Component {
        constructor() {
          super(...arguments);

          //#endregion

          /* ------------------ 2. 节点级事件（this.node 或任意节点） ------------------ */
          //#region 节点事件
          _initializerDefineProperty(this, "targetNode", _descriptor, this);
        }

        /* ------------------ 1. 全局输入事件（input 对象） ------------------ */
        //#region 全局输入事件
        registerGlobalInput() {
          // 1-1 全局触摸
          input.on(Input.EventType.TOUCH_START, this.onGlobalTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onGlobalTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onGlobalTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onGlobalTouchCancel, this); // 1-2 全局鼠标

          input.on(Input.EventType.MOUSE_DOWN, this.onGlobalMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onGlobalMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onGlobalMouseUp, this);
          input.on(Input.EventType.MOUSE_WHEEL, this.onGlobalMouseWheel, this); // 1-3 全局键盘

          input.on(Input.EventType.KEY_DOWN, this.onGlobalKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onGlobalKeyUp, this);
        }

        unregisterGlobalInput() {
          input.off(Input.EventType.TOUCH_START, this.onGlobalTouchStart, this);
        }

        onGlobalTouchStart(event) {
          console.log('[Global] TouchStart', event.getLocation());
        }

        onGlobalTouchMove(event) {
          console.log('[Global] TouchMove', event.getUILocation());
        }

        onGlobalTouchEnd(event) {
          console.log('[Global] TouchEnd', event.getLocation());
        }

        onGlobalTouchCancel(event) {
          console.log('[Global] TouchCancel');
        }

        onGlobalMouseDown(event) {
          console.log('[Global] MouseDown', event.getLocation());
        }

        onGlobalMouseMove(event) {
          console.log('[Global] MouseMove', event.getLocation());
        }

        onGlobalMouseUp(event) {
          console.log('[Global] MouseUp', event.getLocation());
        }

        onGlobalMouseWheel(event) {
          console.log('[Global] MouseWheel', event.getScrollY());
        }

        onGlobalKeyDown(event) {
          console.log('[Global] KeyDown', KeyCode[event.keyCode]);
        }

        onGlobalKeyUp(event) {
          console.log('[Global] KeyUp', KeyCode[event.keyCode]);
        }

        // 在编辑器里拖拽要监听的节点；为空则监听自身
        get listenedNode() {
          return this.targetNode || this.node;
        }

        registerNodeEvents() {
          // 2-1 节点触摸
          this.listenedNode.on(Node.EventType.TOUCH_START, this.onNodeTouchStart, this);
          this.listenedNode.on(Node.EventType.TOUCH_MOVE, this.onNodeTouchMove, this);
          this.listenedNode.on(Node.EventType.TOUCH_END, this.onNodeTouchEnd, this);
          this.listenedNode.on(Node.EventType.TOUCH_CANCEL, this.onNodeTouchCancel, this); // 2-2 节点鼠标

          this.listenedNode.on(Node.EventType.MOUSE_DOWN, this.onNodeMouseDown, this);
          this.listenedNode.on(Node.EventType.MOUSE_MOVE, this.onNodeMouseMove, this);
          this.listenedNode.on(Node.EventType.MOUSE_UP, this.onNodeMouseUp, this);
          this.listenedNode.on(Node.EventType.MOUSE_ENTER, this.onNodeMouseEnter, this);
          this.listenedNode.on(Node.EventType.MOUSE_LEAVE, this.onNodeMouseLeave, this);
          this.listenedNode.on(Node.EventType.MOUSE_WHEEL, this.onNodeMouseWheel, this); // 2-3 捕获阶段示例（第四个参数 useCapture = true）

          this.listenedNode.on(Node.EventType.TOUCH_START, this.onCaptureTouchStart, this, true);
        }

        unregisterNodeEvents() {
          this.listenedNode.targetOff(this); // 注销所有事件监听
        }

        onNodeTouchStart(event) {
          var _event$currentTarget;

          console.log('[Node] TouchStart', (_event$currentTarget = event.currentTarget) == null ? void 0 : _event$currentTarget.name);
        }

        onNodeTouchMove(event) {
          var _event$currentTarget2;

          console.log('[Node] TouchMove', (_event$currentTarget2 = event.currentTarget) == null ? void 0 : _event$currentTarget2.name);
        }

        onNodeTouchEnd(event) {
          var _event$currentTarget3;

          console.log('[Node] TouchEnd', (_event$currentTarget3 = event.currentTarget) == null ? void 0 : _event$currentTarget3.name);
        }

        onNodeTouchCancel(event) {
          console.log('[Node] TouchCancel');
        }

        onNodeMouseDown(event) {
          var _event$currentTarget4;

          console.log('[Node] MouseDown', (_event$currentTarget4 = event.currentTarget) == null ? void 0 : _event$currentTarget4.name);
        }

        onNodeMouseMove(event) {
          var _event$currentTarget5;

          console.log('[Node] MouseMove', (_event$currentTarget5 = event.currentTarget) == null ? void 0 : _event$currentTarget5.name);
        }

        onNodeMouseUp(event) {
          var _event$currentTarget6;

          console.log('[Node] MouseUp', (_event$currentTarget6 = event.currentTarget) == null ? void 0 : _event$currentTarget6.name);
        }

        onNodeMouseEnter(event) {
          console.log('[Node] MouseEnter');
        }

        onNodeMouseLeave(event) {
          console.log('[Node] MouseLeave');
        }

        onNodeMouseWheel(event) {
          console.log('[Node] MouseWheel');
        }

        onCaptureTouchStart() {
          console.log('[Capture] TouchStart on', this.listenedNode.name);
        } //#endregion

        /* ------------------ 3. 屏幕级事件（window-resize / orientation） ------------------ */
        //#region 屏幕事件


        registerScreenEvents() {
          screen.on('window-resize', this.onWindowResize, this);
          screen.on('orientation-change', this.onOrientationChange, this);
        }

        unregisterScreenEvents() {
          screen.off('window-resize', this.onWindowResize, this);
          screen.off('orientation-change', this.onOrientationChange, this);
        }

        onWindowResize(width, height) {
          console.log('[Screen] resize', width, height);
        }

        onOrientationChange(orientation) {
          console.log('[Screen] orientation', orientation);
        } //#endregion

        /* ------------------ 4. 生命周期：统一注册 & 注销 ------------------ */
        //#region Lifecycle


        onEnable() {
          this.registerGlobalInput();
          this.registerNodeEvents();
          this.registerScreenEvents();
        }

        onDisable() {
          this.unregisterGlobalInput();
          this.unregisterNodeEvents();
          this.unregisterScreenEvents();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
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
//# sourceMappingURL=4395a52167425db75eb6cd964571cb291270e146.js.map