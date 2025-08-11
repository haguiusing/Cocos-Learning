// Lesson26_.ts
import { _decorator, Component, Node, dragonBones, resources, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * DragonBones ArmatureDisplay 全功能演示
 * 核心类：Lesson26_
 */
@ccclass('Lesson26_')
export class Lesson26_ extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(dragonBones.ArmatureDisplay)
    armatureDisplay: dragonBones.ArmatureDisplay = null!;
    //#endregion

    /* ------------------ 2. 加载骨骼资源 ------------------ */
    //#region 2. 资源加载
    private loadDragonBones() {
        resources.loadDir('dragon', dragonBones.DragonBonesAsset, (err, assets) => {
            if (err) { log('加载失败', err); return; }
            this.armatureDisplay.dragonAsset = assets[0] as dragonBones.DragonBonesAsset;
            // 继续加载图集
            resources.loadDir('dragon', dragonBones.DragonBonesAtlasAsset, (err2, atlas) => {
                if (!err2) this.armatureDisplay.dragonAtlasAsset = atlas[0] as dragonBones.DragonBonesAtlasAsset;
                this.buildArmature();
            });
        });
    }
    //#endregion

    /* ------------------ 3. 构建骨架 ------------------ */
    //#region 3. 构建
    private buildArmature() {
        const armatures = this.armatureDisplay.getArmatureNames();
        log('可用骨架:', armatures);
        if (armatures.length) {
            this.armatureDisplay.armatureName = armatures[0];
            this.playRandomAnim();
        }
    }
    //#endregion

    /* ------------------ 4. 动画控制 ------------------ */
    //#region 4. 动画控制
    private playRandomAnim() {
        const anims = this.armatureDisplay.getAnimationNames(this.armatureDisplay.armatureName);
        if (!anims.length) return;
        const anim = anims[Math.floor(Math.random() * anims.length)];
        this.armatureDisplay.playAnimation(anim, -1);   // -1 无限循环
    }
    //#endregion

    /* ------------------ 5. 时间缩放 ------------------ */
    //#region 5. 时间缩放
    private demoTimeScale() {
        this.armatureDisplay.timeScale = 0.5; // 0.5 倍速
    }
    //#endregion

    /* ------------------ 6. 缓存模式 ------------------ */
    //#region 6. 缓存模式
    private toggleCacheMode() {
        const mode = this.armatureDisplay.isAnimationCached()
            ? dragonBones.AnimationCacheMode.REALTIME
            : dragonBones.AnimationCacheMode.SHARED_CACHE;
        this.armatureDisplay.setAnimationCacheMode(mode);
    }
    //#endregion

    /* ------------------ 7. 合批开关 ------------------ */
    //#region 7. 合批
    private toggleBatch() {
        this.armatureDisplay.enableBatch = !this.armatureDisplay.enableBatch;
    }
    //#endregion

    /* ------------------ 8. 挂点示例 ------------------ */
    //#region 8. Socket（挂点）
    private demoSocket() {
        // 查询所有挂点
        const sockets = this.armatureDisplay.querySockets();
        log('可用挂点:', sockets);

        // 注册一个挂点
        const weapon = new Node('Weapon');
        weapon.setParent(this.node);
        this.armatureDisplay.sockets = [
            { path: "hand_r" ,target: weapon ,boneIndex: 1} // 跟随右手骨骼
        ];
    }
    //#endregion

    /* ------------------ 9. 事件监听 ------------------ */
    //#region 9. 事件
    private listenEvents() {
        this.armatureDisplay.on(dragonBones.EventObject.START, () => log('动画开始'), this);
        this.armatureDisplay.on(dragonBones.EventObject.COMPLETE, () => log('动画完成'), this);
        this.armatureDisplay.on(dragonBones.EventObject.LOOP_COMPLETE, () => log('一次循环完成'), this);
    }
    //#endregion

    /* ------------------ 10. 调试骨骼 ------------------ */
    //#region 10. 调试
    private toggleDebugBones() {
        this.armatureDisplay.debugBones = !this.armatureDisplay.debugBones;
    }
    //#endregion

    /* ------------------ 11. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        if (!this.armatureDisplay) return;
        this.loadDragonBones();
        this.listenEvents();
    }

    protected onDestroy() {
        this.armatureDisplay?.off(dragonBones.EventObject.COMPLETE, ()=>log(""), this);
    }
    //#endregion
}