// Lesson08_.ts
import { _decorator, Component, Node } from 'cc';
const { ccclass, property, executionOrder } = _decorator;

/* ===================== 1. 定义演示组件 ===================== */

//#region 1A. 通用演示组件 CompA
@ccclass('CompA')
export class CompA extends Component {
    onLoad ()  { console.log('CompA onLoad!');  }
    start  ()  { console.log('CompA start!');   }
    update (dt) { console.log('CompA update!');  }
}
//#endregion

//#region 1B. 通用演示组件 CompB
@ccclass('CompB')
export class CompB extends Component {
    onLoad ()  { console.log('CompB onLoad!');  }
    start  ()  { console.log('CompB start!');   }
    update (dt) { console.log('CompB update!');  }
}
//#endregion

//#region 1C. 高优先级组件 Configuration
@ccclass('Configuration')
@executionOrder(-1)   // 越小越先执行
export class Configuration extends Component {
    onLoad () { console.log('Configuration onLoad!'); }
    static init () { console.log('Configuration init()'); }
    static updateConfig (dt) { console.log('Configuration updateConfig'); }
}
//#endregion

//#region 1D. 低优先级组件 Menu
@ccclass('Menu')
@executionOrder(1)    // 越大越后执行
export class Menu extends Component {
    onLoad () { console.log('Menu onLoad!'); }
    static init () { console.log('Menu init()'); }
    static updateMenu (dt) { console.log('Menu updateMenu'); }
}
//#endregion

//#region 1E. 中间优先级组件 GameData
@ccclass('GameData')
export class GameData extends Component {
    static init () { console.log('GameData init()'); }
    static updateData (dt) { console.log('GameData updateData'); }
}
//#endregion

/* ===================== 2. 总控脚本 Lesson08_ ===================== */

//#region 2A. 主控制脚本
@ccclass('Lesson08_')
export class Lesson08_ extends Component {

    /* -------------- 2A-1 生命周期 -------------- */
    onLoad () {
        console.warn('=== Lesson08_ onLoad ===');
        // 统一初始化
        Configuration.init();
        GameData.init();
        Menu.init();
    }

    update (deltaTime: number) {
        // 统一更新顺序
        Configuration.updateConfig(deltaTime);
        GameData.updateData(deltaTime);
        Menu.updateMenu(deltaTime);
    }

    /* -------------- 2A-2 动态增删组件演示 -------------- */
    //#region 2A-2 动态增删组件
    private demoAddRemove() {
        // 正确：通过节点添加组件
        const myComp = this.node.addComponent(CompA);
        myComp.printNodeName?.();

        // 移除（销毁）组件
        this.node.removeComponent(myComp);
    }
    //#endregion

    /* -------------- 2A-3 入口演示 -------------- */
    protected start() {
        this.demoAddRemove();
    }
}
//#endregion

/* ===================== 3. 工具方法（可选） ===================== */
//#region 3. 工具方法
// 提供 printNodeName 方法，用于动态测试
declare module './Lesson08_' {
    interface CompA {
        printNodeName(): void;
    }
}
CompA.prototype.printNodeName = function () {
    console.log('My node name is:', this.node.name);
};
//#endregion