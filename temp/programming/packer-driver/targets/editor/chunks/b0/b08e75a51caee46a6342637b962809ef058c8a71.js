System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Size, Vec2, Vec3, _dec, _class, _crd, ccclass, property, Lesson31_UITransform;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a775eBl51xPlb29qxoTgTz4", "Lesson31_UITransform", undefined); // Lesson31_UITransform.ts


      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'Size', 'Vec2', 'Vec3', 'Rect', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * UITransform 常见 API 使用案例
       * 核心类：Lesson31_UITransform
       */

      _export("Lesson31_UITransform", Lesson31_UITransform = (_dec = ccclass('Lesson31_UITransform'), _dec(_class = class Lesson31_UITransform extends Component {
        /* ------------------ 1. 基础尺寸与锚点 ------------------ */
        //#region 1. 尺寸与锚点
        demoSizeAnchor() {
          const ui = this.getComponent(UITransform); // 设置内容尺寸

          ui.setContentSize(200, 100);
          ui.setContentSize(new Size(300, 150)); // 设置锚点

          ui.setAnchorPoint(0.5, 0.5);
          ui.setAnchorPoint(new Vec2(0, 1)); // 左上角
        } //#endregion

        /* ------------------ 2. 坐标系转换 ------------------ */
        //#region 2. 坐标转换


        demoCoordinate() {
          const ui = this.getComponent(UITransform); // 节点局部坐标 → 世界坐标

          const worldPos = ui.convertToWorldSpaceAR(new Vec3(0, 0, 0)); // 世界坐标 → 节点局部坐标

          const localPos = ui.convertToNodeSpaceAR(worldPos);
        } //#endregion

        /* ------------------ 3. 包围盒获取 ------------------ */
        //#region 3. 包围盒


        demoBoundingBox() {
          const ui = this.getComponent(UITransform); // 自身在父节点坐标系中的包围盒

          const localBox = ui.getBoundingBox(); // 世界坐标系下包含子节点的总包围盒

          const worldBox = ui.getBoundingBoxToWorld(); // 计算世界空间 AABB

          const aabb = ui.getComputeAABB();
        } //#endregion

        /* ------------------ 4. 点击测试 ------------------ */
        //#region 4. 点击测试


        demoHitTest() {
          const ui = this.getComponent(UITransform); // 判断本地 UI 坐标点是否命中当前节点（不推荐使用）
          // const hitUI = ui.isHit(new Vec2(100, 100));
          // 推荐使用新版 hitTest（屏幕坐标 → 节点局部）

          const screenPoint = new Vec2(200, 300);
          const hitNode = ui.hitTest(screenPoint);
        } //#endregion

        /* ------------------ 5. 渲染优先级 ------------------ */
        //#region 5. 渲染顺序


        demoPriority() {
          const ui = this.getComponent(UITransform); // 设置同一层级下的渲染顺序（数值越大越靠前）

          ui.priority = 10;
        } //#endregion

        /* ------------------ 6. 运行时动态修改示例 ------------------ */
        //#region 6. 动态修改


        dynamicAdjust() {
          const ui = this.getComponent(UITransform); // 每帧让节点尺寸逐渐增大

          this.schedule(() => {
            const size = ui.contentSize;
            ui.setContentSize(size.width + 1, size.height + 1);
          }, 0.1);
        } //#endregion

        /* ------------------ 7. 生命周期 ------------------ */
        //#region 7. 生命周期


        start() {
          this.demoSizeAnchor();
          this.demoCoordinate();
          this.demoBoundingBox();
          this.demoHitTest();
          this.demoPriority();
          this.dynamicAdjust();
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b08e75a51caee46a6342637b962809ef058c8a71.js.map