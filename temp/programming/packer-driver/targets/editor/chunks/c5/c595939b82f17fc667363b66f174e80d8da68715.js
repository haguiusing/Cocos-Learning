System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UIMeshRenderer, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson46_UIMeshRenderer;

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
      UIMeshRenderer = _cc.UIMeshRenderer;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b183dxIaDtGobT6JJo4QnpL", "Lesson46_UIMeshRenderer", undefined); // Lesson46_UIMeshRenderer.ts


      __checkObsolete__(['_decorator', 'Component', 'UIMeshRenderer', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson46_UIMeshRenderer
       * 演示 Cocos Creator 3.8 UIMeshRenderer 组件的常见 API 用法
       * 注意：该组件已被标记为不推荐使用，请尽量使用 Render Texture 代替
       */

      _export("Lesson46_UIMeshRenderer", Lesson46_UIMeshRenderer = (_dec = ccclass('Lesson46_UIMeshRenderer'), _dec2 = property({
        type: UIMeshRenderer
      }), _dec(_class = (_class2 = class Lesson46_UIMeshRenderer extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 UIMeshRenderer 组件 ========================= */
          // #region 获取/创建 UIMeshRenderer
          _initializerDefineProperty(this, "uiMeshRenderer", _descriptor, this);
        }

        /** 运行时动态创建或获取 UIMeshRenderer 组件 */
        getOrCreateUIMeshRenderer() {
          var _this$uiMeshRenderer;

          let umr = (_this$uiMeshRenderer = this.uiMeshRenderer) != null ? _this$uiMeshRenderer : this.getComponent(UIMeshRenderer);

          if (!umr) {
            umr = this.addComponent(UIMeshRenderer);
            log('动态添加 UIMeshRenderer 组件');
          }

          return umr;
        } // #endregion

        /* ========================= 2. 设置模型组件 ========================= */
        // #region 设置模型组件


        setModelComponent() {
          const umr = this.getOrCreateUIMeshRenderer();
          if (!umr) return; // 假设节点上已经有一个模型组件

          const modelComponent = this.node.getComponent('MeshRenderer');

          if (modelComponent) {
            //umr.modelComponent = modelComponent;
            log('模型组件已设置');
          } else {
            log('未找到模型组件');
          }
        } // #endregion

        /* ========================= 3. 设置模板阶段 ========================= */
        // #region 设置模板阶段


        setStencilStage() {
          const umr = this.getOrCreateUIMeshRenderer();
          if (!umr) return; // 设置模板阶段（示例值）

          umr.stencilStage = 1;
          log('模板阶段已设置');
        } // #endregion

        /* ========================= 4. 渲染相关方法（不推荐手动调用） ========================= */
        // #region 渲染相关方法

        /** 调用后置渲染数据组装程序（不推荐手动调用） */


        callPostUpdateAssembler() {
          const umr = this.getOrCreateUIMeshRenderer();
          if (!umr) return; // 注意：不推荐手动调用此方法，除非你理解整个流程

          umr.postUpdateAssembler(null);
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setModelComponent(); // 设置模型组件

          this.setStencilStage(); // 设置模板阶段
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiMeshRenderer", [_dec2], {
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
//# sourceMappingURL=c595939b82f17fc667363b66f174e80d8da68715.js.map