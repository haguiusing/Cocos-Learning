// Lesson09_.ts
import { _decorator, Component, director, Node, Asset, Scene, assetManager } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 场景管理与常驻节点示例
 * 核心类：Lesson09_
 */
@ccclass('Lesson09_')
export class Lesson09_ extends Component {

    /* ------------------ 1. 普通场景切换 ------------------ */
    //#region 1. 普通场景切换
    private switchScene(sceneName: string) {
        director.loadScene(sceneName);
    }
    //#endregion

    /* ------------------ 2. Asset Bundle 场景 ------------------ */
    //#region 2. Asset Bundle 场景
    private switchSceneByBundle(bundleName: string, sceneName: string) {
        const bundle = assetManager.getBundle(bundleName);
        if (!bundle) return;

        bundle.loadScene(sceneName, (err, sceneAsset) => {
            if (err) {
                console.error(err);
                return;
            }
            director.runScene(sceneAsset);
        });
    }
    //#endregion

    /* ------------------ 3. 场景加载回调 ------------------ */
    //#region 3. 场景加载回调
    private switchWithCallback(targetScene: string) {
        director.loadScene(targetScene, this.onSceneLaunched.bind(this));
    }

    private onSceneLaunched() {
        console.log('Scene launched, do further init...');
    }
    //#endregion

    /* ------------------ 4. 预加载场景 ------------------ */
    //#region 4. 预加载场景
    private preload(targetScene: string) {
        director.preloadScene(targetScene, () => {
            console.log(`${targetScene} preloaded`);
        });
    }

    private loadPreloaded(targetScene: string) {
        director.loadScene(targetScene);
    }
    //#endregion

    /* ------------------ 5. 常驻节点 ------------------ */
    //#region 5. 常驻节点
    @property(Node)
    persistNode: Node = null!;   // 在属性检查器中拖入根节点

    private makePersist() {
        if (this.persistNode && this.persistNode.parent === null) {
            director.addPersistRootNode(this.persistNode);
            console.log('Node set to persistent');
        }
    }

    private removePersist() {
        if (this.persistNode) {
            director.removePersistRootNode(this.persistNode);
            console.log('Node removed from persistent list');
        }
    }
    //#endregion

    /* ------------------ 6. 生命周期演示 ------------------ */
    //#region 6. 生命周期
    protected start() {
        // 示例：把本脚本所在节点设为常驻
        this.makePersist();
    }

    protected onDestroy() {
        this.removePersist();
    }
    //#endregion
}