// Lesson40_LabelShadow.ts

import { _decorator, Component, LabelShadow, Label, Color, Vec2, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson40_LabelShadow
 * 演示 Cocos Creator 3.8 **LabelShadow** 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 * ⚠️ 注意：LabelShadow 自 v3.8.2 起已废弃，请改用 Label.enableShadow。
 */
@ccclass('Lesson40_LabelShadow')
export class Lesson40_LabelShadow extends Component {

    /* ========================= 1. 获取/创建 LabelShadow（旧写法） ========================= */
    // #region 获取/创建 LabelShadow
    @property({ type: LabelShadow, tooltip: '已废弃，仅作演示' })
    labelShadow: LabelShadow | null = null;

    /** 运行时动态创建 LabelShadow（旧写法） */
    getOrCreateLabelShadow(): LabelShadow | null {
        let shadow = this.labelShadow ?? this.getComponent(LabelShadow);
        if (!shadow) {
            shadow = this.addComponent(LabelShadow);
            log('动态添加 LabelShadow 组件（已废弃）');
        }
        return shadow;
    }
    // #endregion

    /* ========================= 2. 旧 API 设置阴影样式 ========================= */
    // #region 旧 API 设置
    /** 使用已废弃的 LabelShadow 设置阴影 */
    setByLabelShadow() {
        const shadow = this.getOrCreateLabelShadow();
        if (!shadow) return;

        // 已废弃的属性
        shadow.offset = new Vec2(5, -5);          // 阴影偏移
        shadow.color = Color.BLACK;               // 阴影颜色
        shadow.blur = 2;                          // 阴影模糊程度
        log('通过 LabelShadow 设置阴影（已废弃）');
    }
    // #endregion

    /* ========================= 3. 新 API：使用 Label.enableShadow ========================= */
    // #region 新 API 设置
    @property({ type: Label })
    label: Label | null = null;

    /** 通过 Label.enableShadow 设置阴影（推荐） */
    setByLabelEnableShadow() {
        const lbl = this.label ?? this.getComponent(Label);
        if (!lbl) return;

        lbl.enableShadow = true;                  // 开启阴影
        lbl.shadowColor = Color.GRAY;             // 阴影颜色
        lbl.shadowOffset = new Vec2(4, -4);       // 阴影偏移
        lbl.shadowBlur = 3;                       // 阴影模糊程度
        log('通过 Label.enableShadow 设置阴影（推荐）');
    }

    /** 关闭阴影 */
    disableShadow() {
        const lbl = this.label ?? this.getComponent(Label);
        if (lbl) lbl.enableShadow = false;
    }
    // #endregion

    /* ========================= 4. 动态切换阴影样式 ========================= */
    // #region 动态切换
    toggleShadowStyle() {
        const lbl = this.label ?? this.getComponent(Label);
        if (!lbl) return;

        // 每次点击切换不同颜色
        if (lbl.enableShadow) {
            lbl.shadowColor = lbl.shadowColor.equals(Color.GRAY) ? Color.BLUE : Color.GRAY;
            lbl.shadowBlur = Math.random() * 5 + 1;
        } else {
            this.setByLabelEnableShadow();
        }
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 旧写法（兼容老项目）
        this.setByLabelShadow();

        // 新写法（推荐）
        this.setByLabelEnableShadow();
    }

    start() {
        // 演示：2 秒后切换一次阴影样式
        this.scheduleOnce(() => this.toggleShadowStyle(), 2);
    }
    // #endregion
}