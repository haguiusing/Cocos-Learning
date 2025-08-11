System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, assetManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson09_;

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
      director = _cc.director;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7f10p9X9NM/5Gw7QjsBB8Y", "Lesson09_", undefined); // Lesson09_.ts


      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Asset', 'Scene', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 场景管理与常驻节点示例
       * 核心类：Lesson09_
       */

      _export("Lesson09_", Lesson09_ = (_dec = ccclass('Lesson09_'), _dec2 = property(Node), _dec(_class = (_class2 = class Lesson09_ extends Component {
        constructor(...args) {
          super(...args);

          //#endregion

          /* ------------------ 5. 常驻节点 ------------------ */
          //#region 5. 常驻节点
          _initializerDefineProperty(this, "persistNode", _descriptor, this);
        }

        /* ------------------ 1. 普通场景切换 ------------------ */
        //#region 1. 普通场景切换
        switchScene(sceneName) {
          director.loadScene(sceneName);
        } //#endregion

        /* ------------------ 2. Asset Bundle 场景 ------------------ */
        //#region 2. Asset Bundle 场景


        switchSceneByBundle(bundleName, sceneName) {
          const bundle = assetManager.getBundle(bundleName);
          if (!bundle) return;
          bundle.loadScene(sceneName, (err, sceneAsset) => {
            if (err) {
              console.error(err);
              return;
            }

            director.runScene(sceneAsset);
          });
        } //#endregion

        /* ------------------ 3. 场景加载回调 ------------------ */
        //#region 3. 场景加载回调


        switchWithCallback(targetScene) {
          director.loadScene(targetScene, this.onSceneLaunched.bind(this));
        }

        onSceneLaunched() {
          console.log('Scene launched, do further init...');
        } //#endregion

        /* ------------------ 4. 预加载场景 ------------------ */
        //#region 4. 预加载场景


        preload(targetScene) {
          director.preloadScene(targetScene, () => {
            console.log(`${targetScene} preloaded`);
          });
        }

        loadPreloaded(targetScene) {
          director.loadScene(targetScene);
        }

        // 在属性检查器中拖入根节点
        makePersist() {
          if (this.persistNode && this.persistNode.parent === null) {
            director.addPersistRootNode(this.persistNode);
            console.log('Node set to persistent');
          }
        }

        removePersist() {
          if (this.persistNode) {
            director.removePersistRootNode(this.persistNode);
            console.log('Node removed from persistent list');
          }
        } //#endregion

        /* ------------------ 6. 生命周期演示 ------------------ */
        //#region 6. 生命周期


        start() {
          // 示例：把本脚本所在节点设为常驻
          this.makePersist();
        }

        onDestroy() {
          this.removePersist();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "persistNode", [_dec2], {
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
//# sourceMappingURL=a7edd9a0f7b6514869e3737a282b41be6f402d99.js.map