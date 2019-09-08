//观察被观察对象的每一个属性
function observed(obj) {
    if (!obj || typeof obj !== 'object') {
        console.log('被观察者不存在或不是对象');
        return;
    }
    let keys = Object.keys(obj);
    keys.forEach(key => {
        defineReactive(obj, key, obj[key]);
    });
    return obj;
}

//被观察者的行为
function defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        get () {
            dep.depend();
            console.log(`${key}被获取了`);
            return val;
        },
        set (newVal) {
            console.log(`${key}被设置了`);
            val = newVal;
            dep.notify();
        }
    });
}

//依赖收集
class Dep {
    constructor() {
        //订阅者集合
        this.subs = [];
    }
    //增加订阅者
    addSub (sub) {
        this.subs.push(sub);
    }
    //判断是否增加订阅者
    depend () {
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }
    //通知订阅者更新
    notify () {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}
Dep.target = null;
