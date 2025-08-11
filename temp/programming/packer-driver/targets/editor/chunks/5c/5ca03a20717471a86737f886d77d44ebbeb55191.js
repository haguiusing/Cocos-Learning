System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Lesson50_BlockInputEvents;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3574f1pCRxLUrGbRNvHMfKC", "Lesson50_BlockInputEvents", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson50_BlockInputEvents", Lesson50_BlockInputEvents = (_dec = ccclass('Lesson50_BlockInputEvents'), _dec(_class = class Lesson50_BlockInputEvents extends Component {
        // 展示如何启用和禁用组件
        //#region 启用/禁用组件
        start() {
          // 获取节点上的BlockInputEvents组件
          const blockInputEvents = this.node.getComponent('BlockInputEvents');

          if (blockInputEvents) {
            // 启用组件
            blockInputEvents.enabled = true;
            console.log('BlockInputEvents组件已启用');
          }
        }

        onDisable() {
          // 获取节点上的BlockInputEvents组件
          const blockInputEvents = this.node.getComponent('BlockInputEvents');

          if (blockInputEvents) {
            // 禁用组件
            blockInputEvents.enabled = false;
            console.log('BlockInputEvents组件已禁用');
          }
        } //#endregion
        // 展示如何判断组件是否可用
        //#region 判断组件是否可用


        update(dt) {
          // 获取节点上的BlockInputEvents组件
          const blockInputEvents = this.node.getComponent('BlockInputEvents');

          if (blockInputEvents) {
            // 判断组件是否可用
            if (blockInputEvents.isValid) {
              console.log('BlockInputEvents组件可用');
            } else {
              console.log('BlockInputEvents组件不可用');
            }
          }
        } //#endregion
        // 展示如何销毁组件
        //#region 销毁组件


        onDestroy() {
          // 获取节点上的BlockInputEvents组件
          const blockInputEvents = this.node.getComponent('BlockInputEvents');

          if (blockInputEvents) {
            // 销毁组件
            blockInputEvents.destroy();
            console.log('BlockInputEvents组件已销毁');
          }
        } //#endregion
        // 展示如何获取组件的uuid
        //#region 获取组件的uuid


        onLoad() {
          // 获取节点上的BlockInputEvents组件
          const blockInputEvents = this.node.getComponent('BlockInputEvents');

          if (blockInputEvents) {
            // 获取组件的uuid
            const uuid = blockInputEvents.uuid;
            console.log('BlockInputEvents组件的uuid为:', uuid);
          }
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ca03a20717471a86737f886d77d44ebbeb55191.js.map