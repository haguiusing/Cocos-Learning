// Lesson17_.ts
import {
    _decorator,
    Component,
    Node,
    input,
    Input,
    EventTouch,
    EventMouse,
    EventKeyboard,
    KeyCode,
    screen,
} from 'cc';
const { ccclass, property } = _decorator;

/**
 * 全局 + 节点 触摸 / 鼠标 / 键盘 事件 API 全整合
 * 核心类：Lesson17_
 */
@ccclass('Lesson17_')
export class Lesson17_ extends Component {

    /* ------------------ 1. 全局输入事件（input 对象） ------------------ */
    //#region 全局输入事件
    private registerGlobalInput() {
        // 1-1 全局触摸
        input.on(Input.EventType.TOUCH_START,  this.onGlobalTouchStart,  this);
        input.on(Input.EventType.TOUCH_MOVE,   this.onGlobalTouchMove,   this);
        input.on(Input.EventType.TOUCH_END,    this.onGlobalTouchEnd,    this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onGlobalTouchCancel, this);

        // 1-2 全局鼠标
        input.on(Input.EventType.MOUSE_DOWN, this.onGlobalMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onGlobalMouseMove, this);
        input.on(Input.EventType.MOUSE_UP,   this.onGlobalMouseUp,   this);
        input.on(Input.EventType.MOUSE_WHEEL, this.onGlobalMouseWheel, this);

        // 1-3 全局键盘
        input.on(Input.EventType.KEY_DOWN, this.onGlobalKeyDown, this);
        input.on(Input.EventType.KEY_UP,   this.onGlobalKeyUp,   this);
    }

    private unregisterGlobalInput() {
        input.off(Input.EventType.TOUCH_START,  this.onGlobalTouchStart,  this);
    }

    private onGlobalTouchStart(event: EventTouch) { console.log('[Global] TouchStart', event.getLocation()); }
    private onGlobalTouchMove(event: EventTouch)  { console.log('[Global] TouchMove',  event.getUILocation()); }
    private onGlobalTouchEnd(event: EventTouch)   { console.log('[Global] TouchEnd',   event.getLocation()); }
    private onGlobalTouchCancel(event: EventTouch){ console.log('[Global] TouchCancel'); }

    private onGlobalMouseDown(event: EventMouse) { console.log('[Global] MouseDown', event.getLocation()); }
    private onGlobalMouseMove(event: EventMouse) { console.log('[Global] MouseMove', event.getLocation()); }
    private onGlobalMouseUp(event: EventMouse)   { console.log('[Global] MouseUp',   event.getLocation()); }
    private onGlobalMouseWheel(event: EventMouse){ console.log('[Global] MouseWheel', event.getScrollY()); }

    private onGlobalKeyDown(event: EventKeyboard) { console.log('[Global] KeyDown', KeyCode[event.keyCode]); }
    private onGlobalKeyUp(event: EventKeyboard)   { console.log('[Global] KeyUp',   KeyCode[event.keyCode]); }
    //#endregion

    /* ------------------ 2. 节点级事件（this.node 或任意节点） ------------------ */
    //#region 节点事件
    @property(Node)
    targetNode: Node = null!;   // 在编辑器里拖拽要监听的节点；为空则监听自身

    private get listenedNode(): Node {
        return this.targetNode || this.node;
    }

    private registerNodeEvents() {
        // 2-1 节点触摸
        this.listenedNode.on(Node.EventType.TOUCH_START, this.onNodeTouchStart, this);
        this.listenedNode.on(Node.EventType.TOUCH_MOVE,  this.onNodeTouchMove,  this);
        this.listenedNode.on(Node.EventType.TOUCH_END,   this.onNodeTouchEnd,   this);
        this.listenedNode.on(Node.EventType.TOUCH_CANCEL,this.onNodeTouchCancel,this);

        // 2-2 节点鼠标
        this.listenedNode.on(Node.EventType.MOUSE_DOWN, this.onNodeMouseDown, this);
        this.listenedNode.on(Node.EventType.MOUSE_MOVE, this.onNodeMouseMove, this);
        this.listenedNode.on(Node.EventType.MOUSE_UP,   this.onNodeMouseUp,   this);
        this.listenedNode.on(Node.EventType.MOUSE_ENTER,this.onNodeMouseEnter,this);
        this.listenedNode.on(Node.EventType.MOUSE_LEAVE,this.onNodeMouseLeave,this);
        this.listenedNode.on(Node.EventType.MOUSE_WHEEL,this.onNodeMouseWheel,this);

        // 2-3 捕获阶段示例（第四个参数 useCapture = true）
        this.listenedNode.on(Node.EventType.TOUCH_START, this.onCaptureTouchStart, this, true);
    }

    private unregisterNodeEvents() {
        this.listenedNode.targetOff(this);  // 注销所有事件监听
    }

    private onNodeTouchStart(event: EventTouch) { console.log('[Node] TouchStart', event.currentTarget?.name); }
    private onNodeTouchMove(event: EventTouch)  { console.log('[Node] TouchMove',  event.currentTarget?.name); }
    private onNodeTouchEnd(event: EventTouch)   { console.log('[Node] TouchEnd',   event.currentTarget?.name); }
    private onNodeTouchCancel(event: EventTouch){ console.log('[Node] TouchCancel'); }

    private onNodeMouseDown(event: EventMouse) { console.log('[Node] MouseDown', event.currentTarget?.name); }
    private onNodeMouseMove(event: EventMouse) { console.log('[Node] MouseMove', event.currentTarget?.name); }
    private onNodeMouseUp(event: EventMouse)   { console.log('[Node] MouseUp',   event.currentTarget?.name); }
    private onNodeMouseEnter(event: EventMouse){ console.log('[Node] MouseEnter'); }
    private onNodeMouseLeave(event: EventMouse){ console.log('[Node] MouseLeave'); }
    private onNodeMouseWheel(event: EventMouse){ console.log('[Node] MouseWheel'); }

    private onCaptureTouchStart() { console.log('[Capture] TouchStart on', this.listenedNode.name); }
    //#endregion

    /* ------------------ 3. 屏幕级事件（window-resize / orientation） ------------------ */
    //#region 屏幕事件
    private registerScreenEvents() {
        screen.on('window-resize',      this.onWindowResize,     this);
        screen.on('orientation-change', this.onOrientationChange,this);
    }

    private unregisterScreenEvents() {
        screen.off('window-resize',      this.onWindowResize,     this);
        screen.off('orientation-change', this.onOrientationChange,this);
    }

    private onWindowResize(width: number, height: number) {
        console.log('[Screen] resize', width, height);
    }

    private onOrientationChange(orientation: number) {
        console.log('[Screen] orientation', orientation);
    }
    //#endregion

    /* ------------------ 4. 生命周期：统一注册 & 注销 ------------------ */
    //#region Lifecycle
    protected onEnable(): void {
        this.registerGlobalInput();
        this.registerNodeEvents();
        this.registerScreenEvents();
    }

    protected onDisable(): void {
        this.unregisterGlobalInput();
        this.unregisterNodeEvents();
        this.unregisterScreenEvents();
    }
    //#endregion
}