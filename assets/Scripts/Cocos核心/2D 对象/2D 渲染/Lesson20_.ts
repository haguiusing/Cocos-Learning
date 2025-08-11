// Lesson20_.ts
import { _decorator, Component, Label, Color, Vec2, Font, Overflow, CacheMode } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Label 组件 API 演示脚本（官方文档全功能整合）
 * 核心类：Lesson20_
 */
@ccclass('Lesson20_')
export class Lesson20_ extends Component {

    /* ------------------ 1. 声明属性 ------------------ */
    //#region 声明属性
    @property(Label)
    label: Label = null!;

    @property(Font)
    ttfAsset: Font = null!;
    //#endregion

    /* ------------------ 2. 基础文本设置 ------------------ */
    //#region 基础文本
    private demoBasic() {
        this.label.string = 'Hello Cocos!';
        this.label.fontSize = 48;
        this.label.lineHeight = 56;
    }
    //#endregion

    /* ------------------ 3. 字体与缓存模式 ------------------ */
    //#region 字体与缓存
    private demoFont() {
        // 使用系统字体
        this.label.useSystemFont = true;
        this.label.fontFamily = 'Arial';

        // 使用 TTF 字体（需将 ttfAsset 拖到属性检查器）
        if (this.ttfAsset) {
            this.label.font = this.ttfAsset;
            this.label.useSystemFont = false;
        }

        // 缓存模式（仅系统字体）
        this.label.cacheMode = CacheMode.CHAR; // NONE、BITMAP、CHAR
    }
    //#endregion

    /* ------------------ 4. 对齐与换行 ------------------ */
    //#region 对齐与换行
    private demoAlign() {
        this.label.horizontalAlign = Label.HorizontalAlign.CENTER;
        this.label.verticalAlign   = Label.VerticalAlign.CENTER;
        this.label.enableWrapText  = true;
    }
    //#endregion

    /* ------------------ 5. 溢出处理 ------------------ */
    //#region 溢出
    private demoOverflow() {
        // NONE / CLAMP / SHRINK / RESIZE_HEIGHT
        this.label.overflow = Overflow.SHRINK;
        console.log('实际渲染字号：', this.label.actualFontSize);
    }
    //#endregion

    /* ------------------ 6. 样式（描边、阴影、下划线） ------------------ */
    //#region 样式
    private demoStyle() {
        // 描边
        this.label.enableOutline = true;
        this.label.outlineColor  = Color.BLACK;
        this.label.outlineWidth  = 2;

        // 阴影
        this.label.enableShadow  = true;
        this.label.shadowColor   = Color.GRAY;
        this.label.shadowOffset  = new Vec2(2, -2);
        this.label.shadowBlur    = 2;

        // 下划线
        this.label.isUnderline   = true;
        this.label.underlineHeight = 2;
    }
    //#endregion

    /* ------------------ 7. BMFont 专有间距 ------------------ */
    //#region BMFont 间距
    private demoBMFontSpacing() {
        // 仅对 BMFont 生效
        this.label.spacingX = 4;
    }
    //#endregion

    /* ------------------ 8. 动态更新渲染数据 ------------------ */
    //#region 更新渲染
    private updateRender() {
        this.label.updateRenderData(true);
    }
    //#endregion

    /* ------------------ 9. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        this.demoBasic();
        this.demoFont();
        this.demoAlign();
        this.demoOverflow();
        this.demoStyle();
        this.demoBMFontSpacing();
        this.updateRender();
    }
    //#endregion
}