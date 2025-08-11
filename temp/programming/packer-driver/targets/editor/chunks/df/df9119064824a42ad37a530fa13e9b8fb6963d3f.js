System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Graphics, Color, math, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson22_;

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
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0a0ceIZgdEYKyicV991qeA", "Lesson22_", undefined); // Lesson22_.ts


      __checkObsolete__(['_decorator', 'Component', 'Graphics', 'Color', 'Vec2', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Graphics 绘图 API 全功能演示
       * 核心类：Lesson22_
       */

      _export("Lesson22_", Lesson22_ = (_dec = ccclass('Lesson22_'), _dec2 = property(Graphics), _dec(_class = (_class2 = class Lesson22_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 声明 Graphics ------------------ */
          //#region 1. 声明
          _initializerDefineProperty(this, "graphics", _descriptor, this);

          //#endregion

          /* ------------------ 9. 实时绘制示例（逐帧动画） ------------------ */
          //#region 9. 实时绘制
          this.angle = 0;
        }

        //#endregion

        /* ------------------ 2. 基础属性设置 ------------------ */
        //#region 2. 基础属性
        setupStyle() {
          this.graphics.lineWidth = 4; // 线宽

          this.graphics.strokeColor = Color.RED; // 笔触颜色

          this.graphics.fillColor = new Color(0, 0, 255, 80); // 填充颜色

          this.graphics.lineJoin = Graphics.LineJoin.ROUND; // 连接样式

          this.graphics.lineCap = Graphics.LineCap.ROUND; // 端点样式

          this.graphics.miterLimit = 10; // 斜接限制
        } //#endregion

        /* ------------------ 3. 清空画布 ------------------ */
        //#region 3. 清空


        clearCanvas() {
          this.graphics.clear();
        } //#endregion

        /* ------------------ 4. 直线 & 折线 ------------------ */
        //#region 4. 直线


        drawLine() {
          this.graphics.moveTo(-100, 0);
          this.graphics.lineTo(100, 0);
          this.graphics.stroke();
        } //#endregion

        /* ------------------ 5. 矩形 & 圆角矩形 ------------------ */
        //#region 5. 矩形


        drawRect() {
          // 普通矩形
          this.graphics.rect(-80, -50, 160, 100);
          this.graphics.fill();
          this.graphics.stroke(); // 圆角矩形

          this.graphics.roundRect(120, -50, 100, 60, 10);
          this.graphics.stroke();
        } //#endregion

        /* ------------------ 6. 圆形 & 圆弧 ------------------ */
        //#region 6. 圆形


        drawCircle() {
          // 整圆
          this.graphics.circle(0, 0, 50);
          this.graphics.fill(); // 圆弧

          this.graphics.arc(200, 0, 40, 0, math.toRadian(135), false);
          this.graphics.stroke();
        } //#endregion

        /* ------------------ 7. 贝塞尔曲线 ------------------ */
        //#region 7. 贝塞尔


        drawBezier() {
          // 二次贝塞尔
          this.graphics.moveTo(-200, 100);
          this.graphics.quadraticCurveTo(-100, 200, 0, 100);
          this.graphics.stroke(); // 三次贝塞尔

          this.graphics.moveTo(100, 100);
          this.graphics.bezierCurveTo(150, 200, 250, 200, 300, 100);
          this.graphics.stroke();
        } //#endregion

        /* ------------------ 8. 闭合路径 ------------------ */
        //#region 8. 闭合


        drawPolygon() {
          this.graphics.moveTo(0, 150);
          this.graphics.lineTo(-50, 200);
          this.graphics.lineTo(50, 200);
          this.graphics.close(); // 自动回到起点形成封闭图形

          this.graphics.fill();
          this.graphics.stroke();
        }

        drawDynamic() {
          this.angle += 2;
          const rad = math.toRadian(this.angle);
          const x = Math.cos(rad) * 80;
          const y = Math.sin(rad) * 80;
          this.graphics.moveTo(0, 0);
          this.graphics.lineTo(x, y);
          this.graphics.stroke();
        } //#endregion

        /* ------------------ 10. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          this.setupStyle();
          this.clearCanvas();
          this.drawLine();
          this.drawRect();
          this.drawCircle();
          this.drawBezier();
          this.drawPolygon(); // 启动逐帧动画

          this.schedule(this.drawDynamic, 0.05);
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "graphics", [_dec2], {
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
//# sourceMappingURL=df9119064824a42ad37a530fa13e9b8fb6963d3f.js.map