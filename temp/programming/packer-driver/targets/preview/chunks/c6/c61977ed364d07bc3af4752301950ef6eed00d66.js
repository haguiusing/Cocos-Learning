System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, LabelShadow, Label, Color, Vec2, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson40_LabelShadow;

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
      LabelShadow = _cc.LabelShadow;
      Label = _cc.Label;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16eebi88LdASLMyCsAomCcR", "Lesson40_LabelShadow", undefined); // Lesson40_LabelShadow.ts


      __checkObsolete__(['_decorator', 'Component', 'LabelShadow', 'Label', 'Color', 'Vec2', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson40_LabelShadow
       * 演示 Cocos Creator 3.8 **LabelShadow** 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       * ⚠️ 注意：LabelShadow 自 v3.8.2 起已废弃，请改用 Label.enableShadow。
       */

      _export("Lesson40_LabelShadow", Lesson40_LabelShadow = (_dec = ccclass('Lesson40_LabelShadow'), _dec2 = property({
        type: LabelShadow,
        tooltip: '已废弃，仅作演示'
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = class Lesson40_LabelShadow extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 LabelShadow（旧写法） ========================= */
          // #region 获取/创建 LabelShadow
          _initializerDefineProperty(this, "labelShadow", _descriptor, this);

          // #endregion

          /* ========================= 3. 新 API：使用 Label.enableShadow ========================= */
          // #region 新 API 设置
          _initializerDefineProperty(this, "label", _descriptor2, this);
        }

        /** 运行时动态创建 LabelShadow（旧写法） */
        getOrCreateLabelShadow() {
          var _this$labelShadow;

          var shadow = (_this$labelShadow = this.labelShadow) != null ? _this$labelShadow : this.getComponent(LabelShadow);

          if (!shadow) {
            shadow = this.addComponent(LabelShadow);
            log('动态添加 LabelShadow 组件（已废弃）');
          }

          return shadow;
        } // #endregion

        /* ========================= 2. 旧 API 设置阴影样式 ========================= */
        // #region 旧 API 设置

        /** 使用已废弃的 LabelShadow 设置阴影 */


        setByLabelShadow() {
          var shadow = this.getOrCreateLabelShadow();
          if (!shadow) return; // 已废弃的属性

          shadow.offset = new Vec2(5, -5); // 阴影偏移

          shadow.color = Color.BLACK; // 阴影颜色

          shadow.blur = 2; // 阴影模糊程度

          log('通过 LabelShadow 设置阴影（已废弃）');
        }

        /** 通过 Label.enableShadow 设置阴影（推荐） */
        setByLabelEnableShadow() {
          var _this$label;

          var lbl = (_this$label = this.label) != null ? _this$label : this.getComponent(Label);
          if (!lbl) return;
          lbl.enableShadow = true; // 开启阴影

          lbl.shadowColor = Color.GRAY; // 阴影颜色

          lbl.shadowOffset = new Vec2(4, -4); // 阴影偏移

          lbl.shadowBlur = 3; // 阴影模糊程度

          log('通过 Label.enableShadow 设置阴影（推荐）');
        }
        /** 关闭阴影 */


        disableShadow() {
          var _this$label2;

          var lbl = (_this$label2 = this.label) != null ? _this$label2 : this.getComponent(Label);
          if (lbl) lbl.enableShadow = false;
        } // #endregion

        /* ========================= 4. 动态切换阴影样式 ========================= */
        // #region 动态切换


        toggleShadowStyle() {
          var _this$label3;

          var lbl = (_this$label3 = this.label) != null ? _this$label3 : this.getComponent(Label);
          if (!lbl) return; // 每次点击切换不同颜色

          if (lbl.enableShadow) {
            lbl.shadowColor = lbl.shadowColor.equals(Color.GRAY) ? Color.BLUE : Color.GRAY;
            lbl.shadowBlur = Math.random() * 5 + 1;
          } else {
            this.setByLabelEnableShadow();
          }
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 旧写法（兼容老项目）
          this.setByLabelShadow(); // 新写法（推荐）

          this.setByLabelEnableShadow();
        }

        start() {
          // 演示：2 秒后切换一次阴影样式
          this.scheduleOnce(() => this.toggleShadowStyle(), 2);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelShadow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
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
//# sourceMappingURL=c61977ed364d07bc3af4752301950ef6eed00d66.js.map