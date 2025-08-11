// Lesson39_LabelOutline.ts

import { _decorator, Component, LabelOutline, Label, Color, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson39_LabelOutline
 * 演示 Cocos Creator 3.8 **LabelOutline** 组件的常见 API 用法
 * ⚠️ 注意：LabelOutline 自 v3.8.2 起已废弃，请改用 Label.enableOutline。
 * 本脚本同时给出新旧两种写法，方便迁移。
 */
@ccclass('Lesson39_LabelOutline')
export class Lesson39_LabelOutline extends Component {

    /* ========================= 1. 获取/创建 LabelOutline（旧写法） ========================= */
    // #region 获取/创建 LabelOutline
    @property({ type: LabelOutline, tooltip: '已废弃，仅作演示' })
    labelOutline: LabelOutline | null = null;

    /** 运行时动态创建 LabelOutline（旧写法） */
    getOrCreateLabelOutline(): LabelOutline | null {
        let ol = this.labelOutline ?? this.getComponent(LabelOutline);
        if (!ol) {
            ol = this.addComponent(LabelOutline);
            log('动态添加 LabelOutline 组件（已废弃）');
        }
        return ol;
    }
    // #endregion

    /* ========================= 2. 旧 API 设置描边宽度与颜色 ========================= */
    // #region 旧 API 设置
    /** 使用已废弃的 LabelOutline 设置描边 */
    setByLabelOutline() {
        const ol = this.getOrCreateLabelOutline();
        if (!ol) return;

        // 已废弃的属性
        ol.width = 3;                   // 描边宽度
        ol.color = Color.BLACK;         // 描边颜色
        log('通过 LabelOutline 设置描边（已废弃）');
    }
    // #endregion

    /* ========================= 3. 新 API：使用 Label.enableOutline ========================= */
    // #region 新 API 设置
    @property({ type: Label })
    label: Label | null = null;

    /** 通过 Label.enableOutline 设置描边（推荐） */
    setByLabelEnableOutline() {
        const lbl = this.label ?? this.getComponent(Label);
        if (!lbl) return;

        lbl.enableOutline = true;                // 开启描边
        lbl.outlineColor = Color.RED;            // 描边颜色
        lbl.outlineWidth = 4;                    // 描边宽度
        log('通过 Label.enableOutline 设置描边（推荐）');
    }

    /** 关闭描边 */
    disableOutline() {
        const lbl = this.label ?? this.getComponent(Label);
        if (lbl) lbl.enableOutline = false;
    }
    // #endregion

    /* ========================= 4. 动态切换描边样式 ========================= */
    // #region 动态切换
    toggleOutlineStyle() {
        const lbl = this.label ?? this.getComponent(Label);
        if (!lbl) return;

        // 每次点击切换不同颜色
        if (lbl.enableOutline) {
            lbl.outlineColor = lbl.outlineColor.equals(Color.RED) ? Color.GREEN : Color.RED;
            lbl.outlineWidth = Math.random() * 5 + 1;
        } else {
            this.setByLabelEnableOutline();
        }
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 旧写法（兼容老项目）
        this.setByLabelOutline();

        // 新写法（推荐）
        this.setByLabelEnableOutline();
    }

    start() {
        // 演示：2 秒后切换一次描边样式
        this.scheduleOnce(() => this.toggleOutlineStyle(), 2);
    }
    // #endregion
}