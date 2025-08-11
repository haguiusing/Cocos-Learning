System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TiledTile, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson28_;

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
      TiledTile = _cc.TiledTile;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9dd3bxGspF7qTCRfqgwxc0", "Lesson28_", undefined); // Lesson28_.ts


      __checkObsolete__(['_decorator', 'Component', 'TiledTile', 'resources', 'log']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * TiledTile（单块瓦片）API 全功能演示
       * 核心类：Lesson28_
       */

      _export("Lesson28_", Lesson28_ = (_dec = ccclass('Lesson28_'), _dec2 = property(TiledTile), _dec(_class = (_class2 = class Lesson28_ extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "tile", _descriptor, this);
        }

        //#endregion

        /* ------------------ 2. 设置/读取坐标 ------------------ */
        //#region 2. 坐标
        setTilePos(x, y) {
          this.tile.x = x;
          this.tile.y = y;
          log(`Tile 坐标设为 (${x}, ${y})`);
        } //#endregion

        /* ------------------ 3. 设置/读取 GID ------------------ */
        //#region 3. GID


        setTileGID(gid) {
          this.tile.grid = gid;
          log(`Tile GID 设为 ${gid}`);
        } //#endregion

        /* ------------------ 4. 动态刷新瓦片信息 ------------------ */
        //#region 4. 刷新


        refreshTile() {
          this.tile.updateInfo();
          log('Tile 信息已更新');
        } //#endregion

        /* ------------------ 5. 生命周期：初始化 & 演示 ------------------ */
        //#region 5. 生命周期


        start() {
          if (!this.tile) {
            log('请先在编辑器里把 TiledTile 拖到属性中');
            return;
          } // 演示：把瓦片移动到 (3, 2) 并切换成第 5 个图块


          this.setTilePos(3, 2);
          this.setTileGID(5);
          this.refreshTile();
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tile", [_dec2], {
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
//# sourceMappingURL=1ed3d8b5ac976381843f5fe63d8e0eeb840bdb2c.js.map