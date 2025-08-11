// Lesson10_.ts
import { _decorator, Component, SpriteFrame, Texture2D, assetManager, ImageAsset, Sprite } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 获取与加载资源示例
 * 核心类：Lesson10_
 */
@ccclass('Lesson10_')
export class Lesson10_ extends Component {

    /* ------------------ 1. 在属性检查器中声明资源 ------------------ */
    //#region 1. 属性面板声明
    @property(Texture2D)
    texture: Texture2D = null!;          // 拖拽 Texture2D 到面板

    @property(SpriteFrame)
    spriteFrame: SpriteFrame = null!;    // 拖拽 SpriteFrame 到面板
    //#endregion

    /* ------------------ 2. 直接使用已绑定资源 ------------------ */
    //#region 2. 直接使用已绑定资源
    private useInspectorAssets() {
        console.log('Inspector texture:', this.texture);
        console.log('Inspector spriteFrame:', this.spriteFrame);

        // 示例：把 SpriteFrame 赋给当前节点上的 Sprite
        const sprite = this.getComponent(Sprite);
        if (sprite && this.spriteFrame) {
            sprite.spriteFrame = this.spriteFrame;
        }
    }
    //#endregion

    /* ------------------ 3. 动态加载本地资源 ------------------ */
    //#region 3. 动态加载
    private loadLocalAsset() {
        // 动态加载 resources 目录下的资源
        assetManager.resources.load('textures/hero', SpriteFrame, (err, asset) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Dynamic loaded SpriteFrame:', asset);
            const sprite = this.getComponent(Sprite);
            if (sprite) sprite.spriteFrame = asset;
        });
    }
    //#endregion

    /* ------------------ 4. 加载远程 / 设备资源 ------------------ */
    //#region 4. 加载远程 & 设备资源
    private loadRemoteAsset(url: string) {
        // 远程纹理
        assetManager.loadRemote<ImageAsset>(url, (err, imageAsset) => {
            if (err) {
                console.error(err);
                return;
            }
            const tex = new Texture2D();
            tex.image = imageAsset;
            console.log('Remote texture loaded:', tex);
            // 这里可继续把 Texture2D 赋给 SpriteFrame 或材质
        });
    }

    private loadDeviceAsset(filePath: string) {
        // 本地文件
        assetManager.loadRemote<ImageAsset>(filePath, (err, imageAsset) => {
            if (err) {
                console.error(err);
                return;
            }
            const tex = new Texture2D();
            tex.image = imageAsset;
            console.log('Device texture loaded:', tex);
        });
    }
    //#endregion

    /* ------------------ 5. 释放资源（可选） ------------------ */
    //#region 5. 释放资源
    private releaseAsset(asset: any) {
        assetManager.releaseAsset(asset);
        console.log('Asset released:', asset);
    }
    //#endregion

    /* ------------------ 6. 生命周期 ------------------ */
    //#region 6. 生命周期
    protected start() {
        this.useInspectorAssets();
        this.loadLocalAsset();
        // 示例：远程资源
        // this.loadRemoteAsset('https://example.com/remote.png');
    }

    protected onDestroy() {
        // 按需释放
        if (this.texture) this.releaseAsset(this.texture);
        if (this.spriteFrame) this.releaseAsset(this.spriteFrame);
    }
    //#endregion
}