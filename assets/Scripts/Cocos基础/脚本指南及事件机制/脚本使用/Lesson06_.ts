// Lesson0X_.ts
import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 创建与销毁节点示例
 * 核心类：Lesson06_
 */
@ccclass('Lesson06_')
export class Lesson06_ extends Component {

    /* ------------------ 1. 创建新节点 ------------------ */
    //#region 1. 创建新节点
    private createNewNode() {
        const node = new Node('NewBox');
        node.setPosition(0, 0, -10);                       // 只是创建，尚未加入场景
        director.getScene()!.addChild(node);               // 加入场景根节点
    }
    //#endregion

    /* ------------------ 2. 克隆已有节点 ------------------ */
    //#region 2. 克隆已有节点
    @property(Node)
    private sourceNode: Node = null!;                      // 在属性检查器拖拽赋值

    private cloneNode() {
        if (!this.sourceNode) return;
        const scene = director.getScene()!;
        const cloned = instantiate(this.sourceNode);         // 克隆
        scene.addChild(cloned);
        cloned.setPosition(0, 0, -10);
    }
    //#endregion

    /* ------------------ 3. 创建预制节点 ------------------ */
    //#region 3. 创建预制节点
    @property(Prefab)
    private prefab: Prefab = null!;                        // 在属性检查器拖拽赋值

    private createPrefabNode() {
        if (!this.prefab) return;
        const scene = director.getScene()!;
        const node = instantiate(this.prefab);               // 实例化预制
        scene.addChild(node);
        node.setPosition(0, 0, 0);
    }
    //#endregion

    /* ------------------ 4. 销毁节点 ------------------ */
    //#region 4. 销毁节点
    @property(Node)
    private target: Node = null!;                          // 演示销毁的目标节点

    private destroyNode() {
        if (!this.target) return;
        this.target.destroy();                             // 标记销毁（本帧末真正释放）
    }
    //#endregion

    /* ------------------ 5. 判断节点是否有效 ------------------ */
    //#region 5. 节点有效性
    private posZ = -20;
    protected update(deltaTime: number) {

        if (!this.target) return;

        // 每帧移动并打印有效性
        this.posZ += 1 * deltaTime;
        if (this.target.isValid) {
            this.target.setPosition(0, 0, this.posZ);
            console.info('isValid:', this.target.isValid);
        }
    }
    //#endregion

    /* ------------------ 6. 演示定时销毁 ------------------ */
    //#region 6. 定时销毁
    protected start() {
        // 5 秒后销毁 target
        this.scheduleOnce(() => this.destroyNode(), 5);
    }
    //#endregion
}