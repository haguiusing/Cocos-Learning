System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, dragonBones, resources, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson26_;

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
      dragonBones = _cc.dragonBones;
      resources = _cc.resources;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40967qoIhRLxpvtTCgFR5Is", "Lesson26_", undefined); // Lesson26_.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'dragonBones', 'resources', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * DragonBones ArmatureDisplay 全功能演示
       * 核心类：Lesson26_
       */

      _export("Lesson26_", Lesson26_ = (_dec = ccclass('Lesson26_'), _dec2 = property(dragonBones.ArmatureDisplay), _dec(_class = (_class2 = class Lesson26_ extends Component {
        constructor() {
          super(...arguments);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "armatureDisplay", _descriptor, this);
        }

        //#endregion

        /* ------------------ 2. 加载骨骼资源 ------------------ */
        //#region 2. 资源加载
        loadDragonBones() {
          resources.loadDir('dragon', dragonBones.DragonBonesAsset, (err, assets) => {
            if (err) {
              log('加载失败', err);
              return;
            }

            this.armatureDisplay.dragonAsset = assets[0]; // 继续加载图集

            resources.loadDir('dragon', dragonBones.DragonBonesAtlasAsset, (err2, atlas) => {
              if (!err2) this.armatureDisplay.dragonAtlasAsset = atlas[0];
              this.buildArmature();
            });
          });
        } //#endregion

        /* ------------------ 3. 构建骨架 ------------------ */
        //#region 3. 构建


        buildArmature() {
          var armatures = this.armatureDisplay.getArmatureNames();
          log('可用骨架:', armatures);

          if (armatures.length) {
            this.armatureDisplay.armatureName = armatures[0];
            this.playRandomAnim();
          }
        } //#endregion

        /* ------------------ 4. 动画控制 ------------------ */
        //#region 4. 动画控制


        playRandomAnim() {
          var anims = this.armatureDisplay.getAnimationNames(this.armatureDisplay.armatureName);
          if (!anims.length) return;
          var anim = anims[Math.floor(Math.random() * anims.length)];
          this.armatureDisplay.playAnimation(anim, -1); // -1 无限循环
        } //#endregion

        /* ------------------ 5. 时间缩放 ------------------ */
        //#region 5. 时间缩放


        demoTimeScale() {
          this.armatureDisplay.timeScale = 0.5; // 0.5 倍速
        } //#endregion

        /* ------------------ 6. 缓存模式 ------------------ */
        //#region 6. 缓存模式


        toggleCacheMode() {
          var mode = this.armatureDisplay.isAnimationCached() ? dragonBones.AnimationCacheMode.REALTIME : dragonBones.AnimationCacheMode.SHARED_CACHE;
          this.armatureDisplay.setAnimationCacheMode(mode);
        } //#endregion

        /* ------------------ 7. 合批开关 ------------------ */
        //#region 7. 合批


        toggleBatch() {
          this.armatureDisplay.enableBatch = !this.armatureDisplay.enableBatch;
        } //#endregion

        /* ------------------ 8. 挂点示例 ------------------ */
        //#region 8. Socket（挂点）


        demoSocket() {
          // 查询所有挂点
          var sockets = this.armatureDisplay.querySockets();
          log('可用挂点:', sockets); // 注册一个挂点

          var weapon = new Node('Weapon');
          weapon.setParent(this.node);
          this.armatureDisplay.sockets = [{
            path: "hand_r",
            target: weapon,
            boneIndex: 1
          } // 跟随右手骨骼
          ];
        } //#endregion

        /* ------------------ 9. 事件监听 ------------------ */
        //#region 9. 事件


        listenEvents() {
          this.armatureDisplay.on(dragonBones.EventObject.START, () => log('动画开始'), this);
          this.armatureDisplay.on(dragonBones.EventObject.COMPLETE, () => log('动画完成'), this);
          this.armatureDisplay.on(dragonBones.EventObject.LOOP_COMPLETE, () => log('一次循环完成'), this);
        } //#endregion

        /* ------------------ 10. 调试骨骼 ------------------ */
        //#region 10. 调试


        toggleDebugBones() {
          this.armatureDisplay.debugBones = !this.armatureDisplay.debugBones;
        } //#endregion

        /* ------------------ 11. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          if (!this.armatureDisplay) return;
          this.loadDragonBones();
          this.listenEvents();
        }

        onDestroy() {
          var _this$armatureDisplay;

          (_this$armatureDisplay = this.armatureDisplay) == null || _this$armatureDisplay.off(dragonBones.EventObject.COMPLETE, () => log(""), this);
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armatureDisplay", [_dec2], {
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
//# sourceMappingURL=2e295a5294e0540528c50bbd2447c522721cfcdc.js.map