// Lesson43_Slider.ts

import { _decorator, Component, Slider, EventHandler, Vec3, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson43_Slider
 * 演示 Cocos Creator 3.8 Slider 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson43_Slider')
export class Lesson43_Slider extends Component {

    /* ========================= 1. 获取/创建 Slider 组件 ========================= */
    // #region 获取/创建 Slider
    @property({ type: Slider })
    slider: Slider | null = null;

    /** 运行时动态创建或获取 Slider 组件 */
    getOrCreateSlider(): Slider | null {
        let s = this.slider ?? this.getComponent(Slider);
        if (!s) {
            s = this.addComponent(Slider);
            log('动态添加 Slider 组件');
        }
        return s;
    }
    // #endregion

    /* ========================= 2. 设置滑动方向 ========================= */
    // #region 设置滑动方向
    setHorizontalDirection() {
        const s = this.getOrCreateSlider();
        if (!s) return;

        // 设置为水平滑动
        s.direction = Slider.Direction.Horizontal;
    }

    setVerticalDirection() {
        const s = this.getOrCreateSlider();
        if (!s) return;

        // 设置为垂直滑动
        s.direction = Slider.Direction.Vertical;
    }
    // #endregion

    /* ========================= 3. 设置进度值 ========================= */
    // #region 设置进度值
    setProgress(value: number) {
        const s = this.getOrCreateSlider();
        if (!s) return;

        // 设置进度值（0~1）
        s.progress = Math.max(0, Math.min(1, value));
        log(`当前进度: ${s.progress}`);
    }
    // #endregion

    /* ========================= 4. 事件监听 ========================= */
    // #region 事件监听
    addSlideEvent() {
        const s = this.getOrCreateSlider();
        if (!s) return;

        // 添加滑动事件
        const handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'Lesson43_Slider';
        handler.handler = 'onSliderValueChanged';
        s.slideEvents.push(handler);
    }

    onSliderValueChanged(slider: Slider) {
        log(`滑块值已更改: ${slider.progress}`);
    }
    // #endregion

    /* ========================= 5. 获取滑块节点 ========================= */
    // #region 获取滑块节点
    getHandleNode() {
        const s = this.getOrCreateSlider();
        if (!s) return;

        const handleNode = s.handle.node;
        log(`滑块节点: ${handleNode.name}`);
    }
    // #endregion

    /* ========================= 6. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setHorizontalDirection(); // 设置为水平滑动
        this.setProgress(0.5);        // 设置初始进度为 50%
        this.addSlideEvent();         // 添加滑动事件
    }

    start() {
        // 演示：3 秒后将进度设置为 100%
        this.scheduleOnce(() => this.setProgress(1), 3);
    }
    // #endregion
}