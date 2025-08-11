System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UICoordinateTracker, Node, EventHandler, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson47_UICoordinateTracker;

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
      UICoordinateTracker = _cc.UICoordinateTracker;
      Node = _cc.Node;
      EventHandler = _cc.EventHandler;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfa6fd2qDRGL4PrEkcfmZbo", "Lesson47_UICoordinateTracker", undefined); // Lesson47_UICoordinateTracker.ts


      __checkObsolete__(['_decorator', 'Component', 'UICoordinateTracker', 'Node', 'Vec3', 'EventHandler', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson47_UICoordinateTracker
       * 演示 Cocos Creator 3.8 UICoordinateTracker 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson47_UICoordinateTracker", Lesson47_UICoordinateTracker = (_dec = ccclass('Lesson47_UICoordinateTracker'), _dec2 = property({
        type: UICoordinateTracker
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class Lesson47_UICoordinateTracker extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 UICoordinateTracker 组件 ========================= */
          // #region 获取/创建 UICoordinateTracker
          _initializerDefineProperty(this, "uiCoordinateTracker", _descriptor, this);

          // #endregion

          /* ========================= 4. 设置目标节点 ========================= */
          // #region 设置目标节点
          _initializerDefineProperty(this, "targetNode", _descriptor2, this);
        }

        /** 运行时动态创建或获取 UICoordinateTracker 组件 */
        getOrCreateUICoordinateTracker() {
          var _this$uiCoordinateTra;

          let uct = (_this$uiCoordinateTra = this.uiCoordinateTracker) != null ? _this$uiCoordinateTra : this.getComponent(UICoordinateTracker);

          if (!uct) {
            uct = this.addComponent(UICoordinateTracker);
            log('动态添加 UICoordinateTracker 组件');
          }

          return uct;
        } // #endregion

        /* ========================= 2. 设置距离相机的显示距离 ========================= */
        // #region 设置显示距离


        setDistance(value) {
          const uct = this.getOrCreateUICoordinateTracker();
          if (!uct) return;
          uct.distance = value;
          log(`设置距离相机的显示距离为: ${value}`);
        } // #endregion

        /* ========================= 3. 添加映射数据事件 ========================= */
        // #region 添加映射数据事件


        addSyncEvent() {
          const uct = this.getOrCreateUICoordinateTracker();
          if (!uct) return;
          const handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'Lesson47_UICoordinateTracker';
          handler.handler = 'onCoordinateMapped';
          uct.syncEvents.push(handler);
        }

        onCoordinateMapped(localCoord, distanceRatio) {
          this.targetNode.setPosition(localCoord); //this.targetNode.setScale(distanceRatio, distanceRatio, 1);

          log(`映射后的本地坐标: (${localCoord.x}, ${localCoord.y}, ${localCoord.z}), 距离相机比例: ${distanceRatio}`);
        }

        setTarget() {
          const uct = this.getOrCreateUICoordinateTracker();
          if (!uct || !this.targetNode) return;
          uct.target = this.targetNode;
          log(`目标节点已设置为: ${this.targetNode.name}`);
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setDistance(2); // 设置距离相机的显示距离

          this.addSyncEvent(); // 添加映射数据事件

          this.setTarget(); // 设置目标节点
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiCoordinateTracker", [_dec2], {
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
//# sourceMappingURL=47f609fb2c1f504a0c381441067ac68b96ea2671.js.map