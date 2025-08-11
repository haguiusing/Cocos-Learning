System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ScrollView, EventHandler, Vec2, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson36_ScrollView;

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
      ScrollView = _cc.ScrollView;
      EventHandler = _cc.EventHandler;
      Vec2 = _cc.Vec2;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "faffb6drj1CyoHAK8wsZuCs", "Lesson36_ScrollView", undefined); // Lesson36_ScrollView.ts


      __checkObsolete__(['_decorator', 'Component', 'ScrollView', 'EventHandler', 'Vec2', 'Vec3', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson36_ScrollView
       * 演示 Cocos Creator 3.8 ScrollView 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson36_ScrollView", Lesson36_ScrollView = (_dec = ccclass('Lesson36_ScrollView'), _dec2 = property({
        type: ScrollView
      }), _dec(_class = (_class2 = class Lesson36_ScrollView extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取 ScrollView 组件 ========================= */
          // #region 获取 ScrollView
          _initializerDefineProperty(this, "scrollView", _descriptor, this);
        }

        /** 运行时获取或动态创建 ScrollView */
        getOrCreateScrollView() {
          var _this$scrollView;

          let sv = (_this$scrollView = this.scrollView) != null ? _this$scrollView : this.getComponent(ScrollView);

          if (!sv) {
            sv = this.addComponent(ScrollView);
            log('动态添加 ScrollView 组件');
          }

          return sv;
        } // #endregion

        /* ========================= 2. 基础开关设置 ========================= */
        // #region 基础开关


        toggleBasicSettings() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 开启/关闭 垂直滚动

          sv.vertical = true; // 开启/关闭 水平滚动

          sv.horizontal = false; // 开启/关闭 弹性回弹

          sv.elastic = true; // 开启/关闭 惯性滚动

          sv.inertia = true; // 设置惯性刹车系数 0~1，0 永不停止，1 立即停下

          sv.brake = 0.5; // 回弹时长

          sv.bounceDuration = 0.5;
        } // #endregion

        /* ========================= 3. 程序化滚动 ========================= */
        // #region 程序化滚动


        scrollToTopDemo() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 0.3 秒滚动到顶部

          sv.scrollToTop(0.3);
        }

        scrollToBottomDemo() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 0.3 秒滚动到底部

          sv.scrollToBottom(0.3);
        }

        scrollToOffsetDemo() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 滚动到指定偏移（像素）

          sv.scrollToOffset(new Vec2(0, 100), 0.2);
        }

        scrollToPercentDemo() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 滚动到垂直 50% 位置

          sv.scrollToPercentVertical(0.5, 0.2);
        } // #endregion

        /* ========================= 4. 获取滚动信息 ========================= */
        // #region 滚动信息


        logScrollInfo() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return;
          const offset = sv.getScrollOffset();
          const maxOffset = sv.getMaxScrollOffset();
          log(`当前偏移: ${offset}`);
          log(`最大偏移: ${maxOffset}`);
          log(`是否正在拖拽: ${sv.isScrolling()}`);
          log(`是否惯性滚动: ${sv.isAutoScrolling()}`);
        } // #endregion

        /* ========================= 5. 停止滚动 ========================= */
        // #region 停止滚动


        stopScrolling() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return;
          sv.stopAutoScroll();
          log('已强制停止滚动');
        } // #endregion

        /* ========================= 6. 事件监听 ========================= */
        // #region 事件监听


        addScrollEvents() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return; // 方式 1：使用 ScrollView 自带回调

          sv.scrollEvents = [];
          const handler = new EventHandler();
          handler.target = this.node;
          handler.component = 'Lesson36_ScrollView';
          handler.handler = 'onScrollEvent';
          sv.scrollEvents.push(handler);
        }

        onScrollEvent(scrollView, eventType, customEventData) {
          log(`ScrollView 事件: ${eventType}`);
        } // 方式 2：直接监听节点事件


        addNodeEvents() {
          const sv = this.getOrCreateScrollView();
          if (!sv) return;
          sv.node.on(ScrollView.EventType.SCROLL_TO_TOP, () => log('滚动到顶部'));
          sv.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, () => log('滚动到底部'));
          sv.node.on(ScrollView.EventType.SCROLLING, () => log('正在滚动'));
        } // #endregion

        /* ========================= 7. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.toggleBasicSettings();
          this.addScrollEvents();
          this.addNodeEvents();
        }

        start() {
          // 演示：3 秒后滚动到底部
          this.scheduleOnce(() => this.scrollToBottomDemo(), 3);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
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
//# sourceMappingURL=4c20901b13ae02c58c8b215b19a9839aeb483194.js.map