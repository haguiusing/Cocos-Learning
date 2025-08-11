System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Texture2D, assetManager, Sprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Lesson10_;

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
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      assetManager = _cc.assetManager;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76fe3o3N0FM9KRqLauzE18I", "Lesson10_", undefined); // Lesson10_.ts


      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'Texture2D', 'assetManager', 'ImageAsset', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 获取与加载资源示例
       * 核心类：Lesson10_
       */

      _export("Lesson10_", Lesson10_ = (_dec = ccclass('Lesson10_'), _dec2 = property(Texture2D), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = class Lesson10_ extends Component {
        constructor() {
          super(...arguments);

          /* ------------------ 1. 在属性检查器中声明资源 ------------------ */
          //#region 1. 属性面板声明
          _initializerDefineProperty(this, "texture", _descriptor, this);

          // 拖拽 Texture2D 到面板
          _initializerDefineProperty(this, "spriteFrame", _descriptor2, this);
        }

        // 拖拽 SpriteFrame 到面板
        //#endregion

        /* ------------------ 2. 直接使用已绑定资源 ------------------ */
        //#region 2. 直接使用已绑定资源
        useInspectorAssets() {
          console.log('Inspector texture:', this.texture);
          console.log('Inspector spriteFrame:', this.spriteFrame); // 示例：把 SpriteFrame 赋给当前节点上的 Sprite

          var sprite = this.getComponent(Sprite);

          if (sprite && this.spriteFrame) {
            sprite.spriteFrame = this.spriteFrame;
          }
        } //#endregion

        /* ------------------ 3. 动态加载本地资源 ------------------ */
        //#region 3. 动态加载


        loadLocalAsset() {
          // 动态加载 resources 目录下的资源
          assetManager.resources.load('textures/hero', SpriteFrame, (err, asset) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('Dynamic loaded SpriteFrame:', asset);
            var sprite = this.getComponent(Sprite);
            if (sprite) sprite.spriteFrame = asset;
          });
        } //#endregion

        /* ------------------ 4. 加载远程 / 设备资源 ------------------ */
        //#region 4. 加载远程 & 设备资源


        loadRemoteAsset(url) {
          // 远程纹理
          assetManager.loadRemote(url, (err, imageAsset) => {
            if (err) {
              console.error(err);
              return;
            }

            var tex = new Texture2D();
            tex.image = imageAsset;
            console.log('Remote texture loaded:', tex); // 这里可继续把 Texture2D 赋给 SpriteFrame 或材质
          });
        }

        loadDeviceAsset(filePath) {
          // 本地文件
          assetManager.loadRemote(filePath, (err, imageAsset) => {
            if (err) {
              console.error(err);
              return;
            }

            var tex = new Texture2D();
            tex.image = imageAsset;
            console.log('Device texture loaded:', tex);
          });
        } //#endregion

        /* ------------------ 5. 释放资源（可选） ------------------ */
        //#region 5. 释放资源


        releaseAsset(asset) {
          assetManager.releaseAsset(asset);
          console.log('Asset released:', asset);
        } //#endregion

        /* ------------------ 6. 生命周期 ------------------ */
        //#region 6. 生命周期


        start() {
          this.useInspectorAssets();
          this.loadLocalAsset(); // 示例：远程资源
          // this.loadRemoteAsset('https://example.com/remote.png');
        }

        onDestroy() {
          // 按需释放
          if (this.texture) this.releaseAsset(this.texture);
          if (this.spriteFrame) this.releaseAsset(this.spriteFrame);
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec3], {
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
//# sourceMappingURL=637325e414e08c488ef6bae546098ab8f8a3b83a.js.map