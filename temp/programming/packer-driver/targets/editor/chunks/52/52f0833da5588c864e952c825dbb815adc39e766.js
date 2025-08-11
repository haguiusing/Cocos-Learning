System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PageView, EventHandler, Node, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson44_PageView;

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
      PageView = _cc.PageView;
      EventHandler = _cc.EventHandler;
      Node = _cc.Node;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "104d6gD7c1FVqysBfT3OlgL", "Lesson44_PageView", undefined); // Lesson44_PageView.ts


      __checkObsolete__(['_decorator', 'Component', 'PageView', 'EventHandler', 'Node', 'Vec3', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson44_PageView
       * 演示 Cocos Creator 3.8 PageView 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson44_PageView", Lesson44_PageView = (_dec = ccclass('Lesson44_PageView'), _dec2 = property({
        type: PageView
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class Lesson44_PageView extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 PageView 组件 ========================= */
          // #region 获取/创建 PageView
          _initializerDefineProperty(this, "pageView", _descriptor, this);

          // #endregion

          /* ========================= 4. 添加/移除页面 ========================= */
          // #region 添加/移除页面
          _initializerDefineProperty(this, "pageNode", _descriptor2, this);
        }

        /** 运行时动态创建或获取 PageView 组件 */
        getOrCreatePageView() {
          var _this$pageView;

          let pv = (_this$pageView = this.pageView) != null ? _this$pageView : this.getComponent(PageView);

          if (!pv) {
            pv = this.addComponent(PageView);
            log('动态添加 PageView 组件');
          }

          return pv;
        } // #endregion

        /* ========================= 2. 设置滚动方向 ========================= */
        // #region 设置滚动方向


        setHorizontalScroll() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.direction = PageView.Direction.HORIZONTAL;
        }

        setVerticalScroll() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.direction = PageView.Direction.VERTICAL;
        } // #endregion

        /* ========================= 3. 设置页面大小模式 ========================= */
        // #region 设置页面大小模式


        setUnifiedSizeMode() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.sizeMode = PageView.SizeMode.Unified;
        }

        setFreeSizeMode() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.sizeMode = PageView.SizeMode.Free;
        }

        addPage() {
          const pv = this.getOrCreatePageView();
          if (!pv || !this.pageNode) return;
          pv.addPage(this.pageNode);
          log('页面已添加');
        }

        removePageAtIndex(index) {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.removePageAtIndex(index);
          log(`移除第 ${index} 页`);
        }

        removeAllPages() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.removeAllPages();
          log('所有页面已移除');
        } // #endregion

        /* ========================= 5. 滚动到指定页面 ========================= */
        // #region 滚动到指定页面


        scrollToPage(index, duration = 0.3) {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.scrollToPage(index, duration);
          log(`滚动到第 ${index} 页，耗时 ${duration} 秒`);
        } // #endregion

        /* ========================= 6. 设置当前页面索引 ========================= */
        // #region 设置当前页面索引


        setCurrentPageIndex(index) {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          pv.setCurrentPageIndex(index);
          log(`当前页面索引已设置为 ${index}`);
        } // #endregion

        /* ========================= 7. 获取当前页面索引 ========================= */
        // #region 获取当前页面索引


        getCurrentPageIndex() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          const index = pv.getCurrentPageIndex();
          log(`当前页面索引: ${index}`);
        } // #endregion

        /* ========================= 8. 事件监听 ========================= */
        // #region 事件监听


        addPageTurningEvent() {
          const pv = this.getOrCreatePageView();
          if (!pv) return;
          const handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'Lesson44_PageView';
          handler.handler = 'onPageTurning';
          pv.pageEvents.push(handler);
        }

        onPageTurning(event, customData) {
          log(`页面翻转事件: 当前索引 ${event.getCurrentPageIndex()}, 自定义数据: ${customData}`);
        } // #endregion

        /* ========================= 9. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setHorizontalScroll(); // 设置为水平滚动

          this.setUnifiedSizeMode(); // 设置为统一大小模式

          this.addPageTurningEvent(); // 添加页面翻转事件
        }

        start() {
          // 演示：3 秒后滚动到第 2 页
          this.scheduleOnce(() => this.scrollToPage(2), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageNode", [_dec3], {
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
//# sourceMappingURL=52f0833da5588c864e952c825dbb815adc39e766.js.map