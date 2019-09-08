class Promise {
    constructor (fn) {
        this.state = 'pending';
        this.value = undefined;
        this.resolvedCallbacks = [];
        this.rejectCallbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.rejectCallbacks.map(item => {
                    item(value)
                })
            }
        };
        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = value;
                this.rejectCallbacks.map(item => {
                    item(value)
                })
            }
        };
        try {
            fn (resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then (onFulfilled, onRejected) {
        switch (this.state) {
            case 'pending':
                this.resolvedCallbacks.push(onFulfilled);
                this.rejectCallbacks.push(onRejected);
                break
            case 'fulfilled':
                onFulfilled(this.value);
                break
            case 'rejected':
                onRejected(this.value);

        }
    }
}
