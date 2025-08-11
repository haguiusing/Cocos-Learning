// Lesson42_ToggleContainer.ts

import { _decorator, Component, Toggle, ToggleContainer, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson42_ToggleContainer
 * 演示 Cocos Creator 3.8 ToggleContainer 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson42_ToggleContainer')
export class Lesson42_ToggleContainer extends Component {

    /* ========================= 1. 获取/创建 ToggleContainer 组件 ========================= */
    // #region 获取/创建 ToggleContainer
    @property({ type: ToggleContainer })
    toggleContainer: ToggleContainer | null = null;

    /** 运行时动态创建或获取 ToggleContainer 组件 */
    getOrCreateToggleContainer(): ToggleContainer | null {
        let tc = this.toggleContainer ?? this.getComponent(ToggleContainer);
        if (!tc) {
            tc = this.addComponent(ToggleContainer);
            log('动态添加 ToggleContainer 组件');
        }
        return tc;
    }
    // #endregion

    /* ========================= 2. 设置允许取消选中 ========================= */
    // #region 设置允许取消选中
    setAllowSwitchOff(value: boolean) {
        const tc = this.getOrCreateToggleContainer();
        if (!tc) return;

        tc.allowSwitchOff = value;
        log(`允许取消选中: ${value}`);
    }
    // #endregion

    /* ========================= 3. 添加/移除 Toggle ========================= */
    // #region 添加/移除 Toggle
    @property({ type: Toggle })
    toggleToAdd: Toggle | null = null;

    addToggle() {
        const tc = this.getOrCreateToggleContainer();
        if (!tc || !this.toggleToAdd) return;

        tc.node.addChild(this.toggleToAdd.node);
        log('添加 Toggle 到 ToggleContainer');
    }

    removeToggle() {
        const tc = this.getOrCreateToggleContainer();
        if (!tc || !this.toggleToAdd) return;

        this.toggleToAdd.node.removeFromParent();
        log('从 ToggleContainer 移除 Toggle');
    }
    // #endregion

    /* ========================= 4. 刷新状态 ========================= */
    // #region 刷新状态
    notifyToggleCheck() {
        const tc = this.getOrCreateToggleContainer();
        if (!tc) return;

        tc.notifyToggleCheck(this.toggleToAdd);
        log('刷新 Toggle 状态');
    }

    ensureValidState() {
        const tc = this.getOrCreateToggleContainer();
        if (!tc) return;

        tc.ensureValidState();
        log('确保状态有效');
    }
    // #endregion

    /* ========================= 5. 获取当前选中的 Toggle ========================= */
    // #region 获取当前选中的 Toggle
    getActiveToggles() {
        const tc = this.getOrCreateToggleContainer();
        if (!tc) return;

        const activeToggles = tc.activeToggles();
        log(`当前选中的 Toggle 数量: ${activeToggles.length}`);
    }
    // #endregion

    /* ========================= 6. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setAllowSwitchOff(true); // 初始化允许取消选中
        this.addToggle();            // 添加 Toggle
    }

    start() {
        // 演示：3 秒后刷新状态
        this.scheduleOnce(() => this.notifyToggleCheck(), 3);
    }
    // #endregion
}