let res, path;
function FindPath(root, expectNumber) {
    res = [];
    path = [];
    if (!root) return [];
    help(root, expectNumber);
    return res;
}
function help(root, expectNumber) {
    path.push(root.val);
    if (root.val === expectNumber && root.left === null && root.right === null) {
        res.push(path.slice());
    } else {
        if (root.left) {
            help(root.left, expectNumber-root.val);
        }
        if (root.right) {
            help(root.right, expectNumber-root.val);
        }
    }
    path.pop();
}
