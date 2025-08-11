import { _decorator, Component, find, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lesson03_')
export class Lesson03_ extends Component {

    // 节点加载时回调
    onLoad(){
        console.log('onLoad');
    }

    // 启用回调
    protected onEnable(): void {
        console.log('onEnable');
    }

    // 节点激活时回调
    onActive(): void {
        console.log('onActive');
    }

    start() {
        console.log('start');
    }

    // 每帧回调
    update(deltaTime: number) {
        console.log('update');
    }

    // update后回调
    protected lateUpdate(dt: number): void {
        console.log('lateUpdate');
    }

    // 禁用回调
    protected onDisable(): void {
        console.log('onDisable');
    }

    // 销毁回调
    protected onDestroy(): void {
        console.log('onDestroy');
    }

    // 编辑器相关回调
    onLostFocusInEditor(): void {
        console.log('onLostFocusInEditor');
    }
}


