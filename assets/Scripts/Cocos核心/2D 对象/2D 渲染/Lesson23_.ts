// Lesson23_.ts
import { _decorator, Component, RichText, SpriteAtlas, Color, CacheMode } from 'cc';
const { ccclass, property } = _decorator;

/**
 * RichText 富文本组件 API 全功能演示
 * 核心类：Lesson23_
 */
@ccclass('Lesson23_')
export class Lesson23_ extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(RichText)
    richText: RichText = null!;

    @property(SpriteAtlas)
    emojiAtlas: SpriteAtlas = null!;   // 供 <img> 标签使用的图集
    //#endregion

    /* ------------------ 2. 基础文本设置 ------------------ */
    //#region 2. 基础文本
    private demoBasic() {
        this.richText.string = 'Hello <color=#ff0000>Rich</color><b>Text</b>!';
        this.richText.maxWidth = 300;           // 最大宽度
        this.richText.lineHeight = 50;          // 行高
    }
    //#endregion

    /* ------------------ 3. 字体与缓存 ------------------ */
    //#region 3. 字体与缓存
    private demoFont() {
        this.richText.useSystemFont = true;     // 使用系统字体
        this.richText.fontFamily = 'Arial';     // 指定系统字体
        this.richText.cacheMode = CacheMode.BITMAP; // 缓存模式
    }
    //#endregion

    /* ------------------ 4. 对齐方式 ------------------ */
    //#region 4. 对齐
    private demoAlign() {
        this.richText.horizontalAlign = RichText.HorizontalAlign.LEFT;
        this.richText.verticalAlign   = RichText.VerticalAlign.TOP;
    }
    //#endregion

    /* ------------------ 5. 默认颜色 ------------------ */
    //#region 5. 默认颜色
    private demoColor() {
        this.richText.fontColor = Color.WHITE;  // 未设置颜色时的默认文字颜色
    }
    //#endregion

    /* ------------------ 6. 图集绑定（支持 <img> 标签） ------------------ */
    //#region 6. 图集绑定
    private demoImageAtlas() {
        this.richText.imageAtlas = this.emojiAtlas;
        // 示例文本：<img src='smile' width=32 height=32/>
    }
    //#endregion

    /* ------------------ 7. 阻止事件穿透 ------------------ */
    //#region 7. 事件拦截
    private demoHandleTouch() {
        this.richText.handleTouchEvent = true;  // 阻止点击/触摸穿透
    }
    //#endregion

    /* ------------------ 8. 动态更新示例 ------------------ */
    //#region 8. 动态更新
    private updateContent() {
        this.richText.string = `
<size=30>标题</size>
<size=20><color=#00ff00>绿色文字</color></size>
<b>加粗</b>  <i>斜体</i>
<img src='smile' width=64 height=64/>
`;
    }
    //#endregion

    /* ------------------ 9. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        this.demoBasic();
        this.demoFont();
        this.demoAlign();
        this.demoColor();
        this.demoImageAtlas();
        this.demoHandleTouch();
        this.scheduleOnce(this.updateContent, 1); // 1 秒后替换内容
    }
    //#endregion
}