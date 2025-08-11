System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, Color, Vec2, Size, UITransform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson19_;

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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "559e0dGvNhDR6EYl0g+Zgpe", "Lesson19_", undefined); // Lesson19_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'Color', 'Vec2', 'Size', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Sprite 组件 API 演示脚本（官方文档全功能整合）
       * 核心类：Lesson19_
       */

      _export("Lesson19_", Lesson19_ = (_dec = ccclass('Lesson19_'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = class Lesson19_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 声明属性 ------------------ */
          //#region 声明属性
          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "frame1", _descriptor2, this);

          _initializerDefineProperty(this, "frame2", _descriptor3, this);
        }

        //#endregion

        /* ------------------ 2. 基础设置 ------------------ */
        //#region 基础设置
        demoBasic() {
          // 切换精灵帧
          this.sprite.spriteFrame = this.frame1; // 设置渲染颜色（乘贴图）

          this.sprite.color = Color.RED; // 启用灰度

          this.sprite.grayscale = true;
        } //#endregion

        /* ------------------ 3. 尺寸模式与类型 ------------------ */
        //#region 尺寸与类型


        demoSizeAndType() {
          var _this$sprite$node$get;

          // 尺寸模式
          this.sprite.sizeMode = Sprite.SizeMode.CUSTOM; // 或 TRIMMED / RAW
          // 自定义尺寸

          (_this$sprite$node$get = this.sprite.node.getComponent(UITransform)) == null || _this$sprite$node$get.setContentSize(new Size(300, 200)); // 渲染类型

          this.sprite.type = Sprite.Type.FILLED; // SIMPLE / SLICED / TILED / FILLED
        } //#endregion

        /* ------------------ 4. 填充模式（Filled） ------------------ */
        //#region 填充


        demoFill() {
          this.sprite.type = Sprite.Type.FILLED;
          this.sprite.fillType = Sprite.FillType.HORIZONTAL; // 水平填充

          this.sprite.fillStart = 0; // 起始点 [-1,1]

          this.sprite.fillRange = 0.5; // 填充范围 [-1,1]

          this.sprite.fillCenter = new Vec2(0.5, 0.5); // 中心点
        } //#endregion

        /* ------------------ 5. 动态切换图集帧 ------------------ */
        //#region 图集切换


        demoAtlas() {
          // 若 spriteAtlas 已赋值，可直接通过名字切换
          this.sprite.changeSpriteFrameFromAtlas('icon2');
        } //#endregion

        /* ------------------ 6. 获取父节点/子节点组件 ------------------ */
        //#region 组件查找


        demoFind() {
          // 获取自身 Sprite
          const self = this.node.getComponent(Sprite); // 获取子节点里所有 Sprite

          const childrenSprites = this.node.getComponentsInChildren(Sprite);
          console.log('Self: ', self);
          console.log('Children sprites count: ', childrenSprites.length);
        } //#endregion

        /* ------------------ 7. 生命周期事件 ------------------ */
        //#region 生命周期


        start() {
          this.demoBasic();
          this.demoSizeAndType();
          this.demoFill();
          this.demoAtlas();
          this.demoFind();
        }

        onDestroy() {
          // 取消所有定时器
          this.unscheduleAllCallbacks();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frame2", [_dec4], {
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
//# sourceMappingURL=c7ede7d4db63cb437eb9f82bcea3ec1052eae646.js.map