// Lesson14_.ts
import {
    _decorator,
    Component,
    input,
    Input,
    EventTouch,
    EventKeyboard,
    KeyCode,
    EventAcceleration,
    Camera,
    geometry,
    PhysicsSystem,
    Node,
} from 'cc';
const { ccclass, property } = _decorator;

/**
 * 输入事件系统示例：触摸、键盘、重力感应、3D 射线检测
 * 核心类：Lesson14_
 */
@ccclass('Lesson14_')
export class Lesson14_ extends Component {

    /* ------------------ 1. 触摸事件 ------------------ */
    //#region Touch
    private registerTouch() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this); // 触摸开始
        input.on(Input.EventType.TOUCH_MOVE,  this.onTouchMove,  this); // 触摸移动
        input.on(Input.EventType.TOUCH_END,   this.onTouchEnd,   this); // 触摸结束
        input.on(Input.EventType.TOUCH_CANCEL,this.onTouchCancel,this); // 触摸取消
    }

    private onTouchStart(event: EventTouch) {
        console.log('[TouchStart]', event.getLocation());
    }
    private onTouchMove(event: EventTouch) {
        console.log('[TouchMove] ', event.getUILocation());
    }
    private onTouchEnd(event: EventTouch) {
        console.log('[TouchEnd]  ', event.getLocation());
    }
    private onTouchCancel(event: EventTouch) {
        console.log('[TouchCancel]');
    }

    private unregisterTouch() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE,  this.onTouchMove,  this);
        input.off(Input.EventType.TOUCH_END,   this.onTouchEnd,   this);
        input.off(Input.EventType.TOUCH_CANCEL,this.onTouchCancel,this);
    }
    //#endregion

    /* ------------------ 2. 键盘事件 ------------------ */
    //#region Keyboard
    private registerKeyboard() {
        input.on(Input.EventType.KEY_DOWN,    this.onKeyDown,    this); // 键盘按下
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this); // 键盘长按
        input.on(Input.EventType.KEY_UP,      this.onKeyUp,      this); // 键盘松开
    }

    private onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log('[KeyDown] A');
                break;
            case KeyCode.SPACE:
                console.log('[KeyDown] Space');
                break;
        }
    }

    private onKeyPressing(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_S) {
            console.log('[KeyPressing] S');
        }
    }

    private onKeyUp(event: EventKeyboard) {
        if (event.keyCode === KeyCode.KEY_A) {
            console.log('[KeyUp] A');
        }
    }

    private unregisterKeyboard() {
        input.off(Input.EventType.KEY_DOWN,    this.onKeyDown,    this);
        input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.off(Input.EventType.KEY_UP,      this.onKeyUp,      this);
    }
    //#endregion

    /* ------------------ 3. 重力感应事件 ------------------ */
    //#region DeviceMotion
    private registerDeviceMotion() {
        input.setAccelerometerEnabled(true); // 开启重力感应
        input.on(Input.EventType.DEVICEMOTION, this.onDeviceMotion, this); // 监听重力感应事件
    }

    private onDeviceMotion(event: EventAcceleration) {
        console.log('[DeviceMotion]', event.acc.x.toFixed(2), event.acc.y.toFixed(2)); 
    }

    private unregisterDeviceMotion() {
        input.off(Input.EventType.DEVICEMOTION, this.onDeviceMotion, this);
    }
    //#endregion

    /* ------------------ 4. 3D 射线检测（触摸） ------------------ */
    //#region 3D Raycast
    @property(Camera)
    cameraCom: Camera = null!;

    @property(Node)
    targetNode: Node = null!;

    private _ray = new geometry.Ray();

    private registerRaycast() {
        input.on(Input.EventType.TOUCH_START, this.on3DTouch, this); // 注册 3D 射线检测触摸事件
    }

    private on3DTouch(event: EventTouch) {
        if (!this.cameraCom || !this.targetNode) return;

        const touch = event.touch!;
        this.cameraCom.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

        if (PhysicsSystem.instance.raycast(this._ray)) {
            const results = PhysicsSystem.instance.raycastResults;
            for (const hit of results) {
                if (hit.collider.node === this.targetNode) {
                    console.log('[Raycast] Hit target node!');
                    return;
                }
            }
            console.log('[Raycast] Missed target node.');
        } else {
            console.log('[Raycast] No hit.');
        }
    }

    private unregisterRaycast() {
        input.off(Input.EventType.TOUCH_START, this.on3DTouch, this);
    }
    //#endregion

    /* ------------------ 5. 生命周期 ------------------ */
    //#region Lifecycle
    protected onEnable() {
        this.registerTouch();
        this.registerKeyboard();
        this.registerDeviceMotion();
        this.registerRaycast();
    }

    protected onDisable() {
        this.unregisterTouch();
        this.unregisterKeyboard();
        this.unregisterDeviceMotion();
        this.unregisterRaycast();
    }
    //#endregion
}