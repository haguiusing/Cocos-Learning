// Lesson22_.ts
import { _decorator, Component, Graphics, Color, Vec2, math } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Graphics 绘图 API 全功能演示
 * 核心类：Lesson22_
 */
@ccclass('Lesson22_')
export class Lesson22_ extends Component {

    /* ------------------ 1. 声明 Graphics ------------------ */
    //#region 1. 声明
    @property(Graphics)
    graphics: Graphics = null!;
    //#endregion

    /* ------------------ 2. 基础属性设置 ------------------ */
    //#region 2. 基础属性
    private setupStyle() {
        this.graphics.lineWidth   = 4;                        // 线宽
        this.graphics.strokeColor = Color.RED;                // 笔触颜色
        this.graphics.fillColor   = new Color(0, 0, 255, 80); // 填充颜色
        this.graphics.lineJoin    = Graphics.LineJoin.ROUND;  // 连接样式
        this.graphics.lineCap     = Graphics.LineCap.ROUND;   // 端点样式
        this.graphics.miterLimit  = 10;                       // 斜接限制
    }
    //#endregion

    /* ------------------ 3. 清空画布 ------------------ */
    //#region 3. 清空
    private clearCanvas() {
        this.graphics.clear();
    }
    //#endregion

    /* ------------------ 4. 直线 & 折线 ------------------ */
    //#region 4. 直线
    private drawLine() {
        this.graphics.moveTo(-100, 0);
        this.graphics.lineTo(100, 0);
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 5. 矩形 & 圆角矩形 ------------------ */
    //#region 5. 矩形
    private drawRect() {
        // 普通矩形
        this.graphics.rect(-80, -50, 160, 100);
        this.graphics.fill();
        this.graphics.stroke();

        // 圆角矩形
        this.graphics.roundRect(120, -50, 100, 60, 10);
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 6. 圆形 & 圆弧 ------------------ */
    //#region 6. 圆形
    private drawCircle() {
        // 整圆
        this.graphics.circle(0, 0, 50);
        this.graphics.fill();

        // 圆弧
        this.graphics.arc(200, 0, 40, 0, math.toRadian(135), false);
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 7. 贝塞尔曲线 ------------------ */
    //#region 7. 贝塞尔
    private drawBezier() {
        // 二次贝塞尔
        this.graphics.moveTo(-200, 100);
        this.graphics.quadraticCurveTo(-100, 200, 0, 100);
        this.graphics.stroke();

        // 三次贝塞尔
        this.graphics.moveTo(100, 100);
        this.graphics.bezierCurveTo(150, 200, 250, 200, 300, 100);
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 8. 闭合路径 ------------------ */
    //#region 8. 闭合
    private drawPolygon() {
        this.graphics.moveTo(0, 150);
        this.graphics.lineTo(-50, 200);
        this.graphics.lineTo(50, 200);
        this.graphics.close();   // 自动回到起点形成封闭图形
        this.graphics.fill();
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 9. 实时绘制示例（逐帧动画） ------------------ */
    //#region 9. 实时绘制
    private angle = 0;
    private drawDynamic() {
        this.angle += 2;
        const rad = math.toRadian(this.angle);
        const x = Math.cos(rad) * 80;
        const y = Math.sin(rad) * 80;

        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(x, y);
        this.graphics.stroke();
    }
    //#endregion

    /* ------------------ 10. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        this.setupStyle();
        this.clearCanvas();

        this.drawLine();
        this.drawRect();
        this.drawCircle();
        this.drawBezier();
        this.drawPolygon();

        // 启动逐帧动画
        this.schedule(this.drawDynamic, 0.05);
    }

    protected onDestroy() {
        this.unscheduleAllCallbacks();
    }
    //#endregion
}