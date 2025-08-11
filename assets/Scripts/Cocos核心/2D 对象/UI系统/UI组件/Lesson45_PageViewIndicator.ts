// Lesson45_PageViewIndicator.ts

import { _decorator, Component, PageViewIndicator, PageView, Node, log, Size } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson45_PageViewIndicator
 * 演示 Cocos Creator 3.8 PageViewIndicator 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson45_PageViewIndicator')
export class Lesson45_PageViewIndicator extends Component {

    /* ========================= 1. 获取/创建 PageViewIndicator 组件 ========================= */
    // #region 获取/创建 PageViewIndicator
    @property({ type: PageViewIndicator })
    pageViewIndicator: PageViewIndicator | null = null;

    /** 运行时动态创建或获取 PageViewIndicator 组件 */
    getOrCreatePageViewIndicator(): PageViewIndicator | null {
        let pvi = this.pageViewIndicator ?? this.getComponent(PageViewIndicator);
        if (!pvi) {
            pvi = this.addComponent(PageViewIndicator);
            log('动态添加 PageViewIndicator 组件');
        }
        return pvi;
    }
    // #endregion

    /* ========================= 2. 设置指示器方向 ========================= */
    // #region 设置指示器方向
    setHorizontalDirection() {
        const pvi = this.getOrCreatePageViewIndicator();
        if (!pvi) return;

        pvi.direction = PageViewIndicator.Direction.HORIZONTAL;
        log('指示器方向已设置为水平');
    }

    setVerticalDirection() {
        const pvi = this.getOrCreatePageViewIndicator();
        if (!pvi) return;

        pvi.direction = PageViewIndicator.Direction.VERTICAL;
        log('指示器方向已设置为垂直');
    }
    // #endregion

    /* ========================= 3. 设置指示器样式 ========================= */
    // #region 设置指示器样式
    @property({ type: Node })
    indicatorNodePrefab: Node | null = null;

    setIndicatorStyle() {
        //源码是通过创建Node实现，
        //所以无法通过自定义指示器节点的 Prefab 设置IndicatorStyle

        // const pvi = this.getOrCreatePageViewIndicator();
        // if (!pvi || !this.indicatorNodePrefab) return;

        // // 设置指示器节点的 Prefab
        // pvi.indicatorNodePrefab = this.indicatorNodePrefab;
        // log('指示器样式已设置');
    }
    // #endregion

    /* ========================= 4. 设置页面视图 ========================= */
    // #region 设置页面视图
    @property({ type: PageView })
    pageView: PageView | null = null;

    setPageView() {
        const pvi = this.getOrCreatePageViewIndicator();
        if (!pvi || !this.pageView) return;

        pvi.setPageView(this.pageView);
        log('页面视图已设置');
    }
    // #endregion

    /* ========================= 5. 设置指示器间距与大小 ========================= */
    // #region 设置指示器间距与大小
    setSpacingAndSize(spacing: number, size: number) {
        const pvi = this.getOrCreatePageViewIndicator();
        if (!pvi) return;

        pvi.spacing = spacing; // 设置指示器间距
        pvi.cellSize = new Size(size, size); // 设置指示器大小
        log(`指示器间距: ${spacing}, 大小: ${size}`);
    }
    // #endregion

    /* ========================= 6. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setHorizontalDirection(); // 设置为水平方向
        this.setSpacingAndSize(10, 20); // 设置间距为 10，大小为 20
        this.setPageView();            // 关联 PageView
    }

    start() {
        // 演示：3 秒后更新指示器样式
        this.scheduleOnce(() => this.setIndicatorStyle(), 3);
    }
    // #endregion
}