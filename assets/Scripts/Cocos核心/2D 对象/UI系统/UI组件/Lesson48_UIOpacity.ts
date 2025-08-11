// Lesson48_UIOpacity.ts

import { _decorator, Component, UIOpacity, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson48_UIOpacity
 * 演示 Cocos Creator 3.8 UIOpacity 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson48_UIOpacity')
export class Lesson48_UIOpacity extends Component {

    /* ========================= 1. 获取/创建 UIOpacity 组件 ========================= */
    // #region 获取/创建 UIOpacity
    @property({ type: UIOpacity })
    uiOpacity: UIOpacity | null = null;

    /** 运行时动态创建或获取 UIOpacity 组件 */
    getOrCreateUIOpacity(): UIOpacity | null {
        let uiOpacity = this.uiOpacity ?? this.getComponent(UIOpacity);
        if (!uiOpacity) {
            uiOpacity = this.addComponent(UIOpacity);
            log('动态添加 UIOpacity 组件');
        }
        return uiOpacity;
    }
    // #endregion

    /* ========================= 2. 设置透明度 ========================= */
    // #region 设置透明度
    setOpacity(value: number) {
        const uiOpacity = this.getOrCreateUIOpacity();
        if (!uiOpacity) return;

        // 设置透明度（0-255）
        uiOpacity.opacity = Math.max(0, Math.min(255, value));
        log(`透明度已设置为: ${uiOpacity.opacity}`);
    }
    // #endregion

    /* ========================= 3. 获取当前透明度 ========================= */
    // #region 获取透明度
    getOpacity() {
        const uiOpacity = this.getOrCreateUIOpacity();
        if (!uiOpacity) return;

        const opacity = uiOpacity.opacity;
        log(`当前透明度: ${opacity}`);
        return opacity;
    }
    // #endregion

    /* ========================= 4. 动态改变透明度 ========================= */
    // #region 动态改变透明度
    fadeOut(duration: number) {
        const uiOpacity = this.getOrCreateUIOpacity();
        if (!uiOpacity) return;

        // 逐渐变透明
        this.schedule((dt) => {
            uiOpacity.opacity -= 255 * dt / duration;
            if (uiOpacity.opacity <= 0) {
                this.unscheduleAllCallbacks();
                uiOpacity.opacity = 0;
                log('完全透明');
            }
        }, 0, 0, 0);
    }

    fadeIn(duration: number) {
        const uiOpacity = this.getOrCreateUIOpacity();
        if (!uiOpacity) return;

        // 逐渐变不透明
        this.schedule((dt) => {
            uiOpacity.opacity += 255 * dt / duration;
            if (uiOpacity.opacity >= 255) {
                this.unscheduleAllCallbacks();
                uiOpacity.opacity = 255;
                log('完全不透明');
            }
        }, 0, 0, 0);
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setOpacity(128); // 初始化透明度为半透明
    }

    start() {
        // 演示：3 秒后逐渐变透明
        this.scheduleOnce(() => this.fadeOut(2), 3);
    }
    // #endregion
}