System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Canvas, view, log, find, ResolutionPolicy, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson30_Canvas;

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
      Canvas = _cc.Canvas;
      view = _cc.view;
      log = _cc.log;
      find = _cc.find;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65dcbu8wJRLiZaG/1BO6vQM", "Lesson30_Canvas", undefined); // Lesson30_Canvas.ts


      __checkObsolete__(['_decorator', 'Component', 'Canvas', 'Node', 'view', 'log', 'find', 'ResolutionPolicy']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 演示 Cocos Creator 3.8 Canvas 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson30_Canvas", Lesson30_Canvas = (_dec = ccclass('Lesson30_Canvas'), _dec2 = property({
        type: Canvas
      }), _dec(_class = (_class2 = class Lesson30_Canvas extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取 Canvas 组件 ========================= */
          // #region 获取 Canvas 组件
          _initializerDefineProperty(this, "canvas", _descriptor, this);
        }

        /** 方式1：通过 Inspector 拖拽绑定 */
        getCanvasByInspector() {
          if (this.canvas) {
            log('通过 Inspector 获取 Canvas 成功', this.canvas.name);
          }
        }
        /** 方式2：运行时动态查找 */


        getCanvasByCode() {
          // 方法1：查找当前节点或其父节点
          var canvas = this.node.getComponent(Canvas); // 方法2：全局查找（推荐）

          var canvasNode = find('Canvas');
          var canvasComp = canvasNode == null ? void 0 : canvasNode.getComponent(Canvas);

          if (canvasComp) {
            log('通过代码获取 Canvas 成功', canvasComp.name);
          }
        } // #endregion

        /* ========================= 2. 屏幕适配相关 ========================= */
        // #region 屏幕适配


        adjustScreenFit() {
          var canvas = this.getCanvasComponent();
          if (!canvas) return; // 获取当前屏幕分辨率

          var visibleSize = view.getVisibleSize();
          log('屏幕可见尺寸:', visibleSize); // 设置适配策略（示例）

          view.setDesignResolutionSize(1080, 1920, ResolutionPolicy.FIXED_WIDTH);
          log('设计分辨率已调整为 1080x1920'); // 注意：Canvas 的 alignCanvasWithScreen 属性已废弃
          // 应通过 Canvas 组件的 cameraComponent 或 RenderRoot2D 设置
        } // #endregion

        /* ========================= 3. 渲染模式控制 ========================= */
        // #region 渲染模式


        setRenderMode() {
          var canvas = this.getCanvasComponent();
          if (!canvas) return; // 获取渲染模式（已废弃，仅作演示）
          // 推荐使用 camera 的 priority 控制渲染顺序

          var camera = canvas.cameraComponent;

          if (camera) {
            log('当前相机优先级:', camera.priority); // 设置相机优先级（值越大越后渲染）

            camera.priority = 100;
          }
        } // #endregion

        /* ========================= 4. 生命周期方法 ========================= */
        // #region 生命周期


        onLoad() {
          this.getCanvasByInspector();
        }

        start() {
          this.getCanvasByCode();
          this.adjustScreenFit();
          this.setRenderMode();
        } // #endregion

        /* ========================= 5. 工具方法 ========================= */
        // #region 工具方法


        getCanvasComponent() {
          var _find;

          return this.canvas || this.node.getComponent(Canvas) || ((_find = find('Canvas')) == null ? void 0 : _find.getComponent(Canvas));
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
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
//# sourceMappingURL=02558fc93e6efaef5592e947cd92f35cc77078eb.js.map