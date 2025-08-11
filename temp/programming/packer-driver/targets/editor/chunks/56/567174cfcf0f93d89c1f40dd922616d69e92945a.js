System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Mask, SpriteFrame, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson21_;

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
      Mask = _cc.Mask;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71c1cF2QfBMzKaHocU31yJr", "Lesson21_", undefined); // Lesson21_.ts


      __checkObsolete__(['_decorator', 'Component', 'Mask', 'SpriteFrame', 'Color', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Mask（遮罩）组件 API 全功能演示
       * 核心类：Lesson21_
       */

      _export("Lesson21_", Lesson21_ = (_dec = ccclass('Lesson21_'), _dec2 = property(Mask), _dec3 = property(SpriteFrame), _dec4 = property(Label), _dec(_class = (_class2 = class Lesson21_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 组件声明与获取 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "mask", _descriptor, this);

          _initializerDefineProperty(this, "maskSprite", _descriptor2, this);

          _initializerDefineProperty(this, "contentLabel", _descriptor3, this);
        }

        // 用于被遮罩的子文本
        //#endregion

        /* ------------------ 2. 遮罩类型设置 ------------------ */
        //#region 2. 类型
        setupMaskType() {
          // 矩形、圆形、图片、椭圆
          this.mask.type = Mask.Type.GRAPHICS_ELLIPSE; // GRAPHICS_RECT | GRAPHICS_ELLIPSE | GRAPHICS_STENCIL | SPRITE_STENCIL
        } //#endregion

        /* ------------------ 3. 椭圆细分（仅椭圆有效） ------------------ */
        //#region 3. 椭圆细分


        setupEllipse() {
          if (this.mask.type === Mask.Type.GRAPHICS_ELLIPSE) {
            this.mask.segments = 64; // 椭圆曲线细分数，越高越圆
          }
        } //#endregion

        /* ------------------ 4. 图片遮罩 ------------------ */
        //#region 4. 图片遮罩


        setupSpriteMask() {
          if (this.mask.type === Mask.Type.SPRITE_STENCIL) {
            this.mask.spriteFrame = this.maskSprite; // 指定模板贴图

            this.mask.alphaThreshold = 0.1; // Alpha 阈值 0~1
          }
        } //#endregion

        /* ------------------ 5. 反转遮罩 ------------------ */
        //#region 5. 反转


        toggleInverted() {
          // true 时显示区域反转
          this.mask.inverted = !this.mask.inverted;
        } //#endregion

        /* ------------------ 6. 动态内容演示 ------------------ */
        //#region 6. 动态内容


        demoDynamicContent() {
          if (this.contentLabel) {
            this.contentLabel.string = '被遮罩的文字，超出部分将被裁剪'; // 让文字滚动以观察遮罩效果

            this.schedule(() => {
              const offset = this.contentLabel.node.position.x;
              this.contentLabel.node.setPosition(offset + 1, 0, 0);
            }, 0.05);
          }
        } //#endregion

        /* ------------------ 7. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          this.setupMaskType();
          this.setupEllipse();
          this.setupSpriteMask();
          this.demoDynamicContent();
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec4], {
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
//# sourceMappingURL=567174cfcf0f93d89c1f40dd922616d69e92945a.js.map