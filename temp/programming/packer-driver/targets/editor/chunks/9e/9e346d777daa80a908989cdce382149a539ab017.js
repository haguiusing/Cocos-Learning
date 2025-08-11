System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, WebView, _dec, _class, _crd, ccclass, property, Lesson51_WebView;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      WebView = _cc.WebView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6948e7PQtdCXqfKQThfii4b", "Lesson51_WebView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandler', 'Node', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lesson51_WebView", Lesson51_WebView = (_dec = ccclass('Lesson51_WebView'), _dec(_class = class Lesson51_WebView extends Component {
        //#region 初始化WebView
        start() {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 设置WebView加载的网址
            webView.url = 'https://www.example.com';
            console.log('WebView加载的网址已设置为:', webView.url);
          }
        } //#endregion
        //#region 监听WebView事件


        onLoad() {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 监听WebView加载过程中的事件
            const eventHandler = new EventHandler();
            eventHandler.target = this.node; // 这个对象是你的事件处理代码组件所属的节点

            eventHandler.component = "Lesson51_WebView";
            eventHandler.handler = "onWebViewEvent";
            eventHandler.customEventData = "webViewEvent";
            webView.webviewEvents = [eventHandler];
          }
        }

        onWebViewEvent(eventType, customEventData) {
          switch (eventType) {
            case WebView.EventType.LOADING:
              console.log('WebView正在加载...');
              break;

            case WebView.EventType.LOADED:
              console.log('WebView加载完成');
              break;

            case WebView.EventType.ERROR:
              console.error('WebView加载出错');
              break;

            default:
              console.log('未知的WebView事件类型:', eventType);
          }

          console.log('自定义事件数据:', customEventData);
        } //#endregion
        //#region 设置JavaScript接口方案


        setJavascriptInterfaceScheme() {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 设置JavaScript接口方案
            webView.setJavascriptInterfaceScheme('myScheme');
            console.log('WebView的JavaScript接口方案已设置为:', 'myScheme');
          }
        } //#endregion
        //#region 设置JavaScript回调


        setOnJSCallback() {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 设置JavaScript回调函数
            webView.setOnJSCallback(() => {
              console.log('WebView接收到JavaScript消息:');
            });
          }
        } //#endregion
        //#region 执行WebView内部脚本


        evaluateJS() {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 执行WebView内部页面脚本
            webView.evaluateJS('alert("Hello from WebView!");');
            console.log('WebView内部脚本已执行');
          }
        } //#endregion
        //#region 获取WebView状态


        update(dt) {
          // 获取节点上的WebView组件
          const webView = this.node.getComponent(WebView);

          if (webView) {
            // 获取WebView当前状态
            const state = webView.state;
            console.log('WebView当前状态:', state);
          }
        } //#endregion


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e346d777daa80a908989cdce382149a539ab017.js.map