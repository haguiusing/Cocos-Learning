// Lesson19_.ts
import { _decorator, Component, Node, Sprite, SpriteFrame, Color, Vec2, Size, UITransform } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Sprite 组件 API 演示脚本（官方文档全功能整合）
 * 核心类：Lesson19_
 */
@ccclass('Lesson19_')
export class Lesson19_ extends Component {

    /* ------------------ 1. 声明属性 ------------------ */
    //#region 声明属性
    @property(Sprite)
    sprite: Sprite = null!;

    @property(SpriteFrame)
    frame1: SpriteFrame = null!;

    @property(SpriteFrame)
    frame2: SpriteFrame = null!;
    //#endregion

    /* ------------------ 2. 基础设置 ------------------ */
    //#region 基础设置
    private demoBasic() {
        // 切换精灵帧
        this.sprite.spriteFrame = this.frame1;

        // 设置渲染颜色（乘贴图）
        this.sprite.color = Color.RED;

        // 启用灰度
        this.sprite.grayscale = true;
    }
    //#endregion

    /* ------------------ 3. 尺寸模式与类型 ------------------ */
    //#region 尺寸与类型
    private demoSizeAndType() {
        // 尺寸模式
        this.sprite.sizeMode = Sprite.SizeMode.CUSTOM; // 或 TRIMMED / RAW
        // 自定义尺寸
        this.sprite.node.getComponent(UITransform)?.setContentSize(new Size(300, 200));

        // 渲染类型
        this.sprite.type = Sprite.Type.FILLED;         // SIMPLE / SLICED / TILED / FILLED
    }
    //#endregion

    /* ------------------ 4. 填充模式（Filled） ------------------ */
    //#region 填充
    private demoFill() {
        this.sprite.type           = Sprite.Type.FILLED;
        this.sprite.fillType       = Sprite.FillType.HORIZONTAL; // 水平填充
        this.sprite.fillStart      = 0;     // 起始点 [-1,1]
        this.sprite.fillRange      = 0.5;   // 填充范围 [-1,1]
        this.sprite.fillCenter     = new Vec2(0.5, 0.5); // 中心点
    }
    //#endregion

    /* ------------------ 5. 动态切换图集帧 ------------------ */
    //#region 图集切换
    private demoAtlas() {
        // 若 spriteAtlas 已赋值，可直接通过名字切换
        this.sprite.changeSpriteFrameFromAtlas('icon2');
    }
    //#endregion

    /* ------------------ 6. 获取父节点/子节点组件 ------------------ */
    //#region 组件查找
    private demoFind() {
        // 获取自身 Sprite
        const self = this.node.getComponent(Sprite);

        // 获取子节点里所有 Sprite
        const childrenSprites = this.node.getComponentsInChildren(Sprite);

        console.log('Self: ', self);
        console.log('Children sprites count: ', childrenSprites.length);
    }
    //#endregion

    /* ------------------ 7. 生命周期事件 ------------------ */
    //#region 生命周期
    protected start() {
        this.demoBasic();
        this.demoSizeAndType();
        this.demoFill();
        this.demoAtlas();
        this.demoFind();
    }

    protected onDestroy() {
        // 取消所有定时器
        this.unscheduleAllCallbacks();
    }
    //#endregion
}