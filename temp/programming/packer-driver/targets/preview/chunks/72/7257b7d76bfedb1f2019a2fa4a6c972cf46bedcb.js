System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, EditBox, EventHandler, Label, log, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson35_EditBox;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      EventHandler = _cc.EventHandler;
      Label = _cc.Label;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8dd1925lkFALIs+aXZ8PrPW", "Lesson35_EditBox", undefined); // Lesson35_EditBox.ts


      __checkObsolete__(['_decorator', 'Color', 'Component', 'EditBox', 'EventHandler', 'Label', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Lesson35_EditBox
       * 演示 Cocos Creator 3.8 EditBox 组件的常见 API 用法
       * 按功能划分为不同折叠块，便于查阅
       */

      _export("Lesson35_EditBox", Lesson35_EditBox = (_dec = ccclass('Lesson35_EditBox'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = class Lesson35_EditBox extends Component {
        constructor() {
          super(...arguments);

          /* ========================= 1. 获取/创建 EditBox 组件 ========================= */
          // #region 获取/创建 EditBox
          _initializerDefineProperty(this, "editBox", _descriptor, this);

          // #endregion

          /* ========================= 3. 设置文本显示相关 ========================= */
          // #region 设置文本显示
          _initializerDefineProperty(this, "textLabel", _descriptor2, this);

          // #endregion

          /* ========================= 4. 设置占位符相关 ========================= */
          // #region 设置占位符
          _initializerDefineProperty(this, "placeholderLabel", _descriptor3, this);
        }

        /** 运行时动态创建或获取 EditBox 组件 */
        getOrCreateEditBox() {
          var _this$editBox;

          var eb = (_this$editBox = this.editBox) != null ? _this$editBox : this.getComponent(EditBox);

          if (!eb) {
            eb = this.addComponent(EditBox);
            log('动态添加 EditBox 组件');
          }

          return eb;
        } // #endregion

        /* ========================= 2. 设置基础属性 ========================= */
        // #region 设置基础属性


        setBasicProperties() {
          var eb = this.getOrCreateEditBox();
          if (!eb) return; // 设置初始文本

          eb.string = '初始文本'; // 设置占位符文本

          eb.placeholder = '请输入内容...'; // 设置最大输入长度

          eb.maxLength = 20; // 设置输入模式（单行）

          eb.inputMode = EditBox.InputMode.SINGLE_LINE; // 设置输入标志位（密码模式）

          eb.inputFlag = EditBox.InputFlag.PASSWORD; // 设置返回键类型（仅移动端有效）

          eb.returnType = EditBox.KeyboardReturnType.DONE;
        }

        setLabelProperties() {
          var _this$textLabel;

          var eb = this.getOrCreateEditBox();
          if (!eb) return; // 获取文本标签组件

          var label = (_this$textLabel = this.textLabel) != null ? _this$textLabel : eb.textLabel;

          if (label) {
            label.string = '这是文本标签';
            label.fontSize = 24;
            label.color = new Color(255, 255, 255); // 白色
          }
        }

        setPlaceholderProperties() {
          var _this$placeholderLabe;

          var eb = this.getOrCreateEditBox();
          if (!eb) return; // 获取占位符标签组件

          var placeholder = (_this$placeholderLabe = this.placeholderLabel) != null ? _this$placeholderLabe : eb.placeholderLabel;

          if (placeholder) {
            placeholder.string = '占位符文本';
            placeholder.fontSize = 20;
            placeholder.color = new Color(150, 150, 150); // 灰色
          }
        } // #endregion

        /* ========================= 5. 事件监听 ========================= */
        // #region 事件监听


        addEventListeners() {
          var editboxEventHandler = new EventHandler();
          editboxEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点

          editboxEventHandler.component = 'example';
          editboxEventHandler.handler = 'onEditDidBegan';
          editboxEventHandler.customEventData = 'foobar';
          var eb = this.getOrCreateEditBox();
          if (!eb) return;
          eb.editingDidBegan.push(editboxEventHandler); // 你也可以通过类似的方式来注册其它回调函数

          eb.editingDidEnded.push(editboxEventHandler);
          eb.textChanged.push(editboxEventHandler);
          eb.editingReturn.push(editboxEventHandler);
        }

        onEditDidBegan(editbox, customEventData) {// 这里 editbox 是一个 EditBox 对象
          // 这里的 customEventData 参数就等于你之前设置的 "foobar"
        } // 假设这个回调是给 editingDidEnded 事件的


        onEditDidEnded(editbox, customEventData) {// 这里 editbox 是一个 EditBox 对象
          // 这里的 customEventData 参数就等于你之前设置的 "foobar"
        } // 假设这个回调是给 textChanged 事件的


        onTextChanged(text, editbox, customEventData) {// 这里的 text 表示修改完后的 EditBox 的文本内容
          // 这里 editbox 是一个 EditBox 对象
          // 这里的 customEventData 参数就等于你之前设置的 "foobar"
        } // 假设这个回调是给 editingReturn 事件的


        onEditingReturn(editbox, customEventData) {// 这里 editbox 是一个 EditBox 对象
          // 这里的 customEventData 参数就等于你之前设置的 "foobar"
        } // #endregion

        /* ========================= 6. 焦点控制 ========================= */
        // #region 焦点控制


        controlFocus() {
          var eb = this.getOrCreateEditBox();
          if (!eb) return; // 让 EditBox 获得焦点

          eb.focus(); // 检查是否获得焦点

          if (eb.isFocused()) {
            log('EditBox 已获得焦点');
          } // 让 EditBox 失去焦点


          eb.blur();
        } // #endregion

        /* ========================= 7. 生命周期示例 ========================= */
        // #region 生命周期


        onLoad() {
          // 初始化 EditBox 属性
          this.setBasicProperties();
          this.setLabelProperties();
          this.setPlaceholderProperties();
          this.addEventListeners();
        }

        start() {
          // 演示：启动后自动聚焦
          this.controlFocus();
        } // #endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "textLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "placeholderLabel", [_dec4], {
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
//# sourceMappingURL=7257b7d76bfedb1f2019a2fa4a6c972cf46bedcb.js.map