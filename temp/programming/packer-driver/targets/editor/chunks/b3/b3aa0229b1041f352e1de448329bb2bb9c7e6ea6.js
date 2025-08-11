System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RichText, SpriteAtlas, Color, CacheMode, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson23_;

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
      RichText = _cc.RichText;
      SpriteAtlas = _cc.SpriteAtlas;
      Color = _cc.Color;
      CacheMode = _cc.CacheMode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd1ac6VZ+VGUJaOVKuRhWZR", "Lesson23_", undefined); // Lesson23_.ts


      __checkObsolete__(['_decorator', 'Component', 'RichText', 'SpriteAtlas', 'Color', 'CacheMode']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * RichText 富文本组件 API 全功能演示
       * 核心类：Lesson23_
       */

      _export("Lesson23_", Lesson23_ = (_dec = ccclass('Lesson23_'), _dec2 = property(RichText), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = class Lesson23_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "richText", _descriptor, this);

          _initializerDefineProperty(this, "emojiAtlas", _descriptor2, this);
        }

        // 供 <img> 标签使用的图集
        //#endregion

        /* ------------------ 2. 基础文本设置 ------------------ */
        //#region 2. 基础文本
        demoBasic() {
          this.richText.string = 'Hello <color=#ff0000>Rich</color><b>Text</b>!';
          this.richText.maxWidth = 300; // 最大宽度

          this.richText.lineHeight = 50; // 行高
        } //#endregion

        /* ------------------ 3. 字体与缓存 ------------------ */
        //#region 3. 字体与缓存


        demoFont() {
          this.richText.useSystemFont = true; // 使用系统字体

          this.richText.fontFamily = 'Arial'; // 指定系统字体

          this.richText.cacheMode = CacheMode.BITMAP; // 缓存模式
        } //#endregion

        /* ------------------ 4. 对齐方式 ------------------ */
        //#region 4. 对齐


        demoAlign() {
          this.richText.horizontalAlign = RichText.HorizontalAlign.LEFT;
          this.richText.verticalAlign = RichText.VerticalAlign.TOP;
        } //#endregion

        /* ------------------ 5. 默认颜色 ------------------ */
        //#region 5. 默认颜色


        demoColor() {
          this.richText.fontColor = Color.WHITE; // 未设置颜色时的默认文字颜色
        } //#endregion

        /* ------------------ 6. 图集绑定（支持 <img> 标签） ------------------ */
        //#region 6. 图集绑定


        demoImageAtlas() {
          this.richText.imageAtlas = this.emojiAtlas; // 示例文本：<img src='smile' width=32 height=32/>
        } //#endregion

        /* ------------------ 7. 阻止事件穿透 ------------------ */
        //#region 7. 事件拦截


        demoHandleTouch() {
          this.richText.handleTouchEvent = true; // 阻止点击/触摸穿透
        } //#endregion

        /* ------------------ 8. 动态更新示例 ------------------ */
        //#region 8. 动态更新


        updateContent() {
          this.richText.string = `
<size=30>标题</size>
<size=20><color=#00ff00>绿色文字</color></size>
<b>加粗</b>  <i>斜体</i>
<img src='smile' width=64 height=64/>
`;
        } //#endregion

        /* ------------------ 9. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          this.demoBasic();
          this.demoFont();
          this.demoAlign();
          this.demoColor();
          this.demoImageAtlas();
          this.demoHandleTouch();
          this.scheduleOnce(this.updateContent, 1); // 1 秒后替换内容
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "emojiAtlas", [_dec3], {
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
//# sourceMappingURL=b3aa0229b1041f352e1de448329bb2bb9c7e6ea6.js.map