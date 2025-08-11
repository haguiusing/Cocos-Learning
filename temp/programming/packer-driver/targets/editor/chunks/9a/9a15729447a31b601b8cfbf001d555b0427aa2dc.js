System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, Sprite, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson38_ProgressBar;

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
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83696sHBgxCMKV6Tvug8fAo", "Lesson38_ProgressBar", undefined); // Lesson38_ProgressBar.ts


      __checkObsolete__(['_decorator', 'Component', 'ProgressBar', 'Sprite', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson38_ProgressBar
       * 演示 Cocos Creator 3.8 ProgressBar 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson38_ProgressBar", Lesson38_ProgressBar = (_dec = ccclass('Lesson38_ProgressBar'), _dec2 = property({
        type: ProgressBar
      }), _dec3 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class Lesson38_ProgressBar extends Component {
        constructor(...args) {
          super(...args);

          /* ========================= 1. 获取/创建 ProgressBar 组件 ========================= */
          // #region 获取/创建 ProgressBar
          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          // #endregion

          /* ========================= 5. 设置/替换 barSprite ========================= */
          // #region 进度条 Sprite
          _initializerDefineProperty(this, "barSprite", _descriptor2, this);
        }

        /** 运行时获取或动态创建 ProgressBar */
        getOrCreateProgressBar() {
          var _this$progressBar;

          let pb = (_this$progressBar = this.progressBar) != null ? _this$progressBar : this.getComponent(ProgressBar);

          if (!pb) {
            pb = this.addComponent(ProgressBar);
            log('动态添加 ProgressBar 组件');
          }

          return pb;
        } // #endregion

        /* ========================= 2. 设置进度值 ========================= */
        // #region 设置进度值


        setProgress(value) {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return; // 限定在 0~1 区间

          pb.progress = Math.max(0, Math.min(1, value));
          log(`当前进度: ${(pb.progress * 100).toFixed(1)}%`);
        }
        /** 从 0 递增到 1 的示例 */


        simulateLoading(totalTime = 3) {
          let elapsed = 0;
          this.schedule(dt => {
            elapsed += dt;
            const p = Math.min(1, elapsed / totalTime);
            this.setProgress(p);
            if (p >= 1) this.unscheduleAllCallbacks();
          });
        } // #endregion

        /* ========================= 3. 设置方向与模式 ========================= */
        // #region 方向与模式


        setHorizontalMode() {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          pb.mode = ProgressBar.Mode.HORIZONTAL;
          pb.reverse = false; // 从左到右
        }

        setVerticalMode(reverse = false) {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          pb.mode = ProgressBar.Mode.VERTICAL;
          pb.reverse = reverse; // 默认从上到下，reverse=true 则从下到上
        }

        setRadialMode() {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          pb.mode = ProgressBar.Mode.FILLED; // 径向/环形进度
        } // #endregion

        /* ========================= 4. 设置进度条长度 ========================= */
        // #region 总长度


        setTotalLength(len) {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          pb.totalLength = len; // 像素长度
        }

        setBarSprite() {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          if (this.barSprite) pb.barSprite = this.barSprite;
        } // #endregion

        /* ========================= 6. 反转方向 ========================= */
        // #region 反转


        toggleReverse() {
          const pb = this.getOrCreateProgressBar();
          if (!pb) return;
          pb.reverse = !pb.reverse;
          log(`reverse = ${pb.reverse}`);
        } // #endregion

        /* ========================= 7. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          this.setHorizontalMode();
          this.setTotalLength(200);
          this.simulateLoading(2);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "barSprite", [_dec3], {
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
//# sourceMappingURL=9a15729447a31b601b8cfbf001d555b0427aa2dc.js.map