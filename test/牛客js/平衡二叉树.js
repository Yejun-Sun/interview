function deep(root) {
    if (!root) return 0;
    return Math.max(deep(root.left), deep(root.right)) + 1;
}
function IsBalanced_Solution(pRoot) {
    if (!pRoot) return true;
    let deepLeft = deep(pRoot.left);
    let deepRight = deep(pRoot.right);
    if (Math.abs(deepLeft - deepRight) > 1) {
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
