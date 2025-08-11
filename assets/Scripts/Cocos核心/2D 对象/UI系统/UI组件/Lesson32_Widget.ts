// Lesson32_Widget.ts

import { _decorator, Component, Widget, Node, UITransform, sys, log, view } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 演示 Cocos Creator 3.8 Widget 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson32_Widget')
export class Lesson32_Widget extends Component {

    /* ========================= 1. 获取/添加 Widget 组件 ========================= */
    // #region 获取/添加 Widget 组件
    @property({ type: Widget })
    widget: Widget | null = null;

    /** 运行时动态添加/获取 Widget */
    addWidget() {
        // 方式1：直接获取
        let widget = this.getComponent(Widget);
        if (!widget) {
            // 方式2：动态添加
            widget = this.addComponent(Widget);
            log('已动态添加 Widget 组件');
        }
        return widget;
    }
    // #endregion

    /* ========================= 2. 基础对齐设置 ========================= */
    // #region 基础对齐
    setBasicAlignment() {
        const w = this.widget || this.addWidget();
        if (!w) return;

        // 居中
        w.isAlignHorizontalCenter = true;
        w.horizontalCenter = 0;

        w.isAlignVerticalCenter   = true;
        w.verticalCenter   = 0;

        // 贴边
        w.isAlignTop    = true;
        w.top    = 20;          // 距离顶部 20px
        w.isAlignBottom = false;

        w.isAlignLeft   = true;
        w.left   = 10;          // 距离左侧 10px
        w.isAlignRight  = false;

        // 立即刷新（下一帧才生效，除非手动调用）
        w.updateAlignment();
    }
    // #endregion

    /* ========================= 3. 拉伸适配 ========================= */
    // #region 拉伸适配
    stretchToParent() {
        const w = this.widget || this.addWidget();
        if (!w) return;

        // 水平拉伸
        w.isAlignLeft  = true;
        w.left   = 0;
        w.isAlignRight = true;
        w.right  = 0;

        // 垂直拉伸
        w.isAlignTop    = true;
        w.top    = 0;
        w.isAlignBottom = true;
        w.bottom = 0;

        // 检查拉伸状态
        log('当前是否水平拉伸:', w.isStretchWidth);
        log('当前是否垂直拉伸:', w.isStretchHeight);

        w.updateAlignment();
    }
    // #endregion

    /* ========================= 4. 百分比/像素混合 ========================= */
    // #region 百分比/像素混合
    mixPixelPercent() {
        const w = this.widget || this.addWidget();
        if (!w) return;

        // 左侧 10% 边距
        w.isAlignLeft = true;
        w.isAbsoluteLeft = false; // 使用百分比
        w.left = 0.1;             // 10%

        // 右侧固定 20px
        w.isAlignRight = true;
        w.isAbsoluteRight = true; // 使用像素
        w.right = 20;

        // 垂直居中
        w.isAlignVerticalCenter = true;
        w.isAbsoluteVerticalCenter = true;
        w.verticalCenter = 0;

        w.updateAlignment();
    }
    // #endregion

    /* ========================= 5. 指定对齐目标 ========================= */
    // #region 指定对齐目标
    alignToCustomTarget() {
        const w = this.widget || this.addWidget();
        if (!w) return;

        // 假设场景中有一个名为 "CustomTarget" 的节点
        const target = this.node.parent?.getChildByName('CustomTarget');
        if (target) {
            w.target = target;

            // 相对于目标节点右下对齐
            w.isAlignRight  = true;
            w.right  = 0;
            w.isAlignBottom = true;
            w.bottom = 0;

            w.updateAlignment();
        }
    }
    // #endregion

    /* ========================= 6. 运行时动态更新 ========================= */
    // #region 运行时动态更新
    updateByScreenSize() {
        const w = this.widget || this.addWidget();
        if (!w) return;

        const visible = view.getVisibleSize();
        if (visible.width < 720) {
            // 小屏：缩小边距
            w.left = w.right = 5;
        } else {
            // 大屏：放大边距
            w.left = w.right = 30;
        }
        w.updateAlignment();
    }
    // #endregion

    /* ========================= 7. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 初始化一次
        this.setBasicAlignment();
    }

    start() {
        // 根据平台差异化处理
        if (sys.isMobile) {
            this.mixPixelPercent();
        }
    }

    onEnable() {
        // 注册窗口大小改变事件（如需）
        // view.on('design-resolution-changed', this.updateByScreenSize, this);
    }

    onDisable() {
        // view.off('design-resolution-changed', this.updateByScreenSize, this);
    }
    // #endregion
}