// Lesson34_Layout.ts

import { _decorator, Component, Layout, Node, Prefab, instantiate, Size, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson34_Layout
 * 演示 Cocos Creator 3.8 Layout 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson34_Layout')
export class Lesson34_Layout extends Component {

    /* ========================= 1. 获取/创建 Layout 组件 ========================= */
    // #region 获取/创建 Layout
    @property({ type: Layout })
    layout: Layout | null = null;

    /** 运行时动态创建或获取 Layout 组件 */
    getOrCreateLayout(): Layout | null {
        let lt = this.layout ?? this.getComponent(Layout);
        if (!lt) {
            lt = this.addComponent(Layout);
            log('动态添加 Layout 组件');
        }
        return lt;
    }
    // #endregion

    /* ========================= 2. 水平布局示例 ========================= */
    // #region 水平布局
    createHorizontalLayout() {
        const lt = this.getOrCreateLayout();
        if (!lt) return;

        lt.type = Layout.Type.HORIZONTAL;               // 水平排列
        lt.resizeMode = Layout.ResizeMode.CONTAINER;    // 容器自适应子节点
        lt.spacingX = 20;                               // 水平间距
        lt.paddingLeft = 10;
        lt.paddingRight = 10;

        // 排列方向
        lt.horizontalDirection = Layout.HorizontalDirection.LEFT_TO_RIGHT;
    }
    // #endregion

    /* ========================= 3. 垂直布局示例 ========================= */
    // #region 垂直布局
    createVerticalLayout() {
        const lt = this.getOrCreateLayout();
        if (!lt) return;

        lt.type = Layout.Type.VERTICAL;                 // 垂直排列
        lt.resizeMode = Layout.ResizeMode.CONTAINER;
        lt.spacingY = 15;                               // 垂直间距
        lt.paddingTop = 10;
        lt.paddingBottom = 10;

        // 排列方向
        lt.verticalDirection = Layout.VerticalDirection.TOP_TO_BOTTOM;
    }
    // #endregion

    /* ========================= 4. 网格布局示例 ========================= */
    // #region 网格布局
    createGridLayout() {
        const lt = this.getOrCreateLayout();
        if (!lt) return;

        lt.type = Layout.Type.GRID;
        lt.resizeMode = Layout.ResizeMode.CONTAINER;
        lt.startAxis = Layout.AxisDirection.HORIZONTAL; // 先行后列
        lt.spacingX = 20;
        lt.spacingY = 20;
        lt.cellSize = new Size(100, 100);               // 每个格子大小

        // 约束：固定列数
        lt.constraint = Layout.Constraint.FIXED_COL;
        lt.constraintNum = 3;
    }
    // #endregion

    /* ========================= 5. 动态添加子节点并立即刷新 ========================= */
    // #region 动态添加子节点
    @property({ type: Prefab })
    itemPrefab: Prefab | null = null;

    addChildAndRefresh(count = 5) {
        const lt = this.getOrCreateLayout();
        if (!lt || !this.itemPrefab) return;

        for (let i = 0; i < count; ++i) {
            const item = instantiate(this.itemPrefab);
            item.name = `Item${i}`;
            this.node.addChild(item);
        }
        // 立即更新布局，避免等待下一帧
        lt.updateLayout(true);
    }
    // #endregion

    /* ========================= 6. 运行时动态调整间距与边距 ========================= */
    // #region 动态调整边距/间距
    setSpacingAndPadding(spacing: number, padding: number) {
        const lt = this.getOrCreateLayout();
        if (!lt) return;

        // 统一设置四个方向的内边距
        lt.padding = padding;

        // 根据布局类型设置间距
        if (lt.type === Layout.Type.HORIZONTAL) {
            lt.spacingX = spacing;
        } else if (lt.type === Layout.Type.VERTICAL) {
            lt.spacingY = spacing;
        } else if (lt.type === Layout.Type.GRID) {
            lt.spacingX = lt.spacingY = spacing;
        }

        lt.updateLayout(true);
    }
    // #endregion

    /* ========================= 7. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 初始化布局
        this.createHorizontalLayout();
    }

    start() {
        // 演示：启动后动态添加 3 个节点
        this.scheduleOnce(() => this.addChildAndRefresh(3), 1);
    }
    // #endregion
}