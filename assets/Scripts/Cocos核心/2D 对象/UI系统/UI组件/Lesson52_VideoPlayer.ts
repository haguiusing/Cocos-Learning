import { _decorator, Component, Node, VideoPlayer, EventHandler } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lesson52_VideoPlayer')
export class Lesson52_VideoPlayer extends Component {
    //#region 初始化VideoPlayer
    start() {
        // 获取节点上的VideoPlayer组件
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            // 设置视频来源为远程URL
            videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
            videoPlayer.remoteURL = 'https://www.example.com/video.mp4';

            // 设置视频播放属性
            videoPlayer.playOnAwake = true; // 自动播放
            videoPlayer.volume = 0.5; // 设置音量
            videoPlayer.mute = false; // 不静音
            videoPlayer.loop = true; // 循环播放
            videoPlayer.keepAspectRatio = true; // 保持宽高比
            videoPlayer.fullScreenOnAwake = false; // 不全屏播放
            videoPlayer.stayOnBottom = true; // 在Web平台上始终在底层

            console.log('VideoPlayer初始化完成');
        }
    }
    //#endregion

    //#region 监听VideoPlayer事件
    onLoad() {
        // 获取节点上的VideoPlayer组件
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            // 监听VideoPlayer事件
            const eventHandler = new EventHandler();
            eventHandler.target = this.node; // 事件处理代码组件所属的节点
            eventHandler.component = "Lesson52_VideoPlayer";
            eventHandler.handler = "onVideoPlayerEvent";
            eventHandler.customEventData = "videoPlayerEvent";

            videoPlayer.videoPlayerEvent = [eventHandler];
        }
    }

    onVideoPlayerEvent(eventType: string, customEventData: string) {
        switch (eventType) {
            case VideoPlayer.EventType.PLAYING:
                console.log('视频正在播放');
                break;
            case VideoPlayer.EventType.PAUSED:
                console.log('视频暂停播放');
                break;
            case VideoPlayer.EventType.STOPPED:
                console.log('视频停止播放');
                break;
            case VideoPlayer.EventType.COMPLETED:
                console.log('视频播放完成');
                break;
            case VideoPlayer.EventType.META_LOADED:
                console.log('视频元信息加载完成');
                break;
            case VideoPlayer.EventType.READY_TO_PLAY:
                console.log('视频准备播放');
                break;
            case VideoPlayer.EventType.ERROR:
                console.error('视频播放出错');
                break;
            case VideoPlayer.EventType.CLICKED:
                console.log('视频被点击');
                break;
            default:
                console.log('未知的VideoPlayer事件类型:', eventType);
        }
    }
    //#endregion

    //#region 控制VideoPlayer播放
    playVideo() {
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            videoPlayer.play();
            console.log('视频开始播放');
        }
    }

    pauseVideo() {
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            videoPlayer.pause();
            console.log('视频暂停播放');
        }
    }

    stopVideo() {
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            videoPlayer.stop();
            console.log('视频停止播放');
        }
    }

    resumeVideo() {
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            videoPlayer.resume();
            console.log('视频继续播放');
        }
    }
    //#endregion

    //#region 获取VideoPlayer状态
    update(dt: number) {
        const videoPlayer = this.node.getComponent(VideoPlayer);
        if (videoPlayer) {
            console.log('当前视频播放时间:', videoPlayer.currentTime);
            console.log('视频总时长:', videoPlayer.duration);
            console.log('视频是否正在播放:', videoPlayer.isPlaying);
        }
    }
    //#endregion
}