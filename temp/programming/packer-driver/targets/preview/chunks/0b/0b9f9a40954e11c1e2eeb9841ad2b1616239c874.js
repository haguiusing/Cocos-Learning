System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, animation, AnimationClip, Vec3, SetMaterialPropertyValueProxyFactory, _dec, _class, _crd, ccclass, property, Lesson01_Animation;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6c48ZlddVO3bI30uTAXBgi", "Lesson01_Animation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'animation', 'AnimationClip', 'Vec3', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson01_Animation", Lesson01_Animation = (_dec = ccclass('Lesson01_Animation'), _dec(_class = class Lesson01_Animation extends Component {
        //#region 创建动画剪辑
        start() {
          // 创建一个新的动画剪辑
          var animationClip = new AnimationClip();
          animationClip.duration = 1.0; // 设置动画剪辑的周期为1秒
          // 创建一个向量轨道

          var track = new animation.VectorTrack();
          track.componentsCount = 3; // 设置使用向量轨道的前三条通道

          track.path = new animation.TrackPath().toHierarchy('Foo').toProperty('position'); // 指定目标对象为 "Foo" 子节点的 "position" 属性
          // 获取向量轨道的通道

          var [x, y, z] = track.channels(); // 为 x 通道的曲线添加关键帧

          x.curve.assignSorted([[0.4, {
            value: 0.4
          }], [0.6, {
            value: 0.6
          }], [0.8, {
            value: 0.8
          }]]); // 使用解构语法为每一条通道曲线赋值

          var vec3KeyFrames = [[0.4, new Vec3(1.0, 2.0, 3.0)], [0.6, new Vec3(1.0, 2.0, 3.0)], [0.8, new Vec3(1.0, 2.0, 3.0)]];
          x.curve.assignSorted(vec3KeyFrames.map(_ref => {
            var [time, vec3] = _ref;
            return [time, {
              value: vec3.x
            }];
          }));
          y.curve.assignSorted(vec3KeyFrames.map(_ref2 => {
            var [time, vec3] = _ref2;
            return [time, {
              value: vec3.y
            }];
          }));
          z.curve.assignSorted(vec3KeyFrames.map(_ref3 => {
            var [time, vec3] = _ref3;
            return [time, {
              value: vec3.z
            }];
          })); // 将轨道添加到动画剪辑

          animationClip.addTrack(track);
          console.log('动画剪辑创建完成');
        } //#endregion
        //#region 设置轨道路径


        specifyTrackPath() {
          // 创建一个轨道路径
          var trackPath = new animation.TrackPath(); // 指定目标对象为当前节点的 "path/to/child" 子节点的 "MyComponent" 组件的 "myProperty" 属性的第二个数组元素

          trackPath.toHierarchy('path/to/child') // 目标对象为当前节点的 “path/to/child” 子节点
          .toComponent('MyComponent') // 目标对象为 “path/to/child” 子节点的 “MyComponent” 组件
          .toProperty('myProperty') // 目标对象为 “MyComponent” 组件上的 “myProperty” 属性
          .toElement(1); // 目标对象为 “myProperty” 属性中的第二个数组元素

          console.log('轨道路径设置完成');
        } //#endregion
        //#region 创建值代理


        createValueProxy() {
          // 创建一个轨道路径
          var trackPath = new animation.TrackPath(); // 指定目标对象为材质

          trackPath.toHierarchy('path/to/child').toComponent('MeshRenderer').toProperty('materials').toElement(1); // 应用值代理

          var valueProxyFactory = new SetMaterialPropertyValueProxyFactory('mainColor');
          var track = new animation.VectorTrack();
          track.path = trackPath;
          track.proxy = valueProxyFactory;
          console.log('值代理创建完成');
        } //#endregion
        //#region 设置循环模式


        setLoopMode() {
          // 创建一个新的动画剪辑
          var animationClip = new AnimationClip();
          animationClip.duration = 1.0; // 设置动画剪辑的周期为1秒
          // 设置循环模式为循环播放

          animationClip.wrapMode = AnimationClip.WrapMode.Loop;
          console.log('循环模式设置完成');
        } //#endregion


      }) || _class)); // 创建一个值代理工厂


      SetMaterialPropertyValueProxyFactory = class SetMaterialPropertyValueProxyFactory {
        constructor(propertyName) {
          this._propertyName = void 0;
          this._propertyName = propertyName;
        }

        forTarget(target) {
          var material = target;
          return {
            set: value => {
              material.setProperty(this._propertyName, value);
            }
          };
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b9f9a40954e11c1e2eeb9841ad2b1616239c874.js.map