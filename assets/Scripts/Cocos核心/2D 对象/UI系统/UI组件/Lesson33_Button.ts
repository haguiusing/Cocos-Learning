// Lesson33_Button.ts

import { _decorator, Component, Button, EventHandler, Sprite, Color, SpriteFrame, Node, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson33_Button
 * 演示 Cocos Creator 3.8 Button 组件的常用 API 与使用方式
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson33_Button')
export class Lesson33_Button extends Component {

    /* ========================= 1. 获取 Button 组件 ========================= */
    // #region 获取 Button 组件
    @property({ type: Button })
    button: Button | null = null;

    /** 运行时动态获取或创建 Button 组件 */
    getOrCreateButton(): Button | null {
        // 方式 1：直接获取
        let btn = this.getComponent(Button);
        if (!btn) {
            // 方式 2：动态添加
            btn = this.addComponent(Button);
            log('动态添加 Button 组件完成');
        }
        return btn;
    }
    // #endregion

    /* ========================= 2. 开关按钮交互 ========================= */
    // #region 开关按钮交互
    toggleInteractable() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        // 关闭交互
        btn.interactable = false;
        log('按钮已禁用');

        // 延迟 2 秒后恢复
        this.scheduleOnce(() => {
            btn.interactable = true;
            log('按钮已恢复交互');
        }, 2);
    }
    // #endregion

    /* ========================= 3. 设置颜色过渡 ========================= */
    // #region 颜色过渡
    setColorTransition() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        // 启用 Color 过渡
        btn.transition = Button.Transition.COLOR;

        // 设置各状态颜色
        btn.normalColor   = Color.WHITE;
        btn.pressedColor  = Color.GRAY;
        btn.hoverColor    = new Color(200, 200, 200);
        btn.disabledColor = new Color(100, 100, 100, 150);

        // 过渡时长
        btn.duration = 0.15;
    }
    // #endregion

    /* ========================= 4. 设置精灵过渡 ========================= */
    // #region 精灵过渡
    @property({ type: SpriteFrame })
    normalSF: SpriteFrame | null = null;
    @property({ type: SpriteFrame })
    pressedSF: SpriteFrame | null = null;

    setSpriteTransition() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        btn.transition = Button.Transition.SPRITE;

        // 必须指定 target（通常是背景 Sprite 节点）
        const target = btn.target || this.node;
        const sp = target.getComponent(Sprite);
        if (!sp) {
            log('请先给 target 节点添加 Sprite 组件');
            return;
        }

        btn.normalSprite  = this.normalSF;
        btn.pressedSprite = this.pressedSF;
    }
    // #endregion

    /* ========================= 5. 设置缩放过渡 ========================= */
    // #region 缩放过渡
    setScaleTransition() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        btn.transition = Button.Transition.SCALE;

        // 点击时缩放到原始 scale * zoomScale
        btn.zoomScale = 0.9;   // 缩小 10 %
        btn.duration  = 0.1;   // 动画时长 0.1 秒
    }
    // #endregion

    /* ========================= 6. 事件监听（方式 1：EventHandler） ========================= */
    // #region 事件监听 - EventHandler
    addClickEventHandler() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        // 清空旧事件
        btn.clickEvents.length = 0;

        const handler = new EventHandler();
        handler.target        = this.node;           // 事件处理脚本所在节点
        handler.component     = 'Lesson33_Button';   // 脚本类名（需与文件名保持一致）
        handler.handler       = 'onButtonClick';     // 回调方法
        handler.customEventData = '自定义数据';        // 额外参数

        btn.clickEvents.push(handler);
    }

    onButtonClick(event: Event, customData: string) {
        log('按钮被点击！', customData);
    }
    // #endregion

    /* ========================= 7. 事件监听（方式 2：node.on） ========================= */
    // #region 事件监听 - node.on
    addClickListener() {
        const btn = this.button || this.getOrCreateButton();
        if (!btn) return;

        // 先移除旧监听防止重复
        btn.node.off(Button.EventType.CLICK, this.onSimpleClick, this);
        btn.node.on(Button.EventType.CLICK, this.onSimpleClick, this);
    }

    onSimpleClick(button: Button) {
        log('简单监听：按钮被点击', button.name);
    }
    // #endregion

    /* ========================= 8. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 初始化按钮
        this.setColorTransition();
        this.addClickEventHandler();
        this.addClickListener();
    }

    start() {
        // 演示：5 秒后禁用按钮
        this.scheduleOnce(() => {
            this.toggleInteractable();
        }, 5);
    }
    // #endregion
}