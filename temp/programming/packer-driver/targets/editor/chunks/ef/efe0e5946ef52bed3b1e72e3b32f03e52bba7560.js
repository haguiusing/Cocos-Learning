System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Camera, geometry, PhysicsSystem, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson14_;

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
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Camera = _cc.Camera;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41bfd7aw/xEZ60IqnkTCmcr", "Lesson14_", undefined); // Lesson14_.ts


      __checkObsolete__(['_decorator', 'Component', 'input', 'Input', 'EventTouch', 'EventKeyboard', 'KeyCode', 'EventAcceleration', 'Camera', 'geometry', 'PhysicsSystem', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 输入事件系统示例：触摸、键盘、重力感应、3D 射线检测
       * 核心类：Lesson14_
       */

      _export("Lesson14_", Lesson14_ = (_dec = ccclass('Lesson14_'), _dec2 = property(Camera), _dec3 = property(Node), _dec(_class = (_class2 = class Lesson14_ extends Component {
        constructor(...args) {
          super(...args);

          //#endregion

          /* ------------------ 4. 3D 射线检测（触摸） ------------------ */
          //#region 3D Raycast
          _initializerDefineProperty(this, "cameraCom", _descriptor, this);

          _initializerDefineProperty(this, "targetNode", _descriptor2, this);

          this._ray = new geometry.Ray();
        }

        /* ------------------ 1. 触摸事件 ------------------ */
        //#region Touch
        registerTouch() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this); // 触摸开始

          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this); // 触摸移动

          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this); // 触摸结束

          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this); // 触摸取消
        }

        onTouchStart(event) {
          console.log('[TouchStart]', event.getLocation());
        }

        onTouchMove(event) {
          console.log('[TouchMove] ', event.getUILocation());
        }

        onTouchEnd(event) {
          console.log('[TouchEnd]  ', event.getLocation());
        }

        onTouchCancel(event) {
          console.log('[TouchCancel]');
        }

        unregisterTouch() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        } //#endregion

        /* ------------------ 2. 键盘事件 ------------------ */
        //#region Keyboard


        registerKeyboard() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this); // 键盘按下

          input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this); // 键盘长按

          input.on(Input.EventType.KEY_UP, this.onKeyUp, this); // 键盘松开
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              console.log('[KeyDown] A');
              break;

            case KeyCode.SPACE:
              console.log('[KeyDown] Space');
              break;
          }
        }

        onKeyPressing(event) {
          if (event.keyCode === KeyCode.KEY_S) {
            console.log('[KeyPressing] S');
          }
        }

        onKeyUp(event) {
          if (event.keyCode === KeyCode.KEY_A) {
            console.log('[KeyUp] A');
          }
        }

        unregisterKeyboard() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        } //#endregion

        /* ------------------ 3. 重力感应事件 ------------------ */
        //#region DeviceMotion


        registerDeviceMotion() {
          input.setAccelerometerEnabled(true); // 开启重力感应

          input.on(Input.EventType.DEVICEMOTION, this.onDeviceMotion, this); // 监听重力感应事件
        }

        onDeviceMotion(event) {
          console.log('[DeviceMotion]', event.acc.x.toFixed(2), event.acc.y.toFixed(2));
        }

        unregisterDeviceMotion() {
          input.off(Input.EventType.DEVICEMOTION, this.onDeviceMotion, this);
        }

        registerRaycast() {
          input.on(Input.EventType.TOUCH_START, this.on3DTouch, this); // 注册 3D 射线检测触摸事件
        }

        on3DTouch(event) {
          if (!this.cameraCom || !this.targetNode) return;
          const touch = event.touch;
          this.cameraCom.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

          if (PhysicsSystem.instance.raycast(this._ray)) {
            const results = PhysicsSystem.instance.raycastResults;

            for (const hit of results) {
              if (hit.collider.node === this.targetNode) {
                console.log('[Raycast] Hit target node!');
                return;
              }
            }

            console.log('[Raycast] Missed target node.');
          } else {
            console.log('[Raycast] No hit.');
          }
        }

        unregisterRaycast() {
          input.off(Input.EventType.TOUCH_START, this.on3DTouch, this);
        } //#endregion

        /* ------------------ 5. 生命周期 ------------------ */
        //#region Lifecycle


        onEnable() {
          this.registerTouch();
          this.registerKeyboard();
          this.registerDeviceMotion();
          this.registerRaycast();
        }

        onDisable() {
          this.unregisterTouch();
          this.unregisterKeyboard();
          this.unregisterDeviceMotion();
          this.unregisterRaycast();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraCom", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
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
//# sourceMappingURL=efe0e5946ef52bed3b1e72e3b32f03e52bba7560.js.map