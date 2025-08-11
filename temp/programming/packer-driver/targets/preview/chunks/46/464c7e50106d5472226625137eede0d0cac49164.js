System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, director, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Lesson06_;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41886q0thJEWrDF5SNAm2zq", "Lesson06_", undefined); // Lesson0X_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'director']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 创建与销毁节点示例
       * 核心类：Lesson06_
       */

      _export("Lesson06_", Lesson06_ = (_dec = ccclass('Lesson06_'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = class Lesson06_ extends Component {
        constructor() {
          super(...arguments);

          //#endregion

          /* ------------------ 2. 克隆已有节点 ------------------ */
          //#region 2. 克隆已有节点
          _initializerDefineProperty(this, "sourceNode", _descriptor, this);

          //#endregion

          /* ------------------ 3. 创建预制节点 ------------------ */
          //#region 3. 创建预制节点
          _initializerDefineProperty(this, "prefab", _descriptor2, this);

          //#endregion

          /* ------------------ 4. 销毁节点 ------------------ */
          //#region 4. 销毁节点
          _initializerDefineProperty(this, "target", _descriptor3, this);

          //#endregion

          /* ------------------ 5. 判断节点是否有效 ------------------ */
          //#region 5. 节点有效性
          this.posZ = -20;
        }

        /* ------------------ 1. 创建新节点 ------------------ */
        //#region 1. 创建新节点
        createNewNode() {
          var node = new Node('NewBox');
          node.setPosition(0, 0, -10); // 只是创建，尚未加入场景

          director.getScene().addChild(node); // 加入场景根节点
        }

        // 在属性检查器拖拽赋值
        cloneNode() {
          if (!this.sourceNode) return;
          var scene = director.getScene();
          var cloned = instantiate(this.sourceNode); // 克隆

          scene.addChild(cloned);
          cloned.setPosition(0, 0, -10);
        }

        // 在属性检查器拖拽赋值
        createPrefabNode() {
          if (!this.prefab) return;
          var scene = director.getScene();
          var node = instantiate(this.prefab); // 实例化预制

          scene.addChild(node);
          node.setPosition(0, 0, 0);
        }

        // 演示销毁的目标节点
        destroyNode() {
          if (!this.target) return;
          this.target.destroy(); // 标记销毁（本帧末真正释放）
        }

        update(deltaTime) {
          if (!this.target) return; // 每帧移动并打印有效性

          this.posZ += 1 * deltaTime;

          if (this.target.isValid) {
            this.target.setPosition(0, 0, this.posZ);
            console.info('isValid:', this.target.isValid);
          }
        } //#endregion

        /* ------------------ 6. 演示定时销毁 ------------------ */
        //#region 6. 定时销毁


        start() {
          // 5 秒后销毁 target
          this.scheduleOnce(() => this.destroyNode(), 5);
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sourceNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=464c7e50106d5472226625137eede0d0cac49164.js.map