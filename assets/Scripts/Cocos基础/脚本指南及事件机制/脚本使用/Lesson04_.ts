// Lesson0X_.ts
import { _decorator, Component, Node, Label, find } from 'cc';
const { ccclass, property } = _decorator;

// 如需演示“属性检查器设置组件”功能，请确保项目中存在 Player.ts 脚本
import { Player } from './Player';

/**
 * 访问节点与组件的完整示例
 * 核心类：Lesson04_
 */
@ccclass('Lesson04_')
export class Lesson04_ extends Component {

    /* ------------------ 1. 获得组件所在的节点 ------------------ */
    // #region 1. 获得组件所在的节点
    private demo1() {
        const node = this.node;
        node.setPosition(0, 0, 0);
    }
    // #endregion

    /* ------------------ 2. 获得同一个节点上的其他组件 ------------------ */
    // #region 2. 获得其他组件
    private demo2() {
        const label = this.getComponent(Label);
        if (label) {
            label.string = 'Hello, Cocos!';
        }
    }
    // #endregion

    /* ------------------ 3. 属性检查器设置节点 ------------------ */
    // #region 3. 属性检查器设置节点
    @property(Node)
    private playerNode: Node = null!;

    private demo3() {
        if (this.playerNode) {
            console.log('The player is ' + this.playerNode.name);
        }
    }
    // #endregion

    /* ------------------ 4. 属性检查器设置组件 ------------------ */
    // #region 4. 属性检查器设置组件
    @property(Player)
    private playerComp: Player = null!;

    private demo4() {
        if (this.playerComp) {
            console.log('Player component ready:', this.playerComp);
        }
    }
    // #endregion

    /* ------------------ 5. 查找子节点 ------------------ */
    // #region 5. 查找子节点
    private demo5() {
        // 遍历所有直接子节点
        for (const child of this.node.children) {
            console.log('Child:', child.name);
        }

        // 按名称查找
        const cannon = this.node.getChildByName('Cannon 01');
        if (cannon) {
            console.log('Found Cannon 01');
        }

        // 深度路径查找
        const sfx = find('Cannon 01/Barrel/SFX', this.node);
        if (sfx) {
            console.log('Found SFX at deep path');
        }
    }
    // #endregion

    /* ------------------ 6. 全局名字查找 ------------------ */
    // #region 6. 全局名字查找
    private demo6() {
        const backNode = find('Canvas/Menu/Back');
        if (backNode) {
            console.log('Found global node:', backNode.name);
        }
    }
    // #endregion

    /* ------------------ 7. 通过模块访问（全局变量） ------------------ */
    // #region 7. 通过模块访问
    private demo7() {
        // 假设 Global.ts 已存在并正确导出
        // import { Global } from './Global';
        // if (Global.backLabel) {
        //     Global.backLabel.string = 'Updated via Global';
        // }
    }
    // #endregion

    /* ------------------ 生命周期 ------------------ */
    protected start(): void {
        this.demo1();
        this.demo2();
        this.demo3();
        this.demo4();
        this.demo5();
        this.demo6();
        this.demo7();
    }
}

