import { _decorator, AudioSource, Color, Component, CurveRange, Enum, Gradient, GradientRange, Label, Node, RealCurve, Sprite } from 'cc';
const { ccclass, property
    , executeInEditMode, requireComponent
    , executionOrder, disallowMultiple, menu
    , help
    , integer, float, type} = _decorator;

enum A {
    c,
    d
}
Enum(A);

@ccclass('Lesson01_')
@executeInEditMode(false)  //不允许在编辑模式下运行
@requireComponent(AudioSource)  //要求节点必须有AudioSource组件
@executionOrder(100)  //设置脚本执行顺序，数字越小，执行越早
@disallowMultiple(true)  //不允许在同一节点上添加多个此组件
@menu('自定义脚本/脚本指南及事件机制/脚本基础/Lesson01_')  //在编辑器菜单中显示此脚本
@help('https://docs.cocos.com/creator/3.8/manual/zh/scripting/decorator.html')  //提供帮助链接
export class Lesson01_ extends Component {
    //#region 属性装饰器示例
    @property({
        type: Node,
        visible: true,
    })
    Node: Node | null = null;

    @property // JavaScript 原始类型，根据默认值自动识别为 Creator 的浮点数类型。
    index1 = 0;
    @integer // 声明属性的 cc 类型为整数
    index2 = 0;

    @property(Node) // 声明属性 cc 类型为 Node。当属性参数只有 type 时可这么写，等价于 @property({type: Node})
    targetNode: Node | null = null; // 等价于 targetNode: Node = null!;

    // 声明属性 children 的 cc 类型为 Node 数组
    @property({
        type: [Node]
    })
    childrens1: Node[] = [];
    @type([Node]) // 声明属性 children 的 cc 类型为 Node 数组
    childrens2: Node[] = [];

    @property({
        type: String,
    }) // 警告：不应该使用构造函数 String。等价于 CCString。也可以选择不声明类型
    text1 = '';
    @type(String) // 警告：不应该使用构造函数 String。等价于 CCString。也可以选择不声明类型
    text2 = '';
    // JavaScript 原始类型 `number`、`string`、`boolean` 通常可以不用声明
    // 可以直接写
    @property
    text3 = '';

    @property
    children2 = []; // 未声明 cc 类型，从初始化式的求值结果推断元素为未定义的数组

    @property
    _valueB = 'abc'; // 此处 '_' 开头的属性，只序列化，不会在编辑器属性面板显示

    @property({ type: A })
    accx : A = A.c;
    //#endregion

    //#region visible
    //_ 开头, 不会在编辑器属性面板显示
    @property({ visible: true })
    private _num = 0;

    @property({ visible: false })
    num1 = 0;
    //#endregion

    //#region serializable
    @property({ serializable: false })
    num2 = 0;
    //#endregion

    //#region override
    @property({ tooltip: "my id", override: true })
    id = "";
    //#endregion

    //#region group
    // 分组一
    // 组内名为 “bar” 的属性分类，其中包含一个名为 label 的 Label 属性
    @property({ group: { name: 'bar' }, type: Label }) 
    label: Label = null!; 
    // 组内名为 “foo” 的属性分类，其中包含一个名为 sprite 的 Sprite 属性
    @property({ group: { name: 'foo' }, type: Sprite }) 
    sprite: Sprite = null!;

    // 分组二
    // 组内名为 “bar2” 的属性分类，其中包含名为 label2 的 Label 属性和名为 sprite2 的 Sprite 属性，并且指定排序为 1。
    @property({ group: { name: 'bar2', id: '2', displayOrder: 1 }, type: Label }) 
    label2: Label = null!; 
    @property({ group: { name: 'bar2', id: '2' }, type: Sprite }) 
    sprite2: Sprite = null!;

    // 分组三
    // 组内名为 “bar” 的属性分类，其中包含名为 label2 的 Label 属性和名为 sprite2 的 Sprite 属性，并且指定排序为 1。
    @property({ group: { name: 'bar2', id: '2', displayOrder: 1 }, displayOrder: 2, type: Label }) 
    label3: Label = null!; 
    @property({ group: { name: 'bar2', id: '2' }, displayOrder: 1, type: Sprite }) 
    sprite3: Sprite = null!;
    //#endregion

    //#region 内置类型界面
    @property(Color)
    color:Color

    @property(RealCurve)
    realCurve:RealCurve = new RealCurve();

    @property(CurveRange)
    curveRange : CurveRange = new CurveRange();

    @property(Gradient)
    gradient = new Gradient();

    @property(GradientRange)
    gradientRange:GradientRange = new GradientRange();
    //#endregion

    start() {

    }

    update(deltaTime: number) {
        
    }
}


