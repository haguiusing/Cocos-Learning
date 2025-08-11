// Lesson49_UISkew.ts

import { _decorator, Component, UISkew, Vec2, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson49_UISkew
 * 演示 Cocos Creator 3.8 UISkew 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson49_UISkew')
export class Lesson49_UISkew extends Component {

    /* ========================= 1. 获取/创建 UISkew 组件 ========================= */
    // #region 获取/创建 UISkew
    @property({ type: UISkew })
    uiSkew: UISkew | null = null;

    /** 运行时动态创建或获取 UISkew 组件 */
    getOrCreateUISkew(): UISkew | null {
        let skew = this.uiSkew ?? this.getComponent(UISkew);
        if (!skew) {
            skew = this.addComponent(UISkew);
            log('动态添加 UISkew 组件');
        }
        return skew;
    }
    // #endregion

    /* ========================= 2. 设置斜切角度 ========================= */
    // #region 设置斜切角度
    setSkew(x: number, y: number) {
        const skew = this.getOrCreateUISkew();
        if (!skew) return;

        skew.skew = new Vec2(x, y);
        log(`斜切角度已设置为: X=${x}, Y=${y}`);
    }
    // #endregion

    /* ========================= 3. 获取斜切角度 ========================= */
    // #region 获取斜切角度
    getSkew(out: Vec2 = new Vec2()) {
        const skew = this.getOrCreateUISkew();
        if (!skew) return out;

        return skew.getSkew(out);
    }
    // #endregion

    /* ========================= 4. 动态调整斜切角度 ========================= */
    // #region 动态调整斜切角度
    skewOverTime(duration: number, targetSkew: Vec2) {
        const skew = this.getOrCreateUISkew();
        if (!skew) return;

        const startSkew = skew.skew.clone();
        let elapsed = 0;
        this.schedule((dt) => {
            elapsed += dt;
            const t = Math.min(elapsed / duration, 1);
            skew.skew = startSkew.lerp(targetSkew, t);
            if (t >= 1) {
                this.unscheduleAllCallbacks();
                log('斜切动画完成');
            }
        }, 0, 0, 0);
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setSkew(10, 20); // 初始化斜切角度
    }

    start() {
        // 演示：3 秒后斜切角度变为 (30, 40)
        this.scheduleOnce(() => this.skewOverTime(2, new Vec2(30, 40)), 3);
    }
    // #endregion
}