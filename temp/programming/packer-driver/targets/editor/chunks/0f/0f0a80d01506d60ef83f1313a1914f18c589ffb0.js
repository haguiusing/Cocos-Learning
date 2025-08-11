System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _dec2, _class2, _dec3, _dec4, _class3, _dec5, _dec6, _class4, _dec7, _class5, _dec8, _class6, _crd, ccclass, property, executionOrder, CompA, CompB, Configuration, Menu, GameData, Lesson08_;

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

      _cclegacy._RF.push({}, "491b2pcchxLOJER3ZZYJB/I", "Lesson08_", undefined); // Lesson08_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property,
        executionOrder
      } = _decorator);
      /* ===================== 1. 定义演示组件 ===================== */
      //#region 1A. 通用演示组件 CompA

      _export("CompA", CompA = (_dec = ccclass('CompA'), _dec(_class = class CompA extends Component {
        onLoad() {
          console.log('CompA onLoad!');
        }

        start() {
          console.log('CompA start!');
        }

        update(dt) {
          console.log('CompA update!');
        }

      }) || _class)); //#endregion
      //#region 1B. 通用演示组件 CompB


      _export("CompB", CompB = (_dec2 = ccclass('CompB'), _dec2(_class2 = class CompB extends Component {
        onLoad() {
          console.log('CompB onLoad!');
        }

        start() {
          console.log('CompB start!');
        }

        update(dt) {
          console.log('CompB update!');
        }

      }) || _class2)); //#endregion
      //#region 1C. 高优先级组件 Configuration


      _export("Configuration", Configuration = (_dec3 = ccclass('Configuration'), _dec4 = executionOrder(-1), _dec3(_class3 = _dec4(_class3 = class Configuration extends Component {
        onLoad() {
          console.log('Configuration onLoad!');
        }

        static init() {
          console.log('Configuration init()');
        }

        static updateConfig(dt) {
          console.log('Configuration updateConfig');
        }

      }) || _class3) || _class3)); //#endregion
      //#region 1D. 低优先级组件 Menu


      _export("Menu", Menu = (_dec5 = ccclass('Menu'), _dec6 = executionOrder(1), _dec5(_class4 = _dec6(_class4 = class Menu extends Component {
        onLoad() {
          console.log('Menu onLoad!');
        }

        static init() {
          console.log('Menu init()');
        }

        static updateMenu(dt) {
          console.log('Menu updateMenu');
        }

      }) || _class4) || _class4)); //#endregion
      //#region 1E. 中间优先级组件 GameData


      _export("GameData", GameData = (_dec7 = ccclass('GameData'), _dec7(_class5 = class GameData extends Component {
        static init() {
          console.log('GameData init()');
        }

        static updateData(dt) {
          console.log('GameData updateData');
        }

      }) || _class5)); //#endregion

      /* ===================== 2. 总控脚本 Lesson08_ ===================== */
      //#region 2A. 主控制脚本


      _export("Lesson08_", Lesson08_ = (_dec8 = ccclass('Lesson08_'), _dec8(_class6 = class Lesson08_ extends Component {
        /* -------------- 2A-1 生命周期 -------------- */
        onLoad() {
          console.warn('=== Lesson08_ onLoad ==='); // 统一初始化

          Configuration.init();
          GameData.init();
          Menu.init();
        }

        update(deltaTime) {
          // 统一更新顺序
          Configuration.updateConfig(deltaTime);
          GameData.updateData(deltaTime);
          Menu.updateMenu(deltaTime);
        }
        /* -------------- 2A-2 动态增删组件演示 -------------- */
        //#region 2A-2 动态增删组件


        demoAddRemove() {
          // 正确：通过节点添加组件
          const myComp = this.node.addComponent(CompA);
          myComp.printNodeName == null || myComp.printNodeName(); // 移除（销毁）组件

          this.node.removeComponent(myComp);
        } //#endregion

        /* -------------- 2A-3 入口演示 -------------- */


        start() {
          this.demoAddRemove();
        }

      }) || _class6)); //#endregion

      /* ===================== 3. 工具方法（可选） ===================== */
      //#region 3. 工具方法
      // 提供 printNodeName 方法，用于动态测试


      CompA.prototype.printNodeName = function () {
        console.log('My node name is:', this.node.name);
      }; //#endregion


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f0a80d01506d60ef83f1313a1914f18c589ffb0.js.map