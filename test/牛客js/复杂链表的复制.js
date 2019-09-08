function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
    if (!pHead) return null;
    let cloneHead = new RandomListNode(pHead.label);
    cloneHead.label = pHead.label;
    cloneHead.random = pHead.random;
    cloneHead.next = Clone(pHead.next);
    return cloneHead;
}
