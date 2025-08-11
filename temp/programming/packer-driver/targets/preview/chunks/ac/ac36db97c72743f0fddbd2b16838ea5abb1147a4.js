System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, LabelOutline, Label, Color, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson39_LabelOutline;

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
      LabelOutline = _cc.LabelOutline;
      Label = _cc.Label;
      Color = _cc.Color;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a2316B52hCVKlezfICuD0N", "Lesson39_LabelOutline", undefined); // Lesson39_LabelOutline.ts


      __checkObsolete__(['_decorator', 'Component', 'LabelOutline', 'Label', 'Color', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson39_LabelOutline
       * 演示 Cocos Creator 3.8 **LabelOutline** 组件的常见 API 用法
       * ⚠️ 注意：LabelOutline 自 v3.8.2 起已废弃，请改用 Label.enableOutline。
       * 本脚本同时给出新旧两种写法，方便迁移。
       */

      _export("Lesson39_LabelOutline", Lesson39_LabelOutline = (_dec = ccclass('Lesson39_LabelOutline'), _dec2 = property({
        type: LabelOutline,
        tooltip: '已废弃，仅作演示'
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = class Lesson39_LabelOutline extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 LabelOutline（旧写法） ========================= */
          // #region 获取/创建 LabelOutline
          _initializerDefineProperty(this, "labelOutline", _descriptor, this);

          // #endregion

          /* ========================= 3. 新 API：使用 Label.enableOutline ========================= */
          // #region 新 API 设置
          _initializerDefineProperty(this, "label", _descriptor2, this);
        }

        /** 运行时动态创建 LabelOutline（旧写法） */
        getOrCreateLabelOutline() {
          var _this$labelOutline;

          var ol = (_this$labelOutline = this.labelOutline) != null ? _this$labelOutline : this.getComponent(LabelOutline);

          if (!ol) {
            ol = this.addComponent(LabelOutline);
            log('动态添加 LabelOutline 组件（已废弃）');
          }

          return ol;
        } // #endregion

        /* ========================= 2. 旧 API 设置描边宽度与颜色 ========================= */
        // #region 旧 API 设置

        /** 使用已废弃的 LabelOutline 设置描边 */


        setByLabelOutline() {
          var ol = this.getOrCreateLabelOutline();
          if (!ol) return; // 已废弃的属性

          ol.width = 3; // 描边宽度

          ol.color = Color.BLACK; // 描边颜色

          log('通过 LabelOutline 设置描边（已废弃）');
        }

        /** 通过 Label.enableOutline 设置描边（推荐） */
        setByLabelEnableOutline() {
          var _this$label;

          var lbl = (_this$label = this.label) != null ? _this$label : this.getComponent(Label);
          if (!lbl) return;
          lbl.enableOutline = true; // 开启描边

          lbl.outlineColor = Color.RED; // 描边颜色

          lbl.outlineWidth = 4; // 描边宽度

          log('通过 Label.enableOutline 设置描边（推荐）');
        }
        /** 关闭描边 */


        disableOutline() {
          var _this$label2;

          var lbl = (_this$label2 = this.label) != null ? _this$label2 : this.getComponent(Label);
          if (lbl) lbl.enableOutline = false;
        } // #endregion

        /* ========================= 4. 动态切换描边样式 ========================= */
        // #region 动态切换


        toggleOutlineStyle() {
          var _this$label3;

          var lbl = (_this$label3 = this.label) != null ? _this$label3 : this.getComponent(Label);
          if (!lbl) return; // 每次点击切换不同颜色

          if (lbl.enableOutline) {
            lbl.outlineColor = lbl.outlineColor.equals(Color.RED) ? Color.GREEN : Color.RED;
            lbl.outlineWidth = Math.random() * 5 + 1;
          } else {
            this.setByLabelEnableOutline();
          }
        } // #endregion

        /* ========================= 5. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 旧写法（兼容老项目）
          this.setByLabelOutline(); // 新写法（推荐）

          this.setByLabelEnableOutline();
        }

        start() {
          // 演示：2 秒后切换一次描边样式
          this.scheduleOnce(() => this.toggleOutlineStyle(), 2);
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelOutline", [_dec2], {
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
//# sourceMappingURL=ac36db97c72743f0fddbd2b16838ea5abb1147a4.js.map