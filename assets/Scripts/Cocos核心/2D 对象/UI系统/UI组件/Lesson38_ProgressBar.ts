// Lesson38_ProgressBar.ts

import { _decorator, Component, ProgressBar, Sprite, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson38_ProgressBar
 * 演示 Cocos Creator 3.8 ProgressBar 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson38_ProgressBar')
export class Lesson38_ProgressBar extends Component {

    /* ========================= 1. 获取/创建 ProgressBar 组件 ========================= */
    // #region 获取/创建 ProgressBar
    @property({ type: ProgressBar })
    progressBar: ProgressBar | null = null;

    /** 运行时获取或动态创建 ProgressBar */
    getOrCreateProgressBar(): ProgressBar | null {
        let pb = this.progressBar ?? this.getComponent(ProgressBar);
        if (!pb) {
            pb = this.addComponent(ProgressBar);
            log('动态添加 ProgressBar 组件');
        }
        return pb;
    }
    // #endregion

    /* ========================= 2. 设置进度值 ========================= */
    // #region 设置进度值
    setProgress(value: number) {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        // 限定在 0~1 区间
        pb.progress = Math.max(0, Math.min(1, value));
        log(`当前进度: ${(pb.progress * 100).toFixed(1)}%`);
    }

    /** 从 0 递增到 1 的示例 */
    simulateLoading(totalTime = 3) {
        let elapsed = 0;
        this.schedule(dt => {
            elapsed += dt;
            const p = Math.min(1, elapsed / totalTime);
            this.setProgress(p);
            if (p >= 1) this.unscheduleAllCallbacks();
        });
    }
    // #endregion

    /* ========================= 3. 设置方向与模式 ========================= */
    // #region 方向与模式
    setHorizontalMode() {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        pb.mode = ProgressBar.Mode.HORIZONTAL;
        pb.reverse = false; // 从左到右
    }

    setVerticalMode(reverse = false) {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        pb.mode = ProgressBar.Mode.VERTICAL;
        pb.reverse = reverse; // 默认从上到下，reverse=true 则从下到上
    }

    setRadialMode() {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        pb.mode = ProgressBar.Mode.FILLED; // 径向/环形进度

    }
    // #endregion

    /* ========================= 4. 设置进度条长度 ========================= */
    // #region 总长度
    setTotalLength(len: number) {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        pb.totalLength = len; // 像素长度
    }
    // #endregion

    /* ========================= 5. 设置/替换 barSprite ========================= */
    // #region 进度条 Sprite
    @property({ type: Sprite })
    barSprite: Sprite | null = null;

    setBarSprite() {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        if (this.barSprite) pb.barSprite = this.barSprite;
    }
    // #endregion

    /* ========================= 6. 反转方向 ========================= */
    // #region 反转
    toggleReverse() {
        const pb = this.getOrCreateProgressBar();
        if (!pb) return;

        pb.reverse = !pb.reverse;
        log(`reverse = ${pb.reverse}`);
    }
    // #endregion

    /* ========================= 7. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setHorizontalMode();
        this.setTotalLength(200);
        this.simulateLoading(2);
    }
    // #endregion
}