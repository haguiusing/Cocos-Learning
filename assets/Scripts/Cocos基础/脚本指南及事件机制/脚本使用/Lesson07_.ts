// Lesson0X_.ts
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 计时器（schedule）使用示例
 * 核心类：Lesson07_
 */
@ccclass('Lesson07_')
export class Lesson07_ extends Component {

    /* ------------------ 1. 基础循环计时器 ------------------ */
    //#region 1. 基础循环计时器
    private startLoopTimer() {
        this.schedule(() => {
            this.doSomething('loop timer tick');
        }, 5);                              // 每 5 秒执行一次
    }
    //#endregion

    /* ------------------ 2. 带参数计时器 ------------------ */
    //#region 2. 带参数计时器
    private startComplexTimer() {
        const interval = 5;   // 间隔（秒）
        const repeat   = 3;   // 重复次数（实际执行 repeat + 1 次）
        const delay    = 10;  // 首次执行延迟（秒）

        this.schedule(() => {
            this.doSomething('complex timer tick');
        }, interval, repeat, delay);
    }
    //#endregion

    /* ------------------ 3. 一次性计时器 ------------------ */
    //#region 3. 一次性计时器
    private startOnceTimer() {
        this.scheduleOnce(() => {
            this.doSomething('once timer fired');
        }, 2);                              // 2 秒后执行一次
    }
    //#endregion

    /* ------------------ 4. 手动取消计时器 ------------------ */
    //#region 4. 手动取消计时器
    private count: number = 0;
    private callback: Function = null!;

    private startCancelableTimer() {
        this.count = 0;
        this.callback = () => {
            this.count++;
            if (this.count >= 6) {
                this.unschedule(this.callback); // 第 6 次后取消
                return;
            }
            this.doSomething(`cancelable timer ${this.count}`);
        };
        this.schedule(this.callback, 1);        // 每秒执行一次
    }
    //#endregion

    /* ------------------ 5. 取消全部计时器 ------------------ */
    //#region 5. 取消全部计时器
    private cancelAllTimers() {
        this.unscheduleAllCallbacks();
    }
    //#endregion

    /* ------------------ 6. 生命周期演示 ------------------ */
    //#region 6. 生命周期
    protected start() {
        this.startLoopTimer();
        this.startComplexTimer();
        this.startOnceTimer();
        this.startCancelableTimer();
    }

    private doSomething(msg: string) {
        console.log('[Lesson0X_]', msg);
    }

    onDestroy() {
        // 场景销毁时统一清理计时器（可选）
        this.cancelAllTimers();
    }
    //#endregion
}
