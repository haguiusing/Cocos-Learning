// Lesson46_UIMeshRenderer.ts

import { _decorator, Component, UIMeshRenderer, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson46_UIMeshRenderer
 * 演示 Cocos Creator 3.8 UIMeshRenderer 组件的常见 API 用法
 * 注意：该组件已被标记为不推荐使用，请尽量使用 Render Texture 代替
 */
@ccclass('Lesson46_UIMeshRenderer')
export class Lesson46_UIMeshRenderer extends Component {

    /* ========================= 1. 获取/创建 UIMeshRenderer 组件 ========================= */
    // #region 获取/创建 UIMeshRenderer
    @property({ type: UIMeshRenderer })
    uiMeshRenderer: UIMeshRenderer | null = null;

    /** 运行时动态创建或获取 UIMeshRenderer 组件 */
    getOrCreateUIMeshRenderer(): UIMeshRenderer | null {
        let umr = this.uiMeshRenderer ?? this.getComponent(UIMeshRenderer);
        if (!umr) {
            umr = this.addComponent(UIMeshRenderer);
            log('动态添加 UIMeshRenderer 组件');
        }
        return umr;
    }
    // #endregion

    /* ========================= 2. 设置模型组件 ========================= */
    // #region 设置模型组件
    setModelComponent() {
        const umr = this.getOrCreateUIMeshRenderer();
        if (!umr) return;

        // 假设节点上已经有一个模型组件
        const modelComponent = this.node.getComponent('MeshRenderer');
        if (modelComponent) {
            //umr.modelComponent = modelComponent;
            log('模型组件已设置');
        } else {
            log('未找到模型组件');
        }
    }
    // #endregion

    /* ========================= 3. 设置模板阶段 ========================= */
    // #region 设置模板阶段
    setStencilStage() {
        const umr = this.getOrCreateUIMeshRenderer();
        if (!umr) return;

        // 设置模板阶段（示例值）
        umr.stencilStage = 1;
        log('模板阶段已设置');
    }
    // #endregion

    /* ========================= 4. 渲染相关方法（不推荐手动调用） ========================= */
    // #region 渲染相关方法
    /** 调用后置渲染数据组装程序（不推荐手动调用） */
    callPostUpdateAssembler() {
        const umr = this.getOrCreateUIMeshRenderer();
        if (!umr) return;

        // 注意：不推荐手动调用此方法，除非你理解整个流程
        umr.postUpdateAssembler(null);
    }
    // #endregion

    /* ========================= 5. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        this.setModelComponent(); // 设置模型组件
        this.setStencilStage();   // 设置模板阶段
    }
}