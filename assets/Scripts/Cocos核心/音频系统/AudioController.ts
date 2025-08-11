import { _decorator, Component, Node, AudioSource, assert, AudioClip } from 'cc';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

@ccclass("AudioController")
export class AudioController extends Component { 

    @property(AudioSource)
    public _audioSource: AudioSource = null!;

    onLoad () {
        // 获取 AudioSource 组件
        const audioSource = this.node.getComponent(AudioSource)!;
        // 检查是否含有 AudioSource，如果没有，则输出错误消息
        assert(audioSource !=null);
        // 将组件赋到全局变量 _audioSource 中
        this._audioSource = audioSource;
    }

    play () {
        AudioMgr.inst.play(this._audioSource.clip); // 播放音乐

        // 播放音乐
        //this._audioSource.play();
    }

    pause () {
        AudioMgr.inst.pause(); // 暂停音乐

        // 暂停音乐
        //this._audioSource.pause();
    }

    playOneShot (clip: AudioClip) {
        AudioMgr.inst.playOneShot(clip); // 播放音效
        //this._audioSource.playOneShot(clip, 1);
    }

    stop () {
        AudioMgr.inst.stop(); // 停止音乐

        // 停止音乐
        //this._audioSource.stop();
    }

    setVolume (volume: number) {
        AudioMgr.inst.setVolume(volume); // 设置音量
    }

    resume () {
        AudioMgr.inst.resume(); // 恢复音乐播放

        // 恢复音乐播放
        //this._audioSource.play();
    }   
}