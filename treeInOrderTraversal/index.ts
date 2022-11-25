class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function getRightMost(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let node: TreeNode | null = root.left;
  while (node!!.right && node!!.right !== root) {
    node = node!!.right;
  }

  return node;
}
function inorderTraversal(root: TreeNode | null): number[] {
  let node: TreeNode | null = root;
  const results: number[] = [];

  while (node) {
    if (!node.left) {
      results.push(node.val);
      node = node.right;
    } else {
      let rightMost = getRightMost(node);
      if (rightMost !== null && rightMost.right === node) {
        rightMost.right = null;
        results.push(node.val);
        node = node.right;
      } else {
        if (rightMost !== null) {
          rightMost.right = node;
          node = node.left;
        }
      }
    }
  }

  return results;
}
