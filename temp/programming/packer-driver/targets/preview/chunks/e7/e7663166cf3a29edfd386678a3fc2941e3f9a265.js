System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PageViewIndicator, PageView, Node, log, Size, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson45_PageViewIndicator;

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
      PageViewIndicator = _cc.PageViewIndicator;
      PageView = _cc.PageView;
      Node = _cc.Node;
      log = _cc.log;
      Size = _cc.Size;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8134mVIl9CLLbAK2T36ayG", "Lesson45_PageViewIndicator", undefined); // Lesson45_PageViewIndicator.ts


      __checkObsolete__(['_decorator', 'Component', 'PageViewIndicator', 'PageView', 'Node', 'log', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson45_PageViewIndicator
       * 演示 Cocos Creator 3.8 PageViewIndicator 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson45_PageViewIndicator", Lesson45_PageViewIndicator = (_dec = ccclass('Lesson45_PageViewIndicator'), _dec2 = property({
        type: PageViewIndicator
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: PageView
      }), _dec(_class = (_class2 = class Lesson45_PageViewIndicator extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 PageViewIndicator 组件 ========================= */
          // #region 获取/创建 PageViewIndicator
          _initializerDefineProperty(this, "pageViewIndicator", _descriptor, this);

          // #endregion

          /* ========================= 3. 设置指示器样式 ========================= */
          // #region 设置指示器样式
          _initializerDefineProperty(this, "indicatorNodePrefab", _descriptor2, this);

          // #endregion

          /* ========================= 4. 设置页面视图 ========================= */
          // #region 设置页面视图
          _initializerDefineProperty(this, "pageView", _descriptor3, this);
        }

        /** 运行时动态创建或获取 PageViewIndicator 组件 */
        getOrCreatePageViewIndicator() {
          var _this$pageViewIndicat;

          var pvi = (_this$pageViewIndicat = this.pageViewIndicator) != null ? _this$pageViewIndicat : this.getComponent(PageViewIndicator);

          if (!pvi) {
            pvi = this.addComponent(PageViewIndicator);
            log('动态添加 PageViewIndicator 组件');
          }

          return pvi;
        } // #endregion

        /* ========================= 2. 设置指示器方向 ========================= */
        // #region 设置指示器方向


        setHorizontalDirection() {
          var pvi = this.getOrCreatePageViewIndicator();
          if (!pvi) return;
          pvi.direction = PageViewIndicator.Direction.HORIZONTAL;
          log('指示器方向已设置为水平');
        }

        setVerticalDirection() {
          var pvi = this.getOrCreatePageViewIndicator();
          if (!pvi) return;
          pvi.direction = PageViewIndicator.Direction.VERTICAL;
          log('指示器方向已设置为垂直');
        }

        setIndicatorStyle() {//源码是通过创建Node实现，
          //所以无法通过自定义指示器节点的 Prefab 设置IndicatorStyle
          // const pvi = this.getOrCreatePageViewIndicator();
          // if (!pvi || !this.indicatorNodePrefab) return;
          // // 设置指示器节点的 Prefab
          // pvi.indicatorNodePrefab = this.indicatorNodePrefab;
          // log('指示器样式已设置');
        }

        setPageView() {
          var pvi = this.getOrCreatePageViewIndicator();
          if (!pvi || !this.pageView) return;
          pvi.setPageView(this.pageView);
          log('页面视图已设置');
        } // #endregion

        /* ========================= 5. 设置指示器间距与大小 ========================= */
        // #region 设置指示器间距与大小


        setSpacingAndSize(spacing, size) {
          var pvi = this.getOrCreatePageViewIndicator();
          if (!pvi) return;
          pvi.spacing = spacing; // 设置指示器间距

          pvi.cellSize = new Size(size, size); // 设置指示器大小

          log("\u6307\u793A\u5668\u95F4\u8DDD: " + spacing + ", \u5927\u5C0F: " + size);
        } // #endregion

        /* ========================= 6. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setHorizontalDirection(); // 设置为水平方向

          this.setSpacingAndSize(10, 20); // 设置间距为 10，大小为 20

          this.setPageView(); // 关联 PageView
        }

        start() {
          // 演示：3 秒后更新指示器样式
          this.scheduleOnce(() => this.setIndicatorStyle(), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageViewIndicator", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "indicatorNodePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec4], {
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
//# sourceMappingURL=e7663166cf3a29edfd386678a3fc2941e3f9a265.js.map