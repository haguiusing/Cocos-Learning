System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Lesson11_;

  function then(arg0) {
    throw new Error('Function not implemented.');
  }

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

      _cclegacy._RF.push({}, "c8975tnl4tFeYDXM+WOCKCF", "Lesson11_", undefined); // Lesson11_.ts


      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * tsconfig 配置演示脚本
       * 核心类：Lesson11_
       * 说明：此脚本仅用于示范 IDE 提示与 Creator 实际行为的差异，
       *      不会真正修改 tsconfig.json。
       */

      _export("Lesson11_", Lesson11_ = (_dec = ccclass('Lesson11_'), _dec(_class = class Lesson11_ extends Component {
        /* ------------------ 1. 禁止使用的写法（IDE 不报错，但运行时报错） ------------------ */
        //#region 1. 错误示例：module = cjs
        badCommonJS() {// 若 tsconfig.json 中 compilerOptions.module = "cjs"
          // IDE 不报错，但 Creator 运行时会提示 “require 未定义”
          // const myModule = require('some-module');   // ❌ 不要这样写
        } //#endregion

        /* ------------------ 2. 合法的 ES 模块写法 ------------------ */
        //#region 2. 正确示例：ES Module


        goodESM() {
          // Creator 默认 module = es2015，推荐写法
          then(m => console.log('动态 import 成功', m));
        } //#endregion

        /* ------------------ 3. IDE 可能误报，但运行正确的写法 ------------------ */
        //#region 3. IDE 误报示例：target = es5


        es6Feature() {
          // 如果 tsconfig.json 中 compilerOptions.target = "es5"
          // IDE 可能提示 “Set 不存在”，但 Creator 实际 target 为 es2015，运行正常
          const mySet = new Set();
          mySet.add('Creator');
          console.log('Set size =', mySet.size); // ✅ 正常输出
        } //#endregion

        /* ------------------ 4. 推荐的 tsconfig.json 模板 ------------------ */
        //#region 4. 推荐 tsconfig 片段


        showRecommended() {
          console.log(`推荐 tsconfig.json：
{
  "extends": "./tmp/tsconfig.cocos.json",
  "compilerOptions": {
    /* 自定义选项 */
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}`);
        } //#endregion

        /* ------------------ 5. 生命周期 ------------------ */
        //#region 5. 生命周期


        start() {
          this.goodESM();
          this.es6Feature();
          this.showRecommended();
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d024b1ddc54ea2cd08d6f7214c2410d4a37c37c6.js.map