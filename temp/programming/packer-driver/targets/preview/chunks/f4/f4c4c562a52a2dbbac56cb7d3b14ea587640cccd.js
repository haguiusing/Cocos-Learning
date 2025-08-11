System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, CurveRange, Enum, Gradient, GradientRange, Label, Node, RealCurve, Sprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _crd, ccclass, property, executeInEditMode, requireComponent, executionOrder, disallowMultiple, menu, help, A, Lesson01_;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function integer // 声明属性的 cc 类型为整数
  (target, propertyKey) {
    throw new Error('Function not implemented.');
  }

  function type(arg0) {
    throw new Error('Function not implemented.');
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      CurveRange = _cc.CurveRange;
      Enum = _cc.Enum;
      Gradient = _cc.Gradient;
      GradientRange = _cc.GradientRange;
      Label = _cc.Label;
      Node = _cc.Node;
      RealCurve = _cc.RealCurve;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10d6bNOwBpPUYIQQLrVlmJm", "Lesson01_%E7%BB%84%E4%BB%B6%E7%B1%BB%E8%A3%85%E9%A5%B0%E5%99%A8", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Color', 'Component', 'CurveRange', 'Enum', 'Gradient', 'GradientRange', 'Label', 'Node', 'RealCurve', 'Sprite']);

      ({
        ccclass,
        property,
        executeInEditMode,
        requireComponent,
        executionOrder,
        disallowMultiple,
        menu,
        help
      } = _decorator);

      A = /*#__PURE__*/function (A) {
        A[A["c"] = 0] = "c";
        A[A["d"] = 1] = "d";
        return A;
      }(A || {});

      Enum(A);

      _export("Lesson01_", Lesson01_ = (_dec = ccclass('Lesson01_'), _dec2 = executionOrder(100), _dec3 = disallowMultiple(true), _dec4 = menu('Lesson01_'), _dec5 = help('https://docs.cocos.com/creator/3.8/manual/zh/scripting/decorator.html'), _dec6 = property({
        type: Node,
        visible: true
      }), _dec7 = property(Node), _dec8 = property({
        type: [Node]
      }), _dec9 = type([Node]), _dec10 = property({
        type: String
      }), _dec11 = property({
        type: A
      }), _dec12 = property({
        visible: true
      }), _dec13 = property({
        visible: false
      }), _dec14 = property({
        serializable: false
      }), _dec15 = property({
        tooltip: "my id",
        override: true
      }), _dec16 = property({
        group: {
          name: 'bar'
        },
        type: Label
      }), _dec17 = property({
        group: {
          name: 'foo'
        },
        type: Sprite
      }), _dec18 = property({
        group: {
          name: 'bar2',
          id: '2',
          displayOrder: 1
        },
        type: Label
      }), _dec19 = property({
        group: {
          name: 'bar2',
          id: '2'
        },
        type: Sprite
      }), _dec20 = property({
        group: {
          name: 'bar2',
          id: '2',
          displayOrder: 1
        },
        displayOrder: 2,
        type: Label
      }), _dec21 = property({
        group: {
          name: 'bar2',
          id: '2'
        },
        displayOrder: 1,
        type: Sprite
      }), _dec22 = property(Color), _dec23 = property(RealCurve), _dec24 = property(CurveRange), _dec25 = property(Gradient), _dec26 = property(GradientRange), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = class Lesson01_ extends Component {
        constructor() {
          super(...arguments);

          //#region 属性装饰器示例
          _initializerDefineProperty(this, "Node", _descriptor, this);

          _initializerDefineProperty(this, "index1", _descriptor2, this);

          _initializerDefineProperty(this, "index2", _descriptor3, this);

          _initializerDefineProperty(this, "targetNode", _descriptor4, this);

          // 等价于 targetNode: Node = null!;
          // 声明属性 children 的 cc 类型为 Node 数组
          _initializerDefineProperty(this, "childrens1", _descriptor5, this);

          _initializerDefineProperty(this, "childrens2", _descriptor6, this);

          _initializerDefineProperty(this, "text1", _descriptor7, this);

          //@type(String) // 警告：不应该使用构造函数 String。等价于 CCString。也可以选择不声明类型
          // JavaScript 原始类型 `number`、`string`、`boolean` 通常可以不用声明
          // 可以直接写
          _initializerDefineProperty(this, "text2", _descriptor8, this);

          _initializerDefineProperty(this, "children2", _descriptor9, this);

          // 未声明 cc 类型，从初始化式的求值结果推断元素为未定义的数组
          _initializerDefineProperty(this, "_valueB", _descriptor10, this);

          // 此处 '_' 开头的属性，只序列化，不会在编辑器属性面板显示
          _initializerDefineProperty(this, "accx", _descriptor11, this);

          //#endregion
          //#region visible
          //_ 开头, 不会在编辑器属性面板显示
          _initializerDefineProperty(this, "_num", _descriptor12, this);

          _initializerDefineProperty(this, "num1", _descriptor13, this);

          //#endregion
          //#region serializable
          _initializerDefineProperty(this, "num2", _descriptor14, this);

          //#endregion
          //#region override
          _initializerDefineProperty(this, "id", _descriptor15, this);

          //#endregion
          //#region group
          // 分组一
          // 组内名为 “bar” 的属性分类，其中包含一个名为 label 的 Label 属性
          _initializerDefineProperty(this, "label", _descriptor16, this);

          // 组内名为 “foo” 的属性分类，其中包含一个名为 sprite 的 Sprite 属性
          _initializerDefineProperty(this, "sprite", _descriptor17, this);

          // 分组二
          // 组内名为 “bar2” 的属性分类，其中包含名为 label2 的 Label 属性和名为 sprite2 的 Sprite 属性，并且指定排序为 1。
          _initializerDefineProperty(this, "label2", _descriptor18, this);

          _initializerDefineProperty(this, "sprite2", _descriptor19, this);

          // 分组三
          // 组内名为 “bar” 的属性分类，其中包含名为 label2 的 Label 属性和名为 sprite2 的 Sprite 属性，并且指定排序为 1。
          _initializerDefineProperty(this, "label3", _descriptor20, this);

          _initializerDefineProperty(this, "sprite3", _descriptor21, this);

          //#endregion
          //#region 内置类型界面
          _initializerDefineProperty(this, "color", _descriptor22, this);

          _initializerDefineProperty(this, "realCurve", _descriptor23, this);

          _initializerDefineProperty(this, "curveRange", _descriptor24, this);

          _initializerDefineProperty(this, "gradient", _descriptor25, this);

          _initializerDefineProperty(this, "gradientRange", _descriptor26, this);
        }

        //#endregion
        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "index1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "index2", [integer], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "childrens1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "childrens2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "text1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "text2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "children2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_valueB", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'abc';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "accx", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return A.c;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_num", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "num1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "num2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "label2", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sprite2", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "label3", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "sprite3", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "realCurve", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new RealCurve();
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "curveRange", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new CurveRange();
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "gradient", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Gradient();
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "gradientRange", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new GradientRange();
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4c4c562a52a2dbbac56cb7d3b14ea587640cccd.js.map