// Lesson13_.ts
import { _decorator, Component, EventTarget } from 'cc';
const { ccclass } = _decorator;

/**
 * 事件监听与发射完整示例
 * 核心类：Lesson13_
 */
@ccclass('Lesson13_')
export class Lesson13_ extends Component {

    /* ------------------ 1. 创建全局事件目标 ------------------ */
    //#region 1. 创建 EventTarget
    private readonly eventTarget = new EventTarget();
    //#endregion

    /* ------------------ 2. 常规监听（on） ------------------ */
    //#region 2. on 监听
    private registerOn() {
        // 方式 A：箭头函数 + 第三个参数指定 this
        this.eventTarget.on('hello', (msg: string) => {
            console.log('[on] 收到 hello：', msg, this.node.name);
        }, this);

        // 方式 B：bind(this)
        this.eventTarget.on('add', function (a: number, b: number) {
            console.log('[on] add 结果：', a + b, this.node.name);
        }.bind(this));
    }
    //#endregion

    /* ------------------ 3. 一次性监听（once） ------------------ */
    //#region 3. once 监听
    private registerOnce() {
        this.eventTarget.once('once-only', () => {
            console.log('[once] 只会触发一次');
        }, this);
    }
    //#endregion

    /* ------------------ 4. 取消监听（off） ------------------ */
    //#region 4. 取消监听
    private _sayHello() {
        console.log('[callback] Hello World');
    }

    protected onEnable() {
        // 注册
        this.eventTarget.on('foobar', this._sayHello, this);
    }

    protected onDisable() {
        // 精确取消
        this.eventTarget.off('foobar', this._sayHello, this);
    }

    /** 演示全部清空 */
    private clearAll() {
        this.eventTarget.targetOff(this); // 或 eventTarget.off('事件名');
    }
    //#endregion

    /* ------------------ 5. 事件发射（emit） ------------------ */
    //#region 5. 发射事件
    private emitEvents() {
        // 发射 hello
        this.eventTarget.emit('hello', '来自 emit 的问候');

        // 发射 add（最多 5 个参数）
        this.eventTarget.emit('add', 3, 7);

        // 触发 once-only
        this.eventTarget.emit('once-only');
        this.eventTarget.emit('once-only'); // 第二次无效
    }
    //#endregion

    /* ------------------ 6. 生命周期 ------------------ */
    //#region 6. 生命周期
    protected start() {
        this.registerOn();
        this.registerOnce();
        this.emitEvents();
    }

    protected onDestroy() {
        this.clearAll();
    }
    //#endregion
}