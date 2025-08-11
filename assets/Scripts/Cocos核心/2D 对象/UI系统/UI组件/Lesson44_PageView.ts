// Lesson44_PageView.ts

import { _decorator, Component, PageView, EventHandler, Node, Vec3, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson44_PageView
 * 演示 Cocos Creator 3.8 PageView 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson44_PageView')
export class Lesson44_PageView extends Component {

    /* ========================= 1. 获取/创建 PageView 组件 ========================= */
    // #region 获取/创建 PageView
    @property({ type: PageView })
    pageView: PageView | null = null;

    /** 运行时动态创建或获取 PageView 组件 */
    getOrCreatePageView(): PageView | null {
        let pv = this.pageView ?? this.getComponent(PageView);
        if (!pv) {
            pv = this.addComponent(PageView);
            log('动态添加 PageView 组件');
        }
        return pv;
    }
    // #endregion

    /* ========================= 2. 设置滚动方向 ========================= */
    // #region 设置滚动方向
    setHorizontalScroll() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.direction = PageView.Direction.HORIZONTAL;
    }

    setVerticalScroll() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.direction = PageView.Direction.VERTICAL;
    }
    // #endregion

    /* ========================= 3. 设置页面大小模式 ========================= */
    // #region 设置页面大小模式
    setUnifiedSizeMode() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.sizeMode = PageView.SizeMode.Unified;
    }

    setFreeSizeMode() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.sizeMode = PageView.SizeMode.Free;
    }
    // #endregion

    /* ========================= 4. 添加/移除页面 ========================= */
    // #region 添加/移除页面
    @property({ type: Node })
    pageNode: Node | null = null;

    addPage() {
        const pv = this.getOrCreatePageView();
        if (!pv || !this.pageNode) return;

        pv.addPage(this.pageNode);
        log('页面已添加');
    }

    removePageAtIndex(index: number) {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.removePageAtIndex(index);
        log(`移除第 ${index} 页`);
    }

    removeAllPages() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.removeAllPages();
        log('所有页面已移除');
    }
    // #endregion

    /* ========================= 5. 滚动到指定页面 ========================= */
    // #region 滚动到指定页面
    scrollToPage(index: number, duration = 0.3) {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.scrollToPage(index, duration);
        log(`滚动到第 ${index} 页，耗时 ${duration} 秒`);
    }
    // #endregion

    /* ========================= 6. 设置当前页面索引 ========================= */
    // #region 设置当前页面索引
    setCurrentPageIndex(index: number) {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        pv.setCurrentPageIndex(index);
        log(`当前页面索引已设置为 ${index}`);
    }
    // #endregion

    /* ========================= 7. 获取当前页面索引 ========================= */
    // #region 获取当前页面索引
    getCurrentPageIndex() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        const index = pv.getCurrentPageIndex();
        log(`当前页面索引: ${index}`);
    }
    // #endregion

    /* ========================= 8. 事件监听 ========================= */
    // #region 事件监听
    addPageTurningEvent() {
        const pv = this.getOrCreatePageView();
        if (!pv) return;

        const handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'Lesson44_PageView';
        handler.handler = 'onPageTurning';
        pv.pageEvents.push(handler);
    }

    onPageTurning(event: PageView, customData: any) {
        log(`页面翻转事件: 当前索引 ${event.getCurrentPageIndex()}, 自定义数据: ${customData}`);
    }
    // #endregion

    /* ========================= 9. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setHorizontalScroll(); // 设置为水平滚动
        this.setUnifiedSizeMode();  // 设置为统一大小模式
        this.addPageTurningEvent(); // 添加页面翻转事件
    }

    start() {
        // 演示：3 秒后滚动到第 2 页
        this.scheduleOnce(() => this.scrollToPage(2), 3);
    }
    // #endregion
}