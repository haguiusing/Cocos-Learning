// Lesson37_ScrollBar.ts

import { _decorator, Component, ScrollBar, ScrollView, Sprite, Node, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson37_ScrollBar
 * 演示 Cocos Creator 3.8 ScrollBar 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson37_ScrollBar')
export class Lesson37_ScrollBar extends Component {

    /* ========================= 1. 获取 ScrollBar 组件 ========================= */
    // #region 获取 ScrollBar
    @property({ type: ScrollBar })
    scrollBar: ScrollBar | null = null;

    /** 运行时获取或动态创建 ScrollBar 组件 */
    getOrCreateScrollBar(): ScrollBar | null {
        let sb = this.scrollBar ?? this.getComponent(ScrollBar);
        if (!sb) {
            sb = this.addComponent(ScrollBar);
            log('动态添加 ScrollBar 组件');
        }
        return sb;
    }
    // #endregion

    /* ========================= 2. 设置滚动方向 ========================= */
    // #region 滚动方向
    setDirection() {
        const sb = this.getOrCreateScrollBar();
        if (!sb) return;

        // 垂直滚动
        sb.direction = ScrollBar.Direction.VERTICAL;

        // 水平滚动
        // sb.direction = ScrollBar.Direction.HORIZONTAL;
    }
    // #endregion

    /* ========================= 3. 设置滚动滑块 ========================= */
    // #region 滚动滑块
    @property({ type: Sprite })
    handleSprite: Sprite | null = null;

    setHandle() {
        const sb = this.getOrCreateScrollBar();
        if (!sb) return;

        // 设置滑块节点（需挂载 Sprite）
        if (this.handleSprite) {
            sb.handle = this.handleSprite;
        }
    }
    // #endregion

    /* ========================= 4. 自动隐藏 ========================= */
    // #region 自动隐藏
    toggleAutoHide() {
        const sb = this.getOrCreateScrollBar();
        if (!sb) return;

        sb.enableAutoHide = true;       // 开启自动隐藏
        sb.autoHideTime = 2;            // 2 秒后隐藏
    }

    /** 立即隐藏 */
    hideNow() {
        const sb = this.getOrCreateScrollBar();
        sb?.hide();
    }

    /** 立即显示 */
    showNow() {
        const sb = this.getOrCreateScrollBar();
        sb?.show();
    }
    // #endregion

    /* ========================= 5. 关联到 ScrollView ========================= */
    // #region 关联 ScrollView
    @property({ type: ScrollView })
    scrollView: ScrollView | null = null;

    bindToScrollView() {
        const sb = this.getOrCreateScrollBar();
        if (!sb || !this.scrollView) return;

        // 将 ScrollBar 绑定到 ScrollView
        sb.setScrollView(this.scrollView);
    }
    // #endregion

    /* ========================= 6. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setDirection();
        this.setHandle();
        this.toggleAutoHide();
        this.bindToScrollView();
    }

    start() {
        // 演示：5 秒后自动隐藏
        this.scheduleOnce(() => this.hideNow(), 5);
    }
    // #endregion
}