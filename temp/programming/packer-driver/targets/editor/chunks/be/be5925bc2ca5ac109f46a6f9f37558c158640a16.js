System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SafeArea, _dec, _class, _crd, ccclass, property, Lesson53_SafeArea;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SafeArea = _cc.SafeArea;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "579d8cuS+dJM4c3/6XDoclR", "Lesson53_SafeArea", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SafeArea']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson53_SafeArea", Lesson53_SafeArea = (_dec = ccclass('Lesson53_SafeArea'), _dec(_class = class Lesson53_SafeArea extends Component {
        //#region 初始化SafeArea
        start() {
          // 获取节点上的SafeArea组件
          const safeArea = this.node.getComponent(SafeArea);

          if (!safeArea) {
            // 如果没有SafeArea组件，则添加一个
            this.node.addComponent(SafeArea);
          }

          console.log('SafeArea组件初始化完成');
        } //#endregion
        //#region 更新安全区域


        updateArea() {
          // 获取节点上的SafeArea组件
          const safeArea = this.node.getComponent(SafeArea);

          if (safeArea) {
            // 立即适配安全区域
            safeArea.updateArea();
            console.log('安全区域已更新');
          }
        } //#endregion
        //#region 监听设备安全区域变化


        onLoad() {
          // 获取节点上的SafeArea组件
          const safeArea = this.node.getComponent(SafeArea);

          if (safeArea) {
            // 监听设备安全区域变化
            this.node.on('size-changed', this.onSafeAreaChanged, this);
          }
        }

        onSafeAreaChanged() {
          // 当设备安全区域发生变化时，更新安全区域
          this.updateArea();
          console.log('设备安全区域发生变化，已重新适配');
        } //#endregion
        //#region 销毁组件


        onDestroy() {
          // 获取节点上的SafeArea组件
          const safeArea = this.node.getComponent(SafeArea);

          if (safeArea) {
            // 销毁SafeArea组件
            safeArea.destroy();
            console.log('SafeArea组件已销毁');
          }
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be5925bc2ca5ac109f46a6f9f37558c158640a16.js.map