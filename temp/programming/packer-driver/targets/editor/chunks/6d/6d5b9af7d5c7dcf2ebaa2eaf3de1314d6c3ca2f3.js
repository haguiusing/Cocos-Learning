System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, assert, AudioMgr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AudioController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      assert = _cc.assert;
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd9c444gd1JOrt/jMOpM1Ry", "AudioController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'assert', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioController", AudioController = (_dec = ccclass("AudioController"), _dec2 = property(AudioSource), _dec(_class = (_class2 = class AudioController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);
        }

        onLoad() {
          // 获取 AudioSource 组件
          const audioSource = this.node.getComponent(AudioSource); // 检查是否含有 AudioSource，如果没有，则输出错误消息

          assert(audioSource != null); // 将组件赋到全局变量 _audioSource 中

          this._audioSource = audioSource;
        }

        play() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.play(this._audioSource.clip); // 播放音乐
          // 播放音乐
          //this._audioSource.play();
        }

        pause() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.pause(); // 暂停音乐
          // 暂停音乐
          //this._audioSource.pause();
        }

        playOneShot(clip) {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot(clip); // 播放音效
          //this._audioSource.playOneShot(clip, 1);
        }

        stop() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.stop(); // 停止音乐
          // 停止音乐
          //this._audioSource.stop();
        }

        setVolume(volume) {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.setVolume(volume); // 设置音量
        }

        resume() {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.resume(); // 恢复音乐播放
          // 恢复音乐播放
          //this._audioSource.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
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
//# sourceMappingURL=6d5b9af7d5c7dcf2ebaa2eaf3de1314d6c3ca2f3.js.map