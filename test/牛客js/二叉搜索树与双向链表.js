function Convert(pRootOfTree) {
    if (!pRootOfTree) return null;
    if (pRootOfTree.left === null && pRootOfTree.right === null) return pRootOfTree;
    let left = Convert(pRootOfTree.left);
    let p = left;
    if (p && p.right) {
        p = p.right;
    }
    if (left) {
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    let right = Convert(pRootOfTree.right);
    if (right) {
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    return left !== null ? null : pRootOfTree;
}
