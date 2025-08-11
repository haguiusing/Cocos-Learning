System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Event, macro, UITransform, Sprite, Color, Vec3, Size, MyEvent, _dec, _class2, _crd, ccclass, property, Lesson15_;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Event = _cc.Event;
      macro = _cc.macro;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
      Size = _cc.Size;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3805b47FO1OP5V+OxrVYKu4", "Lesson15_", undefined); // Lesson15_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Event', 'macro', 'UITransform', 'Sprite', 'Color', 'Vec3', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);
      /* -------------------------------------------------------------------------- */

      /*                               自定义事件类                                 */

      /* -------------------------------------------------------------------------- */
      //#region 自定义事件

      MyEvent = class MyEvent extends Event {
        constructor(name, bubbles, detail) {
          super(name, bubbles);
          this.detail = null;
          this.detail = detail;
        }

      }; //#endregion

      /* -------------------------------------------------------------------------- */

      /*                           节点事件系统示范脚本                             */

      /* -------------------------------------------------------------------------- */

      _export("Lesson15_", Lesson15_ = (_dec = ccclass('Lesson15_'), _dec(_class2 = class Lesson15_ extends Component {
        /* ------------------------------ 生命周期 ------------------------------ */
        //#region 生命周期
        onLoad() {
          this.registerNodeEvents();
          this.registerCustomEvents();
        }

        onDestroy() {
          this.unregisterNodeEvents();
          this.unregisterCustomEvents();
        }

        start() {
          this.demoDispatch();
          this.demoMultiTouch();
          this.demoPauseResume();
        } //#endregion

        /* ------------------------ 1. 节点鼠标 & 触摸事件 ------------------------ */
        //#region 鼠标/触摸事件


        registerNodeEvents() {
          // 鼠标
          this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseDown, this); // 注册鼠标按下事件

          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this); // 注册鼠标进入事件

          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this); // 注册鼠标离开事件

          this.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this); // 注册鼠标滚轮事件
          // 触摸（支持冒泡 / 捕获）

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, false); // 注册触摸开始事件，冒泡阶段

          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this, false); // 注册触摸结束事件
        }

        unregisterNodeEvents() {
          this.node.targetOff(this);
        }

        onMouseDown() {
          console.log('[Mouse] Down');
        }

        onMouseEnter() {
          console.log('[Mouse] Enter');
        }

        onMouseLeave() {
          console.log('[Mouse] Leave');
        }

        onMouseWheel() {
          console.log('[Mouse] Wheel');
        }

        onTouchStart(event) {
          var _event$currentTarget;

          console.log('[Touch] Start', (_event$currentTarget = event.currentTarget) == null ? void 0 : _event$currentTarget.name); // 示例：阻止事件冒泡
          // event.propagationStopped = true;
        }

        onTouchEnd(event) {
          var _event$currentTarget2;

          console.log('[Touch] End', (_event$currentTarget2 = event.currentTarget) == null ? void 0 : _event$currentTarget2.name);
        } //#endregion

        /* ------------------------ 2. 捕获阶段事件注册 ------------------------ */
        //#region 捕获阶段示例


        registerCapture() {
          this.node.on(Node.EventType.TOUCH_START, this.onCaptureTouch, this, true); // 注册触摸开始事件，捕获阶段
        }

        onCaptureTouch() {
          console.log('[Capture] Touch Start on', this.node.name);
        } //#endregion

        /* ------------------------ 3. 自定义事件派发 & 冒泡 -------------------- */
        //#region 自定义事件


        registerCustomEvents() {
          this.node.on('foobar', this.onFoobar, this); // 注册自定义事件 foobar
        }

        unregisterCustomEvents() {
          this.node.off('foobar', this.onFoobar, this);
        }

        onFoobar(event) {
          console.log(`[Custom] ${event.type} detail=${event.detail} on ${this.node.name}`); // 如果要阻止继续冒泡
          // event.propagationStopped = true;
        }
        /** 向自身派发自定义事件并允许冒泡 */


        demoDispatch() {
          const evt = new MyEvent('foobar', true, 'detail info'); // 创建自定义事件 foobar，允许冒泡

          this.node.dispatchEvent(evt);
        } //#endregion

        /* ------------------------ 4. 节点内置事件示例 ------------------------ */
        //#region 节点内置事件


        registerNodeBuiltins() {
          // 2D 节点常用事件
          this.node.on(Node.EventType.SIZE_CHANGED, this.onSizeChanged, this); // 注册尺寸变化事件

          this.node.on(Node.EventType.COLOR_CHANGED, this.onColorChanged, this); // 注册颜色变化事件
          // 3D 节点常用事件

          this.node.on(Node.EventType.TRANSFORM_CHANGED, this.onTransformChanged, this); // 注册变换变化事件
        }

        onSizeChanged() {
          console.log('[Node] Size changed');
        }

        onColorChanged() {
          console.log('[Node] Color changed');
        }

        onTransformChanged() {
          console.log('[Node] Transform changed');
        }
        /** 演示触发内置事件 */


        demoTriggerBuiltins() {
          // 修改属性触发 SIZE_CHANGED
          const ui = this.getComponent(UITransform);
          if (ui) ui.contentSize = new Size(200, 200); // 修改颜色触发 COLOR_CHANGED

          const sprite = this.getComponent(Sprite);
          if (sprite) sprite.color = Color.RED; // 修改位置触发 TRANSFORM_CHANGED

          this.node.position = new Vec3(100, 100, 0);
        } //#endregion

        /* ------------------------ 5. 多点触摸开关 --------------------------- */
        //#region 多点触摸


        demoMultiTouch() {
          // 关闭多点触摸（项目->项目设置->Macro Config 也可配置）
          // macro.ENABLE_MULTI_TOUCH = false;
          console.log('[MultiTouch] ENABLE_MULTI_TOUCH =', macro.ENABLE_MULTI_TOUCH);
        } //#endregion

        /* ------------------------ 6. 暂停/恢复节点系统事件 ------------------- */
        //#region 暂停/恢复


        demoPauseResume() {
          // 暂停本节点及子节点所有系统事件
          this.node.pauseSystemEvents(true); // 2 秒后恢复

          this.scheduleOnce(() => {
            this.node.resumeSystemEvents(true);
            console.log('[Node] System events resumed');
          }, 2);
        } //#endregion


      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f398307c18db8fab67f579296238ce46c6c9f04.js.map