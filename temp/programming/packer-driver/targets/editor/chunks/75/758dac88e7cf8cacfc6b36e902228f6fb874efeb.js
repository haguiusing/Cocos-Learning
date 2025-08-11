System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Color, Vec2, Font, Overflow, CacheMode, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson20_;

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
      Label = _cc.Label;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      Font = _cc.Font;
      Overflow = _cc.Overflow;
      CacheMode = _cc.CacheMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8f7fNBySpAwavBmaxyKksN", "Lesson20_", undefined); // Lesson20_.ts


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Color', 'Vec2', 'Font', 'Overflow', 'CacheMode']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Label 组件 API 演示脚本（官方文档全功能整合）
       * 核心类：Lesson20_
       */

      _export("Lesson20_", Lesson20_ = (_dec = ccclass('Lesson20_'), _dec2 = property(Label), _dec3 = property(Font), _dec(_class = (_class2 = class Lesson20_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 声明属性 ------------------ */
          //#region 声明属性
          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "ttfAsset", _descriptor2, this);
        }

        //#endregion

        /* ------------------ 2. 基础文本设置 ------------------ */
        //#region 基础文本
        demoBasic() {
          this.label.string = 'Hello Cocos!';
          this.label.fontSize = 48;
          this.label.lineHeight = 56;
        } //#endregion

        /* ------------------ 3. 字体与缓存模式 ------------------ */
        //#region 字体与缓存


        demoFont() {
          // 使用系统字体
          this.label.useSystemFont = true;
          this.label.fontFamily = 'Arial'; // 使用 TTF 字体（需将 ttfAsset 拖到属性检查器）

          if (this.ttfAsset) {
            this.label.font = this.ttfAsset;
            this.label.useSystemFont = false;
          } // 缓存模式（仅系统字体）


          this.label.cacheMode = CacheMode.CHAR; // NONE、BITMAP、CHAR
        } //#endregion

        /* ------------------ 4. 对齐与换行 ------------------ */
        //#region 对齐与换行


        demoAlign() {
          this.label.horizontalAlign = Label.HorizontalAlign.CENTER;
          this.label.verticalAlign = Label.VerticalAlign.CENTER;
          this.label.enableWrapText = true;
        } //#endregion

        /* ------------------ 5. 溢出处理 ------------------ */
        //#region 溢出


        demoOverflow() {
          // NONE / CLAMP / SHRINK / RESIZE_HEIGHT
          this.label.overflow = Overflow.SHRINK;
          console.log('实际渲染字号：', this.label.actualFontSize);
        } //#endregion

        /* ------------------ 6. 样式（描边、阴影、下划线） ------------------ */
        //#region 样式


        demoStyle() {
          // 描边
          this.label.enableOutline = true;
          this.label.outlineColor = Color.BLACK;
          this.label.outlineWidth = 2; // 阴影

          this.label.enableShadow = true;
          this.label.shadowColor = Color.GRAY;
          this.label.shadowOffset = new Vec2(2, -2);
          this.label.shadowBlur = 2; // 下划线

          this.label.isUnderline = true;
          this.label.underlineHeight = 2;
        } //#endregion

        /* ------------------ 7. BMFont 专有间距 ------------------ */
        //#region BMFont 间距


        demoBMFontSpacing() {
          // 仅对 BMFont 生效
          this.label.spacingX = 4;
        } //#endregion

        /* ------------------ 8. 动态更新渲染数据 ------------------ */
        //#region 更新渲染


        updateRender() {
          this.label.updateRenderData(true);
        } //#endregion

        /* ------------------ 9. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          this.demoBasic();
          this.demoFont();
          this.demoAlign();
          this.demoOverflow();
          this.demoStyle();
          this.demoBMFontSpacing();
          this.updateRender();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ttfAsset", [_dec3], {
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
//# sourceMappingURL=758dac88e7cf8cacfc6b36e902228f6fb874efeb.js.map