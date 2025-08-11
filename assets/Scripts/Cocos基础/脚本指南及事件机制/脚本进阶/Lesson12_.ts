// Lesson12_.ts
import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

//#region 1. 基础类定义与实例化
class Bar {
    info = 'Bar instance';
}

class Foo {
    public bar: Bar = null;
    constructor() {
        this.bar = new Bar();
    }
}
//#endregion

//#region 2. 实例方法
class FooWithMethod {
    public text = 'this is sprite';
    print() {
        console.log(this.text);
    }
}
//#endregion

//#region 3. 类型判断
class Base {}
class Sub extends Base {}
//#endregion

//#region 4. 静态变量与方法
class ObjectBase {
    static count = 11;
    static range = { w: 100, h: 100 };
    static getBounds() {
        return ObjectBase.range;
    }
}
class FooStatic extends ObjectBase {}
//#endregion

//#region 5. 继承与构造函数
class NodeBase {
    name: string;
    constructor() {
        this.name = 'node';
    }
}
class SpriteNode extends NodeBase {
    constructor() {
        super();
        console.log(this.name); // "node"
        this.name = 'sprite';
    }
}
//#endregion

//#region 6. 方法重写
class Shape {
    getName() {
        return 'shape';
    }
}
class Rect extends Shape {
    getName() {
        return 'rect';
    }
}
//#endregion

//#region 7. get/set 属性
@ccclass('SpriteWithGetterSetter')
class SpriteWithGetterSetter extends Component {
    @property
    get width() {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }
    @property
    private _width = 0;

    start() {
        this.width = 20;
        console.log('width =', this.width);
    }
}
//#endregion

//#region 8. 局部变量函数（类外）
let url = 'foo.png';
function doLoad(sprite: any) {
    console.log('doLoad called with', sprite);
}
class SpriteLocal {
    url = '';
    load() {
        this.url = url;
        doLoad(this);
    }
}
//#endregion

//#region 9. Lesson12_ 主脚本：演示所有功能
@ccclass('Lesson12_')
export class Lesson12_ extends Component {
    start() {
        // 1. 实例化
        const foo = new Foo();
        console.log(foo.bar.info);

        // 2. 实例方法
        const obj = new FooWithMethod();
        obj.print();

        // 3. 类型判断
        const sub = new Sub();
        console.log('sub instanceof Sub:', sub instanceof Sub);
        console.log('sub instanceof Base:', sub instanceof Base);

        // 4. 静态成员
        console.log('FooStatic.count:', FooStatic.count);
        FooStatic.range.w = 200;
        console.log('ObjectBase.range.w:', ObjectBase.range.w);

        // 5. 继承 & 构造
        const sprite = new SpriteNode();
        console.log('sprite.name:', sprite.name);

        // 6. 方法重写
        const rect = new Rect();
        console.log('rect.getName():', rect.getName());

        // 7. get/set
        const spriteGS = this.addComponent(SpriteWithGetterSetter);
        spriteGS.width = 88;

        // 8. 局部函数
        const localSprite = new SpriteLocal();
        localSprite.load();
    }
}
//#endregion