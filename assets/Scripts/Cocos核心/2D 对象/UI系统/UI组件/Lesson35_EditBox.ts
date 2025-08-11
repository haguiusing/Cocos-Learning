// Lesson35_EditBox.ts

import { _decorator, Color, Component, EditBox, EventHandler, Label, log } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Lesson35_EditBox
 * 演示 Cocos Creator 3.8 EditBox 组件的常见 API 用法
 * 按功能划分为不同折叠块，便于查阅
 */
@ccclass('Lesson35_EditBox')
export class Lesson35_EditBox extends Component {

    /* ========================= 1. 获取/创建 EditBox 组件 ========================= */
    // #region 获取/创建 EditBox
    @property({ type: EditBox })
    editBox: EditBox | null = null;

    /** 运行时动态创建或获取 EditBox 组件 */
    getOrCreateEditBox(): EditBox | null {
        let eb = this.editBox ?? this.getComponent(EditBox);
        if (!eb) {
            eb = this.addComponent(EditBox);
            log('动态添加 EditBox 组件');
        }
        return eb;
    }
    // #endregion

    /* ========================= 2. 设置基础属性 ========================= */
    // #region 设置基础属性
    setBasicProperties() {
        const eb = this.getOrCreateEditBox();
        if (!eb) return;

        // 设置初始文本
        eb.string = '初始文本';

        // 设置占位符文本
        eb.placeholder = '请输入内容...';

        // 设置最大输入长度
        eb.maxLength = 20;

        // 设置输入模式（单行）
        eb.inputMode = EditBox.InputMode.SINGLE_LINE;

        // 设置输入标志位（密码模式）
        eb.inputFlag = EditBox.InputFlag.PASSWORD;

        // 设置返回键类型（仅移动端有效）
        eb.returnType = EditBox.KeyboardReturnType.DONE;
    }
    // #endregion

    /* ========================= 3. 设置文本显示相关 ========================= */
    // #region 设置文本显示
    @property({ type: Label })
    textLabel: Label | null = null;

    setLabelProperties() {
        const eb = this.getOrCreateEditBox();
        if (!eb) return;

        // 获取文本标签组件
        const label = this.textLabel ?? eb.textLabel;
        if (label) {
            label.string = '这是文本标签';
            label.fontSize = 24;
            label.color = new Color(255, 255, 255); // 白色
        }
    }
    // #endregion

    /* ========================= 4. 设置占位符相关 ========================= */
    // #region 设置占位符
    @property({ type: Label })
    placeholderLabel: Label | null = null;

    setPlaceholderProperties() {
        const eb = this.getOrCreateEditBox();
        if (!eb) return;

        // 获取占位符标签组件
        const placeholder = this.placeholderLabel ?? eb.placeholderLabel;
        if (placeholder) {
            placeholder.string = '占位符文本';
            placeholder.fontSize = 20;
            placeholder.color = new Color(150, 150, 150); // 灰色
        }
    }
    // #endregion

    /* ========================= 5. 事件监听 ========================= */
    // #region 事件监听
    addEventListeners() {
        const editboxEventHandler = new EventHandler();
        editboxEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        editboxEventHandler.component = 'example';
        editboxEventHandler.handler = 'onEditDidBegan';
        editboxEventHandler.customEventData = 'foobar';

        const eb = this.getOrCreateEditBox();
        if (!eb) return;

        eb.editingDidBegan.push(editboxEventHandler);
        // 你也可以通过类似的方式来注册其它回调函数
        eb.editingDidEnded.push(editboxEventHandler);
        eb.textChanged.push(editboxEventHandler);
        eb.editingReturn.push(editboxEventHandler);
    }

    onEditDidBegan(editbox, customEventData) {
        // 这里 editbox 是一个 EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // 假设这个回调是给 editingDidEnded 事件的
    onEditDidEnded(editbox, customEventData) {
        // 这里 editbox 是一个 EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // 假设这个回调是给 textChanged 事件的
    onTextChanged(text, editbox, customEventData) {
        // 这里的 text 表示修改完后的 EditBox 的文本内容
        // 这里 editbox 是一个 EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // 假设这个回调是给 editingReturn 事件的
    onEditingReturn(editbox, customEventData) {
        // 这里 editbox 是一个 EditBox 对象
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }
    // #endregion

    /* ========================= 6. 焦点控制 ========================= */
    // #region 焦点控制
    controlFocus() {
        const eb = this.getOrCreateEditBox();
        if (!eb) return;

        // 让 EditBox 获得焦点
        eb.focus();

        // 检查是否获得焦点
        if (eb.isFocused()) {
            log('EditBox 已获得焦点');
        }

        // 让 EditBox 失去焦点
        eb.blur();
    }
    // #endregion

    /* ========================= 7. 生命周期示例 ========================= */
    // #region 生命周期
    onLoad() {
        // 初始化 EditBox 属性
        this.setBasicProperties();
        this.setLabelProperties();
        this.setPlaceholderProperties();
        this.addEventListeners();
    }

    start() {
        // 演示：启动后自动聚焦
        this.controlFocus();
    }
    // #endregion
}