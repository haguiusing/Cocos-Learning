// Lesson29_.ts
import { _decorator, Component, MotionStreak, Texture2D, Color, resources } from 'cc';
const { ccclass, property } = _decorator;

/**
 * MotionStreak（运动拖尾）API 全功能演示
 * 核心类：Lesson29_MotionStreak
 */
@ccclass('Lesson29_MotionStreak')
export class Lesson29_MotionStreak extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(MotionStreak)
    streak: MotionStreak = null!;

    @property(Texture2D)
    trailTexture: Texture2D = null!;
    //#endregion

    /* ------------------ 2. 基础外观设置 ------------------ */
    //#region 2. 外观设置
    private setupAppearance() {
        this.streak.texture = this.trailTexture;   // 拖尾贴图
        this.streak.stroke  = 32;                  // 宽度
        this.streak.color   = Color.YELLOW;        // 颜色
    }
    //#endregion

    /* ------------------ 3. 拖尾行为参数 ------------------ */
    //#region 3. 行为参数
    private setupBehavior() {
        this.streak.fadeTime = 1.5;    // 渐隐时间
        this.streak.minSeg   = 3;      // 最小顶点间距
        this.streak.fastMode = false;  // 高精度模式
    }
    //#endregion

    /* ------------------ 4. 编辑器预览 ------------------ */
    //#region 4. 编辑器预览
    private togglePreview() {
        this.streak.preview = !this.streak.preview;
    }
    //#endregion

    /* ------------------ 5. 动态重置拖尾 ------------------ */
    //#region 5. 重置
    private resetTrail() {
        this.streak.reset();
    }
    //#endregion

    /* ------------------ 6. 运行时动态贴图 ------------------ */
    //#region 6. 动态贴图
    private loadTexture(path: string) {
        resources.load(path, Texture2D, (err, tex) => {
            if (!err) this.streak.texture = tex;
        });
    }
    //#endregion

    /* ------------------ 7. 生命周期 ------------------ */
    //#region 7. 生命周期
    protected start() {
        if (!this.streak) return;
        this.setupAppearance();
        this.setupBehavior();
        this.scheduleOnce(() => this.resetTrail(), 2); // 2 秒后重置
    }
    //#endregion
}