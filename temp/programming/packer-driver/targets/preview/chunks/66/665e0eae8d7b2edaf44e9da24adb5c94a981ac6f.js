System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Bar, Foo, FooWithMethod, Base, Sub, ObjectBase, FooStatic, NodeBase, SpriteNode, Shape, Rect, SpriteLocal, _dec, _class6, _class7, _descriptor, _dec2, _class10, _crd, ccclass, property, SpriteWithGetterSetter, url, Lesson12_;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function doLoad(sprite) {
    console.log('doLoad called with', sprite);
  }

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

      _cclegacy._RF.push({}, "fbaa0nEfL9E/oSlFaQdweQL", "Lesson12_", undefined); // Lesson12_.ts


      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator); //#region 1. 基础类定义与实例化

      Bar = class Bar {
        constructor() {
          this.info = 'Bar instance';
        }

      };
      Foo = class Foo {
        constructor() {
          this.bar = null;
          this.bar = new Bar();
        }

      }; //#endregion
      //#region 2. 实例方法

      FooWithMethod = class FooWithMethod {
        constructor() {
          this.text = 'this is sprite';
        }

        print() {
          console.log(this.text);
        }

      }; //#endregion
      //#region 3. 类型判断

      Base = class Base {};
      Sub = class Sub extends Base {}; //#endregion
      //#region 4. 静态变量与方法

      ObjectBase = class ObjectBase {
        static getBounds() {
          return ObjectBase.range;
        }

      };
      ObjectBase.count = 11;
      ObjectBase.range = {
        w: 100,
        h: 100
      };
      FooStatic = class FooStatic extends ObjectBase {}; //#endregion
      //#region 5. 继承与构造函数

      NodeBase = class NodeBase {
        constructor() {
          this.name = void 0;
          this.name = 'node';
        }

      };
      SpriteNode = class SpriteNode extends NodeBase {
        constructor() {
          super();
          console.log(this.name); // "node"

          this.name = 'sprite';
        }

      }; //#endregion
      //#region 6. 方法重写

      Shape = class Shape {
        getName() {
          return 'shape';
        }

      };
      Rect = class Rect extends Shape {
        getName() {
          return 'rect';
        }

      }; //#endregion
      //#region 7. get/set 属性

      SpriteWithGetterSetter = (_dec = ccclass('SpriteWithGetterSetter'), _dec(_class6 = (_class7 = class SpriteWithGetterSetter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_width", _descriptor, this);
        }

        get width() {
          return this._width;
        }

        set width(value) {
          this._width = value;
        }

        start() {
          this.width = 20;
          console.log('width =', this.width);
        }

      }, (_applyDecoratedDescriptor(_class7.prototype, "width", [property], Object.getOwnPropertyDescriptor(_class7.prototype, "width"), _class7.prototype), _descriptor = _applyDecoratedDescriptor(_class7.prototype, "_width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class7)) || _class6); //#endregion
      //#region 8. 局部变量函数（类外）

      url = 'foo.png';
      SpriteLocal = class SpriteLocal {
        constructor() {
          this.url = '';
        }

        load() {
          this.url = url;
          doLoad(this);
        }

      }; //#endregion
      //#region 9. Lesson12_ 主脚本：演示所有功能

      _export("Lesson12_", Lesson12_ = (_dec2 = ccclass('Lesson12_'), _dec2(_class10 = class Lesson12_ extends Component {
        start() {
          // 1. 实例化
          var foo = new Foo();
          console.log(foo.bar.info); // 2. 实例方法

          var obj = new FooWithMethod();
          obj.print(); // 3. 类型判断

          var sub = new Sub();
          console.log('sub instanceof Sub:', sub instanceof Sub);
          console.log('sub instanceof Base:', sub instanceof Base); // 4. 静态成员

          console.log('FooStatic.count:', FooStatic.count);
          FooStatic.range.w = 200;
          console.log('ObjectBase.range.w:', ObjectBase.range.w); // 5. 继承 & 构造

          var sprite = new SpriteNode();
          console.log('sprite.name:', sprite.name); // 6. 方法重写

          var rect = new Rect();
          console.log('rect.getName():', rect.getName()); // 7. get/set

          var spriteGS = this.addComponent(SpriteWithGetterSetter);
          spriteGS.width = 88; // 8. 局部函数

          var localSprite = new SpriteLocal();
          localSprite.load();
        }

      }) || _class10)); //#endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=665e0eae8d7b2edaf44e9da24adb5c94a981ac6f.js.map