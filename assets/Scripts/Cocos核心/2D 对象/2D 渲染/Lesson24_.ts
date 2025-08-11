// Lesson24_.ts
import { _decorator, Component, UIStaticBatch, Label, Sprite, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * UIStaticBatch 静态合批示例
 * 核心类：Lesson24_
 * 注意：v3.4.1 起官方已不推荐手动使用此组件，未来会移除
 */
@ccclass('Lesson24_')
export class Lesson24_ extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(UIStaticBatch)
    uiStaticBatch: UIStaticBatch = null!;
    //#endregion

    /* ------------------ 2. 收集静态合批数据 ------------------ */
    //#region 2. 收集数据
    private collectStaticBatch() {
        // 必须在子节点全部摆放完成后调用一次
        this.uiStaticBatch.markAsDirty();
        console.log('UIStaticBatch 已采集静态数据，后续子节点改动将无效');
    }
    //#endregion

    /* ------------------ 3. 动态演示：添加精灵后重采 ------------------ */
    //#region 3. 动态演示
    private demoReCollect() {
        // 示例：运行时新增一个 Label 作为子节点
        let label = new Node();
        label.parent = this.node;
        const lbl = label.addComponent(Label);
        lbl.string = 'Static';

        // 重新采集一次（不推荐频繁调用）
        this.scheduleOnce(() => this.collectStaticBatch(), 0.1);
    }
    //#endregion

    /* ------------------ 4. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        if (!this.uiStaticBatch) {
            console.warn('请先在编辑器里给根节点添加 UIStaticBatch 组件');
            return;
        }
        this.collectStaticBatch();
        // 演示：2 秒后动态添加节点并重采
        this.scheduleOnce(this.demoReCollect, 2);
    }

    protected onDestroy() {
        this.unscheduleAllCallbacks();
    }
    //#endregion
}