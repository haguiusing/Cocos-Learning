System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, find, Player, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson04_;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      find = _cc.find;
    }, function (_unresolved_2) {
      Player = _unresolved_2.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49818sAUDRNUZsi5IeQYy4L", "Lesson04_", undefined); // Lesson0X_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'find']);

      ({
        ccclass,
        property
      } = _decorator); // 如需演示“属性检查器设置组件”功能，请确保项目中存在 Player.ts 脚本

      /**
       * 访问节点与组件的完整示例
       * 核心类：Lesson04_
       */
      _export("Lesson04_", Lesson04_ = (_dec = ccclass('Lesson04_'), _dec2 = property(Node), _dec3 = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec(_class = (_class2 = class Lesson04_ extends Component {
        constructor(...args) {
          super(...args);

          // #endregion

          /* ------------------ 3. 属性检查器设置节点 ------------------ */
          // #region 3. 属性检查器设置节点
          _initializerDefineProperty(this, "playerNode", _descriptor, this);

          // #endregion

          /* ------------------ 4. 属性检查器设置组件 ------------------ */
          // #region 4. 属性检查器设置组件
          _initializerDefineProperty(this, "playerComp", _descriptor2, this);
        }

        /* ------------------ 1. 获得组件所在的节点 ------------------ */
        // #region 1. 获得组件所在的节点
        demo1() {
          const node = this.node;
          node.setPosition(0, 0, 0);
        } // #endregion

        /* ------------------ 2. 获得同一个节点上的其他组件 ------------------ */
        // #region 2. 获得其他组件


        demo2() {
          const label = this.getComponent(Label);

          if (label) {
            label.string = 'Hello, Cocos!';
          }
        }

        demo3() {
          if (this.playerNode) {
            console.log('The player is ' + this.playerNode.name);
          }
        }

        demo4() {
          if (this.playerComp) {
            console.log('Player component ready:', this.playerComp);
          }
        } // #endregion

        /* ------------------ 5. 查找子节点 ------------------ */
        // #region 5. 查找子节点


        demo5() {
          // 遍历所有直接子节点
          for (const child of this.node.children) {
            console.log('Child:', child.name);
          } // 按名称查找


          const cannon = this.node.getChildByName('Cannon 01');

          if (cannon) {
            console.log('Found Cannon 01');
          } // 深度路径查找


          const sfx = find('Cannon 01/Barrel/SFX', this.node);

          if (sfx) {
            console.log('Found SFX at deep path');
          }
        } // #endregion

        /* ------------------ 6. 全局名字查找 ------------------ */
        // #region 6. 全局名字查找


        demo6() {
          const backNode = find('Canvas/Menu/Back');

          if (backNode) {
            console.log('Found global node:', backNode.name);
          }
        } // #endregion

        /* ------------------ 7. 通过模块访问（全局变量） ------------------ */
        // #region 7. 通过模块访问


        demo7() {// 假设 Global.ts 已存在并正确导出
          // import { Global } from './Global';
          // if (Global.backLabel) {
          //     Global.backLabel.string = 'Updated via Global';
          // }
        } // #endregion

        /* ------------------ 生命周期 ------------------ */


        start() {
          this.demo1();
          this.demo2();
          this.demo3();
          this.demo4();
          this.demo5();
          this.demo6();
          this.demo7();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7de1b7d5634b246a3774594bbcbabf96610ff8ea.js.map