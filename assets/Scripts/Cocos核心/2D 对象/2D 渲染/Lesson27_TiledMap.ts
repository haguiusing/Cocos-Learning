// Lesson27_.ts
import { _decorator, Component, TiledMap, Size, resources, log, TiledMapAsset } from 'cc';
const { ccclass, property } = _decorator;

/**
 * TiledMap（TMX 瓦片地图）API 全功能演示
 * 核心类：Lesson27_TiledMap
 */
@ccclass('Lesson27_TiledMap')
export class Lesson27_TiledMap extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(TiledMap)
    tiledMap: TiledMap = null!;
    //#endregion

    /* ------------------ 2. 加载 TMX 资源 ------------------ */
    //#region 2. 加载资源
    private loadTiledMap(path: string) {
        resources.load<TiledMapAsset>(path, TiledMapAsset, (err, asset) => {
            if (err) { log('加载失败:', err); return; }
            this.tiledMap.tmxAsset = asset;
            this.inspectMap();
        });
    }
    //#endregion

    /* ------------------ 3. 地图基本信息 ------------------ */
    //#region 3. 基本信息
    private inspectMap() {
        const mapSize = this.tiledMap.getMapSize();
        const tileSize = this.tiledMap.getTileSize();
        log('地图大小:', mapSize);
        log('瓦片尺寸:', tileSize);
    }
    //#endregion

    /* ------------------ 4. 获取所有层 ------------------ */
    //#region 4. 层遍历
    private listLayers() {
        const layers = this.tiledMap.getLayers();
        layers.forEach(layer => log('Layer:', layer.getLayerName()));
    }
    //#endregion

    /* ------------------ 5. 获取对象层 ------------------ */
    //#region 5. 对象层
    private listObjectGroups() {
        const groups = this.tiledMap.getObjectGroups();
        groups.forEach(group => log('ObjectGroup:', group.getGroupName()));
    }
    //#endregion

    /* ------------------ 6. 自定义属性 ------------------ */
    //#region 6. 属性读取
    private readProperties() {
        // 地图级属性
        const mapProps = this.tiledMap.getProperties();
        log('Map props:', mapProps);

        // 指定 GID 的属性
        const gidProps = this.tiledMap.getPropertiesForGID(1);
        log('GID=1 props:', gidProps);

        // 指定名称的全局属性
        const prop = this.tiledMap.getProperty('bgm');
        log('bgm property:', prop);
    }
    //#endregion

    /* ------------------ 7. 像素偏移修正 ------------------ */
    //#region 7. 黑线修复
    private fixSeams() {
        this.tiledMap.enableTexelOffset(true); // 开启 0.5 像素偏移
    }
    //#endregion

    /* ------------------ 8. 动态切换层 ------------------ */
    //#region 8. 动态层
    private getLayerByName(name: string) {
        const layer = this.tiledMap.getLayer(name);
        if (layer) log(`层 ${name} 存在`);
        return layer;
    }
    //#endregion

    /* ------------------ 9. 生命周期 ------------------ */
    //#region Lifecycle
    protected start() {
        if (!this.tiledMap) return;
        this.fixSeams();
        this.listLayers();
        this.listObjectGroups();
        this.readProperties();

        // 如果没有在编辑器绑定，可动态加载
        if (!this.tiledMap.tmxAsset) {
            this.loadTiledMap('maps/level1');
        }
    }
    //#endregion
}