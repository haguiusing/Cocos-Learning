// Lesson30_Canvas.ts

import { _decorator, Component, Canvas, Node, view, log, find, ResolutionPolicy } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 演示 Cocos Creator 3.8 Canvas 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson30_Canvas')
export class Lesson30_Canvas extends Component {

    /* ========================= 1. 获取 Canvas 组件 ========================= */
    // #region 获取 Canvas 组件
    @property({ type: Canvas })
    canvas: Canvas | null = null;

    /** 方式1：通过 Inspector 拖拽绑定 */
    getCanvasByInspector() {
        if (this.canvas) {
            log('通过 Inspector 获取 Canvas 成功', this.canvas.name);
        }
    }

    /** 方式2：运行时动态查找 */
    getCanvasByCode() {
        // 方法1：查找当前节点或其父节点
        const canvas = this.node.getComponent(Canvas);
        // 方法2：全局查找（推荐）
        const canvasNode = find('Canvas') as Node;
        const canvasComp = canvasNode?.getComponent(Canvas);
        
        if (canvasComp) {
            log('通过代码获取 Canvas 成功', canvasComp.name);
        }
    }
    // #endregion

    /* ========================= 2. 屏幕适配相关 ========================= */
    // #region 屏幕适配
    adjustScreenFit() {
        const canvas = this.getCanvasComponent();
        if (!canvas) return;

        // 获取当前屏幕分辨率
        const visibleSize = view.getVisibleSize();
        log('屏幕可见尺寸:', visibleSize);

        // 设置适配策略（示例）
        view.setDesignResolutionSize(1080, 1920, ResolutionPolicy.FIXED_WIDTH);
        log('设计分辨率已调整为 1080x1920');

        // 注意：Canvas 的 alignCanvasWithScreen 属性已废弃
        // 应通过 Canvas 组件的 cameraComponent 或 RenderRoot2D 设置
    }
    // #endregion

    /* ========================= 3. 渲染模式控制 ========================= */
    // #region 渲染模式
    setRenderMode() {
        const canvas = this.getCanvasComponent();
        if (!canvas) return;

        // 获取渲染模式（已废弃，仅作演示）
        // 推荐使用 camera 的 priority 控制渲染顺序
        const camera = canvas.cameraComponent;
        if (camera) {
            log('当前相机优先级:', camera.priority);
            // 设置相机优先级（值越大越后渲染）
            camera.priority = 100;
        }
    }
    // #endregion

    /* ========================= 4. 生命周期方法 ========================= */
    // #region 生命周期
    onLoad() {
        this.getCanvasByInspector();
    }

    start() {
        this.getCanvasByCode();
        this.adjustScreenFit();
        this.setRenderMode();
    }
    // #endregion

    /* ========================= 5. 工具方法 ========================= */
    // #region 工具方法
    private getCanvasComponent(): Canvas | null {
        return this.canvas || this.node.getComponent(Canvas) || find('Canvas')?.getComponent(Canvas);
    }
    // #endregion
}