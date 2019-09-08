function observe(target) {
    let dep = new Dep();
    let proxy = new Proxy(target, {
        get: function (target, property) {
            console.log('get');
            dep.addSub()
            return target[property];
        },
        set: function (target, property, newValue) {
            console.log('set');
            target[property] = newValue;
        }
    });
    return proxy;
}
class Dep {
    constructor () {
        this.subs = [];
    }
    addSub (sub) {
        this.subs.push(sub);
    };
    notify () {
        this.subs.forEach(item => {
            item.update();
        })
    }
}
