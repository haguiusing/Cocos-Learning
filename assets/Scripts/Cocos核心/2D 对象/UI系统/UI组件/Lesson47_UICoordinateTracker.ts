// Lesson47_UICoordinateTracker.ts

import { _decorator, Component, UICoordinateTracker, Node, Vec3, EventHandler, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson47_UICoordinateTracker
 * 演示 Cocos Creator 3.8 UICoordinateTracker 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson47_UICoordinateTracker')
export class Lesson47_UICoordinateTracker extends Component {

    /* ========================= 1. 获取/创建 UICoordinateTracker 组件 ========================= */
    // #region 获取/创建 UICoordinateTracker
    @property({ type: UICoordinateTracker })
    uiCoordinateTracker: UICoordinateTracker | null = null;

    /** 运行时动态创建或获取 UICoordinateTracker 组件 */
    getOrCreateUICoordinateTracker(): UICoordinateTracker | null {
        let uct = this.uiCoordinateTracker ?? this.getComponent(UICoordinateTracker);
        if (!uct) {
            uct = this.addComponent(UICoordinateTracker);
            log('动态添加 UICoordinateTracker 组件');
        }
        return uct;
    }
    // #endregion

    /* ========================= 2. 设置距离相机的显示距离 ========================= */
    // #region 设置显示距离
    setDistance(value: number) {
        const uct = this.getOrCreateUICoordinateTracker();
        if (!uct) return;

        uct.distance = value;
        log(`设置距离相机的显示距离为: ${value}`);
    }
    // #endregion

    /* ========================= 3. 添加映射数据事件 ========================= */
    // #region 添加映射数据事件
    addSyncEvent() {
        const uct = this.getOrCreateUICoordinateTracker();
        if (!uct) return;

        const handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'Lesson47_UICoordinateTracker';
        handler.handler = 'onCoordinateMapped';
        uct.syncEvents.push(handler);
    }

    onCoordinateMapped(localCoord: Vec3, distanceRatio: number) {
        this.targetNode.setPosition(localCoord);
        //this.targetNode.setScale(distanceRatio, distanceRatio, 1);
        log(`映射后的本地坐标: (${localCoord.x}, ${localCoord.y}, ${localCoord.z}), 距离相机比例: ${distanceRatio}`);
    }
    // #endregion

    /* ========================= 4. 设置目标节点 ========================= */
    // #region 设置目标节点
    @property({ type: Node })
    targetNode: Node | null = null;

    setTarget() {
        const uct = this.getOrCreateUICoordinateTracker();
        if (!uct || !this.targetNode) return;

        uct.target = this.targetNode;
        log(`目标节点已设置为: ${this.targetNode.name}`);
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setDistance(2); // 设置距离相机的显示距离
        this.addSyncEvent(); // 添加映射数据事件
        this.setTarget();    // 设置目标节点
    }
    // #endregion
}