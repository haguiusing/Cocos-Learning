// Lesson28_.ts
import { _decorator, Component, TiledTile, resources, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * TiledTile（单块瓦片）API 全功能演示
 * 核心类：Lesson28_TiledTile
 */
@ccclass('Lesson28_TiledTile')
export class Lesson28_TiledTile extends Component {

    /* ------------------ 1. 组件声明 ------------------ */
    //#region 1. 组件声明
    @property(TiledTile)
    tile: TiledTile = null!;
    //#endregion

    /* ------------------ 2. 设置/读取坐标 ------------------ */
    //#region 2. 坐标
    private setTilePos(x: number, y: number) {
        this.tile.x = x;
        this.tile.y = y;
        log(`Tile 坐标设为 (${x}, ${y})`);
    }
    //#endregion

    /* ------------------ 3. 设置/读取 GID ------------------ */
    //#region 3. GID
    private setTileGID(gid: number) {
        this.tile.grid = gid;
        log(`Tile GID 设为 ${gid}`);
    }
    //#endregion

    /* ------------------ 4. 动态刷新瓦片信息 ------------------ */
    //#region 4. 刷新
    private refreshTile() {
        this.tile.updateInfo();
        log('Tile 信息已更新');
    }
    //#endregion

    /* ------------------ 5. 生命周期：初始化 & 演示 ------------------ */
    //#region 5. 生命周期
    protected start() {
        if (!this.tile) {
            log('请先在编辑器里把 TiledTile 拖到属性中');
            return;
        }

        // 演示：把瓦片移动到 (3, 2) 并切换成第 5 个图块
        this.setTilePos(3, 2);
        this.setTileGID(5);
        this.refreshTile();
    }
    //#endregion
}