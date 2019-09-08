class Watcher {
    //vm是一个vue实例对象，exp是node节点的v-model或v-on等指令的属性值，cb是Watcher绑定的更新函数
    constructor (vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get();   //将自己添加到订阅器
    };
    get() {
        Dep.target = this;    //缓存自己
        let value = this.vm.data[this.exp];    //强制执行监听器里的get函数
        Dep.target = null;    //释放自己
        return value;
    };
    update () {
        let value = this.vm.data[this.exp];
        let oldValue = this.value;
        if (oldValue !== value) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }
}
Watcher();
