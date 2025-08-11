// Lesson0X_.ts
import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 常用节点和组件接口示例
 * 核心类：Lesson05_
 */
@ccclass('Lesson05_')
export class Lesson05_ extends Component {

    /* ------------------ 1. 激活 / 关闭节点 ------------------ */
    //#region 1. 激活/关闭节点
    private toggleActive() {
        // 关闭
        this.node.active = false;
        // 激活
        this.node.active = true;

        // 判断当前是否真正激活
        console.log('activeInHierarchy:', this.node.activeInHierarchy);
    }
    //#endregion

    /* ------------------ 2. 更改节点的父节点 ------------------ */
    //#region 2. 更改父节点
    private changeParent(parentNode: Node) {
        // 方法一：直接赋值
        this.node.parent = parentNode;

        // 方法二：先移除再添加
        // this.node.removeFromParent();
        // parentNode.addChild(this.node);
    }
    //#endregion

    /* ------------------ 3. 索引子节点 ------------------ */
    //#region 3. 索引子节点
    private iterateChildren() {
        // 遍历直接子节点
        for (const child of this.node.children) {
            console.log('Child name:', child.name);
        }

        // 子节点数量
        console.log('Children count:', this.node.children.length);
    }
    //#endregion

    /* ------------------ 4. 更改节点位置 ------------------ */
    //#region 4. 更改位置
    private changePosition() {
        // 方式一：setPosition
        this.node.setPosition(100, 50, 100);
        this.node.setPosition(new Vec3(200, 200, 0));

        // 方式二：直接赋值
        this.node.position = new Vec3(300, 0, 0);
    }
    //#endregion

    /* ------------------ 5. 更改节点旋转 ------------------ */
    //#region 5. 更改旋转
    private changeRotation() {
        // 四元数
        this.node.setRotation(0, 0, 0, 1);

        // 欧拉角
        this.node.setRotationFromEuler(0, 90, 0);
    }
    //#endregion

    /* ------------------ 6. 更改节点缩放 ------------------ */
    //#region 6. 更改缩放
    private changeScale() {
        this.node.setScale(2, 2, 2);
    }
    //#endregion

    /* ------------------ 7. 常用组件接口 ------------------ */
    //#region 7. 常用组件接口
    // 该组件自身可用的属性 / 方法
    private componentInterface(deltaTime: number) {
        // this.enabled          -> 是否每帧执行 update
        // this.update           -> 每帧回调
        // this.onLoad           -> 节点首次加入节点树
        // this.start            -> 第一次 update 之前
    }

    onLoad() {
        console.log('Lesson05_ onLoad');
    }

    start() {
        console.log('Lesson05_ start');
    }

    update(deltaTime: number) {
        if (!this.enabled) return;
        // 每帧逻辑...
    }
    //#endregion
}