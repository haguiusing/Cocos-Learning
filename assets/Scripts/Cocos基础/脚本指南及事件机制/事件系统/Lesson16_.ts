// Lesson16_.ts
import { _decorator, Component, screen, macro } from 'cc';
const { ccclass } = _decorator;

/**
 * 屏幕事件系统示例（window-resize / orientation-change / fullscreen-change）
 * 核心类：Lesson16_
 */
@ccclass('Lesson16_')
export class Lesson16_ extends Component {

    /* ------------------ 1. 注册所有屏幕事件 ------------------ */
    //#region 注册
    protected onLoad(): void {
        screen.on('window-resize',      this.onWindowResize,     this);
        screen.on('orientation-change', this.onOrientationChange, this);
        screen.on('fullscreen-change',  this.onFullScreenChange,  this);
    }
    //#endregion

    /* ------------------ 2. 取消所有屏幕事件 ------------------ */
    //#region 注销
    protected onDestroy(): void {
        screen.off('window-resize',      this.onWindowResize,     this);
        screen.off('orientation-change', this.onOrientationChange, this);
        screen.off('fullscreen-change',  this.onFullScreenChange,  this);
    }
    //#endregion

    /* ------------------ 3. 窗口尺寸变化 ------------------ */
    //#region window-resize
    private onWindowResize(width: number, height: number): void {
        console.log(`[WindowResize] ${width} x ${height}`);
    }
    //#endregion

    /* ------------------ 4. 屏幕方向变化 ------------------ */
    //#region orientation-change
    private onOrientationChange(orientation: number): void {
        const isLandscape = orientation === macro.ORIENTATION_LANDSCAPE_LEFT ||
                            orientation === macro.ORIENTATION_LANDSCAPE_RIGHT;
        console.log(`[OrientationChange] ${isLandscape ? 'Landscape' : 'Portrait'}`, orientation);
    }
    //#endregion

    /* ------------------ 5. 全屏状态变化 ------------------ */
    //#region fullscreen-change
    private onFullScreenChange(width: number, height: number): void {
        console.log(`[FullScreenChange] ${width} x ${height}`);
    }
    //#endregion
}