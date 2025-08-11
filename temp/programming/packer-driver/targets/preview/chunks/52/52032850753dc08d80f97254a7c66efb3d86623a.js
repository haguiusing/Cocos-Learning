System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIStaticBatch, Label, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson24_;

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
      UIStaticBatch = _cc.UIStaticBatch;
      Label = _cc.Label;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65017SxMVZISJXroXxHOOpL", "Lesson24_", undefined); // Lesson24_.ts


      __checkObsolete__(['_decorator', 'Component', 'UIStaticBatch', 'Label', 'Sprite', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * UIStaticBatch 静态合批示例
       * 核心类：Lesson24_
       * 注意：v3.4.1 起官方已不推荐手动使用此组件，未来会移除
       */

      _export("Lesson24_", Lesson24_ = (_dec = ccclass('Lesson24_'), _dec2 = property(UIStaticBatch), _dec(_class = (_class2 = class Lesson24_ extends Component {
        constructor() {
          super(...arguments);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "uiStaticBatch", _descriptor, this);
        }

        //#endregion

        /* ------------------ 2. 收集静态合批数据 ------------------ */
        //#region 2. 收集数据
        collectStaticBatch() {
          // 必须在子节点全部摆放完成后调用一次
          this.uiStaticBatch.markAsDirty();
          console.log('UIStaticBatch 已采集静态数据，后续子节点改动将无效');
        } //#endregion

        /* ------------------ 3. 动态演示：添加精灵后重采 ------------------ */
        //#region 3. 动态演示


        demoReCollect() {
          // 示例：运行时新增一个 Label 作为子节点
          var label = new Node();
          label.parent = this.node;
          var lbl = label.addComponent(Label);
          lbl.string = 'Static'; // 重新采集一次（不推荐频繁调用）

          this.scheduleOnce(() => this.collectStaticBatch(), 0.1);
        } //#endregion

        /* ------------------ 4. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          if (!this.uiStaticBatch) {
            console.warn('请先在编辑器里给根节点添加 UIStaticBatch 组件');
            return;
          }

          this.collectStaticBatch(); // 演示：2 秒后动态添加节点并重采

          this.scheduleOnce(this.demoReCollect, 2);
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiStaticBatch", [_dec2], {
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
//# sourceMappingURL=52032850753dc08d80f97254a7c66efb3d86623a.js.map