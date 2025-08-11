import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lesson02_')
export class Lesson02_ extends Component {

    @property({
        //检查器相关参数
        type: Number,  // 指定属性类型为 Node
        visible: true,  // 在编辑器中显示此属性
        displayName: '节点1',  // 在编辑器中显示的名称
        tooltip: '这是一个节点属性',  // 鼠标悬停时显示的提示
        multiline: false,  // 不使用多行文本框
        readonly: false,  // 属性在编辑器中可编辑
        min: 0,  // 最小值（仅对数值类型有效）
        max: 100,  // 最大值（仅对数值类型有效）
        step: 1,  // 步长（仅对数值类型有效）
        range: [0, 100],  // 范围（仅对数值类型有效）
        slide: false,  // 是否使用滑动条（仅对数值类型有效）
        group: '分组1',  // 分组名称
        radian: false,  // 是否使用弧度制

        //序列化相关参数
        serializable: true,  // 是否可序列化
        formerlySerializedAs: 'node1',  // 以前的属性名称（用于重命名属性时保持兼容性）
        editorOnly: false,  // 仅在编辑器中显示
        
        //其他参数
        override: false,  // 是否允许子类覆盖此属性
        displayOrder: 0,  // 显示顺序
    })
    node1: number = null!;

    start() {

    }

    update(deltaTime: number) {
        
    }
}


