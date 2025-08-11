System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson02_;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86c06ncNTBLrpk2RxDTGBtK", "Lesson02_", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson02_", Lesson02_ = (_dec = ccclass('Lesson02_'), _dec2 = property({
        //检查器相关参数
        type: Number,
        // 指定属性类型为 Node
        visible: true,
        // 在编辑器中显示此属性
        displayName: '节点1',
        // 在编辑器中显示的名称
        tooltip: '这是一个节点属性',
        // 鼠标悬停时显示的提示
        multiline: false,
        // 不使用多行文本框
        readonly: false,
        // 属性在编辑器中可编辑
        min: 0,
        // 最小值（仅对数值类型有效）
        max: 100,
        // 最大值（仅对数值类型有效）
        step: 1,
        // 步长（仅对数值类型有效）
        range: [0, 100],
        // 范围（仅对数值类型有效）
        slide: false,
        // 是否使用滑动条（仅对数值类型有效）
        group: '分组1',
        // 分组名称
        radian: false,
        // 是否使用弧度制
        //序列化相关参数
        serializable: true,
        // 是否可序列化
        formerlySerializedAs: 'node1',
        // 以前的属性名称（用于重命名属性时保持兼容性）
        editorOnly: false,
        // 仅在编辑器中显示
        //其他参数
        override: false,
        // 是否允许子类覆盖此属性
        displayOrder: 0 // 显示顺序

      }), _dec(_class = (_class2 = class Lesson02_ extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node1", _descriptor, this);
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
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
//# sourceMappingURL=7c160f9e9e6ef09c04425f3090d9ef956f17048b.js.map