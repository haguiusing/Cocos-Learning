System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MotionStreak, Texture2D, Color, resources, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson29_;

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
      MotionStreak = _cc.MotionStreak;
      Texture2D = _cc.Texture2D;
      Color = _cc.Color;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28404ChxzlC6ZLGnQqQiRES", "Lesson29_", undefined); // Lesson29_.ts


      __checkObsolete__(['_decorator', 'Component', 'MotionStreak', 'Texture2D', 'Color', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * MotionStreak（运动拖尾）API 全功能演示
       * 核心类：Lesson29_
       */

      _export("Lesson29_", Lesson29_ = (_dec = ccclass('Lesson29_'), _dec2 = property(MotionStreak), _dec3 = property(Texture2D), _dec(_class = (_class2 = class Lesson29_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "streak", _descriptor, this);

          _initializerDefineProperty(this, "trailTexture", _descriptor2, this);
        }

        //#endregion

        /* ------------------ 2. 基础外观设置 ------------------ */
        //#region 2. 外观设置
        setupAppearance() {
          this.streak.texture = this.trailTexture; // 拖尾贴图

          this.streak.stroke = 32; // 宽度

          this.streak.color = Color.YELLOW; // 颜色
        } //#endregion

        /* ------------------ 3. 拖尾行为参数 ------------------ */
        //#region 3. 行为参数


        setupBehavior() {
          this.streak.fadeTime = 1.5; // 渐隐时间

          this.streak.minSeg = 3; // 最小顶点间距

          this.streak.fastMode = false; // 高精度模式
        } //#endregion

        /* ------------------ 4. 编辑器预览 ------------------ */
        //#region 4. 编辑器预览


        togglePreview() {
          this.streak.preview = !this.streak.preview;
        } //#endregion

        /* ------------------ 5. 动态重置拖尾 ------------------ */
        //#region 5. 重置


        resetTrail() {
          this.streak.reset();
        } //#endregion

        /* ------------------ 6. 运行时动态贴图 ------------------ */
        //#region 6. 动态贴图


        loadTexture(path) {
          resources.load(path, Texture2D, (err, tex) => {
            if (!err) this.streak.texture = tex;
          });
        } //#endregion

        /* ------------------ 7. 生命周期 ------------------ */
        //#region 7. 生命周期


        start() {
          if (!this.streak) return;
          this.setupAppearance();
          this.setupBehavior();
          this.scheduleOnce(() => this.resetTrail(), 2); // 2 秒后重置
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "streak", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "trailTexture", [_dec3], {
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
//# sourceMappingURL=3b6010b1542e246d7e517c31744581e72f6a2456.js.map