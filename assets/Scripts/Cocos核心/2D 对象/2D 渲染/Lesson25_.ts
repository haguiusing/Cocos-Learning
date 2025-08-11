// Lesson25_.ts
import { _decorator, Component, Skeleton, resources, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Skeleton（骨骼资源）API 全功能演示
 * 核心类：Lesson25_
 */
@ccclass('Lesson25_')
export class Lesson25_ extends Component {

    /* ------------------ 1. 声明骨骼资源 ------------------ */
    //#region 1. 声明资源
    @property(Skeleton)
    skeletonAsset: Skeleton = null!;
    //#endregion

    /* ------------------ 2. 访问骨骼关节信息 ------------------ */
    //#region 2. 关节信息
    private printJoints() {
        if (!this.skeletonAsset) return;

        const joints = this.skeletonAsset.joints;
        const bindposes = this.skeletonAsset.bindposes;
        const invBindposes = this.skeletonAsset.inverseBindposes;

        log(`关节数量：${joints.length}`);
        joints.forEach((path, idx) => {
            log(`[${idx}] ${path}`);
            log(`    bindpose: ${bindposes[idx]}`);
            log(`    invBindpose: ${invBindposes[idx]}`);
        });
    }
    //#endregion

    /* ------------------ 3. 验证骨骼有效性 ------------------ */
    //#region 3. 验证有效性
    private checkValid() {
        if (this.skeletonAsset && this.skeletonAsset.validate()) {
            log('当前骨骼资源有效');
        } else {
            log('骨骼资源无效，缺少关节或绑定姿势数据');
        }
    }
    //#endregion

    /* ------------------ 4. 动态加载骨骼并获取引用 ------------------ */
    //#region 4. 动态加载
    private loadSkeleton(path: string) {
        resources.load(path, Skeleton, (err, sk) => {
            if (err) { log('加载骨骼失败:', err); return; }
            this.skeletonAsset = sk;
            log('骨骼加载成功，引用计数:', sk.refCount);
            this.printJoints();
        });
    }
    //#endregion

    /* ------------------ 5. 增加/减少引用计数 ------------------ */
    //#region 5. 引用管理
    private manageRef() {
        if (!this.skeletonAsset) return;
        this.skeletonAsset.addRef();   // 手动增加引用
        log('引用计数 +1:', this.skeletonAsset.refCount);
        // 使用完成后记得 decRef()
    }
    //#endregion

    /* ------------------ 6. 创建节点并挂载骨骼动画 ------------------ */
    //#region 6. 创建节点
    private createSkeletonNode() {
        if (!this.skeletonAsset) return;
        this.skeletonAsset.createNode((err, node) => {
            if (err) { log('创建节点失败:', err); return; }
            node.setParent(this.node);
            log('已创建带骨骼动画的新节点:', node.name);
        });
    }
    //#endregion

    /* ------------------ 7. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        if (this.skeletonAsset) {
            this.printJoints();
            this.checkValid();
            this.manageRef();
            this.createSkeletonNode();
        } else {
            // 示例：动态加载
            this.loadSkeleton('skeletons/role');
        }
    }

    protected onDestroy() {
        if (this.skeletonAsset) {
            this.skeletonAsset.decRef();
        }
    }
    //#endregion
}