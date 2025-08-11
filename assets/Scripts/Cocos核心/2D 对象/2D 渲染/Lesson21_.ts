// Lesson21_.ts
import { _decorator, Component, Mask, SpriteFrame, Color, Label } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Mask（遮罩）组件 API 全功能演示
 * 核心类：Lesson21_
 */
@ccclass('Lesson21_')
export class Lesson21_ extends Component {

    /* ------------------ 1. 组件声明与获取 ------------------ */
    //#region 1. 组件声明
    @property(Mask)
    mask: Mask = null!;

    @property(SpriteFrame)
    maskSprite: SpriteFrame = null!;

    @property(Label)
    contentLabel: Label = null!;   // 用于被遮罩的子文本
    //#endregion

    /* ------------------ 2. 遮罩类型设置 ------------------ */
    //#region 2. 类型
    private setupMaskType() {
        // 矩形、圆形、图片、椭圆
        this.mask.type = Mask.Type.GRAPHICS_ELLIPSE;   // GRAPHICS_RECT | GRAPHICS_ELLIPSE | GRAPHICS_STENCIL | SPRITE_STENCIL
    }
    //#endregion

    /* ------------------ 3. 椭圆细分（仅椭圆有效） ------------------ */
    //#region 3. 椭圆细分
    private setupEllipse() {
        if (this.mask.type === Mask.Type.GRAPHICS_ELLIPSE) {
            this.mask.segments = 64;   // 椭圆曲线细分数，越高越圆
        }
    }
    //#endregion

    /* ------------------ 4. 图片遮罩 ------------------ */
    //#region 4. 图片遮罩
    private setupSpriteMask() {
        if (this.mask.type === Mask.Type.SPRITE_STENCIL) {
            this.mask.spriteFrame = this.maskSprite;   // 指定模板贴图
            this.mask.alphaThreshold = 0.1;            // Alpha 阈值 0~1
        }
    }
    //#endregion

    /* ------------------ 5. 反转遮罩 ------------------ */
    //#region 5. 反转
    private toggleInverted() {
        // true 时显示区域反转
        this.mask.inverted = !this.mask.inverted;
    }
    //#endregion

    /* ------------------ 6. 动态内容演示 ------------------ */
    //#region 6. 动态内容
    private demoDynamicContent() {
        if (this.contentLabel) {
            this.contentLabel.string = '被遮罩的文字，超出部分将被裁剪';
            // 让文字滚动以观察遮罩效果
            this.schedule(() => {
                const offset = this.contentLabel.node.position.x;
                this.contentLabel.node.setPosition(offset + 1, 0, 0);
            }, 0.05);
        }
    }
    //#endregion

    /* ------------------ 7. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        this.setupMaskType();
        this.setupEllipse();
        this.setupSpriteMask();
        this.demoDynamicContent();
    }

    protected onDestroy() {
        this.unscheduleAllCallbacks();
    }
    //#endregion
}