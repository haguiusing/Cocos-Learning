System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layout, Prefab, instantiate, Size, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson34_Layout;

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
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Size = _cc.Size;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b41dlRaHxC6JeRDPw7FJ2K", "Lesson34_Layout", undefined); // Lesson34_Layout.ts


      __checkObsolete__(['_decorator', 'Component', 'Layout', 'Node', 'Prefab', 'instantiate', 'Size', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson34_Layout
       * 演示 Cocos Creator 3.8 Layout 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson34_Layout", Lesson34_Layout = (_dec = ccclass('Lesson34_Layout'), _dec2 = property({
        type: Layout
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Lesson34_Layout extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 Layout 组件 ========================= */
          // #region 获取/创建 Layout
          _initializerDefineProperty(this, "layout", _descriptor, this);

          // #endregion

          /* ========================= 5. 动态添加子节点并立即刷新 ========================= */
          // #region 动态添加子节点
          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);
        }

        /** 运行时动态创建或获取 Layout 组件 */
        getOrCreateLayout() {
          var _this$layout;

          let lt = (_this$layout = this.layout) != null ? _this$layout : this.getComponent(Layout);

          if (!lt) {
            lt = this.addComponent(Layout);
            log('动态添加 Layout 组件');
          }

          return lt;
        } // #endregion

        /* ========================= 2. 水平布局示例 ========================= */
        // #region 水平布局


        createHorizontalLayout() {
          const lt = this.getOrCreateLayout();
          if (!lt) return;
          lt.type = Layout.Type.HORIZONTAL; // 水平排列

          lt.resizeMode = Layout.ResizeMode.CONTAINER; // 容器自适应子节点

          lt.spacingX = 20; // 水平间距

          lt.paddingLeft = 10;
          lt.paddingRight = 10; // 排列方向

          lt.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT;
        } // #endregion

        /* ========================= 3. 垂直布局示例 ========================= */
        // #region 垂直布局


        createVerticalLayout() {
          const lt = this.getOrCreateLayout();
          if (!lt) return;
          lt.type = Layout.Type.VERTICAL; // 垂直排列

          lt.resizeMode = Layout.ResizeMode.CONTAINER;
          lt.spacingY = 15; // 垂直间距

          lt.paddingTop = 10;
          lt.paddingBottom = 10; // 排列方向

          lt.verticalDirection = Layout.VerticalDirection.TOP_TO_BOTTOM;
        } // #endregion

        /* ========================= 4. 网格布局示例 ========================= */
        // #region 网格布局


        createGridLayout() {
          const lt = this.getOrCreateLayout();
          if (!lt) return;
          lt.type = Layout.Type.GRID;
          lt.resizeMode = Layout.ResizeMode.CONTAINER;
          lt.startAxis = Layout.AxisDirection.HORIZONTAL; // 先行后列

          lt.spacingX = 20;
          lt.spacingY = 20;
          lt.cellSize = new Size(100, 100); // 每个格子大小
          // 约束：固定列数

          lt.constraint = Layout.Constraint.FIXED_COL;
          lt.constraintNum = 3;
        }

        addChildAndRefresh(count = 5) {
          const lt = this.getOrCreateLayout();
          if (!lt || !this.itemPrefab) return;

          for (let i = 0; i < count; ++i) {
            const item = instantiate(this.itemPrefab);
            item.name = `Item${i}`;
            this.node.addChild(item);
          } // 立即更新布局，避免等待下一帧


          lt.updateLayout(true);
        } // #endregion

        /* ========================= 6. 运行时动态调整间距与边距 ========================= */
        // #region 动态调整边距/间距


        setSpacingAndPadding(spacing, padding) {
          const lt = this.getOrCreateLayout();
          if (!lt) return; // 统一设置四个方向的内边距

          lt.padding = padding; // 根据布局类型设置间距

          if (lt.type === Layout.Type.HORIZONTAL) {
            lt.spacingX = spacing;
          } else if (lt.type === Layout.Type.VERTICAL) {
            lt.spacingY = spacing;
          } else if (lt.type === Layout.Type.GRID) {
            lt.spacingX = lt.spacingY = spacing;
          }

          lt.updateLayout(true);
        } // #endregion

        /* ========================= 7. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 初始化布局
          this.createHorizontalLayout();
        }

        start() {
          // 演示：启动后动态添加 3 个节点
          this.scheduleOnce(() => this.addChildAndRefresh(3), 1);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
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
//# sourceMappingURL=9af6dde59f2c37910c6ecffebd788c69e3304b6f.js.map