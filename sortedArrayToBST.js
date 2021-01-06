function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

const sortedArrayToBST = function (nums) {
    if (nums.length) {
        let m = parseInt(nums.length / 2)
        let root = new TreeNode(nums[m])
        root.left = sortedArrayToBST(nums.slice(0, m))
        root.right = sortedArrayToBST(nums.slice(m + 1))
        return root
    }
}

module.exports = sortedArrayToBST;