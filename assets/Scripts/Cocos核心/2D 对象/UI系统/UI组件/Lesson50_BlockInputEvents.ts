import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lesson50_BlockInputEvents')
export class Lesson50_BlockInputEvents extends Component {
    // 展示如何启用和禁用组件
    //#region 启用/禁用组件
    start() {
        // 获取节点上的BlockInputEvents组件
        const blockInputEvents = this.node.getComponent('BlockInputEvents');
        if (blockInputEvents) {
            // 启用组件
            blockInputEvents.enabled = true;
            console.log('BlockInputEvents组件已启用');
        }
    }

    onDisable() {
        // 获取节点上的BlockInputEvents组件
        const blockInputEvents = this.node.getComponent('BlockInputEvents');
        if (blockInputEvents) {
            // 禁用组件
            blockInputEvents.enabled = false;
            console.log('BlockInputEvents组件已禁用');
        }
    }
    //#endregion

    // 展示如何判断组件是否可用
    //#region 判断组件是否可用
    update(dt: number) {
        // 获取节点上的BlockInputEvents组件
        const blockInputEvents = this.node.getComponent('BlockInputEvents');
        if (blockInputEvents) {
            // 判断组件是否可用
            if (blockInputEvents.isValid) {
                console.log('BlockInputEvents组件可用');
            } else {
                console.log('BlockInputEvents组件不可用');
            }
        }
    }
    //#endregion

    // 展示如何销毁组件
    //#region 销毁组件
    onDestroy() {
        // 获取节点上的BlockInputEvents组件
        const blockInputEvents = this.node.getComponent('BlockInputEvents');
        if (blockInputEvents) {
            // 销毁组件
            blockInputEvents.destroy();
            console.log('BlockInputEvents组件已销毁');
        }
    }
    //#endregion

    // 展示如何获取组件的uuid
    //#region 获取组件的uuid
    onLoad() {
        // 获取节点上的BlockInputEvents组件
        const blockInputEvents = this.node.getComponent('BlockInputEvents');
        if (blockInputEvents) {
            // 获取组件的uuid
            const uuid = blockInputEvents.uuid;
            console.log('BlockInputEvents组件的uuid为:', uuid);
        }
    }
    //#endregion
}