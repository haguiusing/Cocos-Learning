// Lesson41_Toggle.ts

import { _decorator, Component, Toggle, EventHandler, log, Node, Sprite, ToggleContainer } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson41_Toggle
 * 演示 Cocos Creator 3.8 Toggle 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson41_Toggle')
export class Lesson41_Toggle extends Component {

    /* ========================= 1. 获取/创建 Toggle 组件 ========================= */
    // #region 获取/创建 Toggle
    @property({ type: Toggle })
    toggle: Toggle | null = null;

    /** 运行时动态创建或获取 Toggle 组件 */
    getOrCreateToggle(): Toggle | null {
        let t = this.toggle ?? this.getComponent(Toggle);
        if (!t) {
            t = this.addComponent(Toggle);
            log('动态添加 Toggle 组件');
        }
        return t;
    }
    // #endregion

    /* ========================= 2. 设置选中状态 ========================= */
    // #region 设置选中状态
    setChecked(value: boolean) {
        const t = this.getOrCreateToggle();
        if (!t) return;

        // 直接设置选中状态
        t.isChecked = value;
        log(`当前选中状态: ${t.isChecked}`);
    }

    /** 切换选中状态 */
    toggleChecked() {
        const t = this.getOrCreateToggle();
        if (!t) return;

        t.isChecked = !t.isChecked;
        log(`选中状态已切换为: ${t.isChecked}`);
    }
    // #endregion

    /* ========================= 3. 设置选中图标 ========================= */
    // #region 设置选中图标
    @property({ type: Node })
    checkMarkNode: Node | null = null;

    setCheckMark() {
        const t = this.getOrCreateToggle();
        if (!t) return;

        // 设置选中图标节点
        if (this.checkMarkNode) {
            t.checkMark = this.checkMarkNode.getComponent(Sprite);
        }
    }
    // #endregion

    /* ========================= 4. 事件监听 ========================= */
    // #region 事件监听
    addCheckEvent() {
        const t = this.getOrCreateToggle();
        if (!t) return;

        // 添加选中事件
        const handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'Lesson41_Toggle';
        handler.handler = 'onToggleChecked';
        t.checkEvents.push(handler);
    }

    onToggleChecked(toggle: Toggle) {
        log(`Toggle 被选中: ${toggle.isChecked}`);
    }
    // #endregion

    /* ========================= 5. 设置为单选按钮（与 ToggleGroup 配合） ========================= */
    // #region 单选按钮
    @property({ type: Node })
    toggleGroupNode: Node | null = null;

    setAsRadioButton() {
        const t = this.getOrCreateToggle();
        if (!t) return;

        // 将 Toggle 添加到 ToggleGroup 中
        if (this.toggleGroupNode) {
            const group = this.toggleGroupNode.getComponent(ToggleContainer);
            if (group) {
                t.node.removeFromParent();
                group.node.addChild(t.node);
            }
        }
    }
    // #endregion

    /* ========================= 6. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setChecked(true); // 初始化为选中状态
        this.addCheckEvent();  // 添加事件监听
    }

    start() {
        // 演示：3 秒后切换选中状态
        this.scheduleOnce(() => this.toggleChecked(), 3);
    }
    // #endregion
}