System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TiledMap, resources, log, TiledMapAsset, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Lesson27_TiledMap;

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
      TiledMap = _cc.TiledMap;
      resources = _cc.resources;
      log = _cc.log;
      TiledMapAsset = _cc.TiledMapAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "136b6AiGgpFaoql4pkwmG+c", "Lesson27_TiledMap", undefined); // Lesson27_.ts


      __checkObsolete__(['_decorator', 'Component', 'TiledMap', 'Size', 'resources', 'log', 'TiledMapAsset']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * TiledMap（TMX 瓦片地图）API 全功能演示
       * 核心类：Lesson27_TiledMap
       */

      _export("Lesson27_TiledMap", Lesson27_TiledMap = (_dec = ccclass('Lesson27_TiledMap'), _dec2 = property(TiledMap), _dec(_class = (_class2 = class Lesson27_TiledMap extends Component {
        constructor(...args) {
          super(...args);

          /* ------------------ 1. 组件声明 ------------------ */
          //#region 1. 组件声明
          _initializerDefineProperty(this, "tiledMap", _descriptor, this);
        }

        //#endregion

        /* ------------------ 2. 加载 TMX 资源 ------------------ */
        //#region 2. 加载资源
        loadTiledMap(path) {
          resources.load(path, TiledMapAsset, (err, asset) => {
            if (err) {
              log('加载失败:', err);
              return;
            }

            this.tiledMap.tmxAsset = asset;
            this.inspectMap();
          });
        } //#endregion

        /* ------------------ 3. 地图基本信息 ------------------ */
        //#region 3. 基本信息


        inspectMap() {
          const mapSize = this.tiledMap.getMapSize();
          const tileSize = this.tiledMap.getTileSize();
          log('地图大小:', mapSize);
          log('瓦片尺寸:', tileSize);
        } //#endregion

        /* ------------------ 4. 获取所有层 ------------------ */
        //#region 4. 层遍历


        listLayers() {
          const layers = this.tiledMap.getLayers();
          layers.forEach(layer => log('Layer:', layer.getLayerName()));
        } //#endregion

        /* ------------------ 5. 获取对象层 ------------------ */
        //#region 5. 对象层


        listObjectGroups() {
          const groups = this.tiledMap.getObjectGroups();
          groups.forEach(group => log('ObjectGroup:', group.getGroupName()));
        } //#endregion

        /* ------------------ 6. 自定义属性 ------------------ */
        //#region 6. 属性读取


        readProperties() {
          // 地图级属性
          const mapProps = this.tiledMap.getProperties();
          log('Map props:', mapProps); // 指定 GID 的属性

          const gidProps = this.tiledMap.getPropertiesForGID(1);
          log('GID=1 props:', gidProps); // 指定名称的全局属性

          const prop = this.tiledMap.getProperty('bgm');
          log('bgm property:', prop);
        } //#endregion

        /* ------------------ 7. 像素偏移修正 ------------------ */
        //#region 7. 黑线修复


        fixSeams() {
          this.tiledMap.enableTexelOffset(true); // 开启 0.5 像素偏移
        } //#endregion

        /* ------------------ 8. 动态切换层 ------------------ */
        //#region 8. 动态层


        getLayerByName(name) {
          const layer = this.tiledMap.getLayer(name);
          if (layer) log(`层 ${name} 存在`);
          return layer;
        } //#endregion

        /* ------------------ 9. 生命周期 ------------------ */
        //#region Lifecycle


        start() {
          if (!this.tiledMap) return;
          this.fixSeams();
          this.listLayers();
          this.listObjectGroups();
          this.readProperties(); // 如果没有在编辑器绑定，可动态加载

          if (!this.tiledMap.tmxAsset) {
            this.loadTiledMap('maps/level1');
          }
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tiledMap", [_dec2], {
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
//# sourceMappingURL=653a9b2bb4937f84fcf5d83cc9bfd618fab2c5a8.js.map