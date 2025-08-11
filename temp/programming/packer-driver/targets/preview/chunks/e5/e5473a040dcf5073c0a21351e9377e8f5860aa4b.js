System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Skeleton, resources, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson25_;

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
      Skeleton = _cc.Skeleton;
      resources = _cc.resources;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7056cdWJBMpILSHY/FF/Ns", "Lesson25_", undefined); // Lesson25_.ts


      __checkObsolete__(['_decorator', 'Component', 'Skeleton', 'resources', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Skeleton（骨骼资源）API 全功能演示
       * 核心类：Lesson25_
       */

      _export("Lesson25_", Lesson25_ = (_dec = ccclass('Lesson25_'), _dec2 = property(Skeleton), _dec(_class = (_class2 = class Lesson25_ extends Component {
        constructor() {
          super(...arguments);

          /* ------------------ 1. 声明骨骼资源 ------------------ */
          //#region 1. 声明资源
          _initializerDefineProperty(this, "skeletonAsset", _descriptor, this);
        }

        //#endregion

        /* ------------------ 2. 访问骨骼关节信息 ------------------ */
        //#region 2. 关节信息
        printJoints() {
          if (!this.skeletonAsset) return;
          var joints = this.skeletonAsset.joints;
          var bindposes = this.skeletonAsset.bindposes;
          var invBindposes = this.skeletonAsset.inverseBindposes;
          log("\u5173\u8282\u6570\u91CF\uFF1A" + joints.length);
          joints.forEach((path, idx) => {
            log("[" + idx + "] " + path);
            log("    bindpose: " + bindposes[idx]);
            log("    invBindpose: " + invBindposes[idx]);
          });
        } //#endregion

        /* ------------------ 3. 验证骨骼有效性 ------------------ */
        //#region 3. 验证有效性


        checkValid() {
          if (this.skeletonAsset && this.skeletonAsset.validate()) {
            log('当前骨骼资源有效');
          } else {
            log('骨骼资源无效，缺少关节或绑定姿势数据');
          }
        } //#endregion

        /* ------------------ 4. 动态加载骨骼并获取引用 ------------------ */
        //#region 4. 动态加载


        loadSkeleton(path) {
          resources.load(path, Skeleton, (err, sk) => {
            if (err) {
              log('加载骨骼失败:', err);
              return;
            }

            this.skeletonAsset = sk;
            log('骨骼加载成功，引用计数:', sk.refCount);
            this.printJoints();
          });
        } //#endregion

        /* ------------------ 5. 增加/减少引用计数 ------------------ */
        //#region 5. 引用管理


        manageRef() {
          if (!this.skeletonAsset) return;
          this.skeletonAsset.addRef(); // 手动增加引用

          log('引用计数 +1:', this.skeletonAsset.refCount); // 使用完成后记得 decRef()
        } //#endregion

        /* ------------------ 6. 创建节点并挂载骨骼动画 ------------------ */
        //#region 6. 创建节点


        createSkeletonNode() {
          if (!this.skeletonAsset) return;
          this.skeletonAsset.createNode((err, node) => {
            if (err) {
              log('创建节点失败:', err);
              return;
            }

            node.setParent(this.node);
            log('已创建带骨骼动画的新节点:', node.name);
          });
        } //#endregion

        /* ------------------ 7. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          if (this.skeletonAsset) {
            this.printJoints();
            this.checkValid();
            this.manageRef();
            this.createSkeletonNode();
          } else {
            // 示例：动态加载
            this.loadSkeleton('skeletons/role');
          }
        }

        onDestroy() {
          if (this.skeletonAsset) {
            this.skeletonAsset.decRef();
          }
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skeletonAsset", [_dec2], {
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
//# sourceMappingURL=e5473a040dcf5073c0a21351e9377e8f5860aa4b.js.map