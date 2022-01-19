function TreeNode(val) {
  this.left = null;
  this.right = null;
  this.val = val;
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length && arr[i] !== null) {
    let temp = new TreeNode(arr[i]);
    root = temp;
    root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
    root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
  }
  return root;
}

function dfs(node, array = []) {
  console.log(node, array);
  if (node === null) return array;
  if (node.left) {
    array.push(node.val);
    dfs(node.left, array);
  } else {
    array.push(node.val);
    dfs(node.right, array);
  }
}

let arr = [3, 9, 20, null, null, 15, 7];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));

arr = [1, null, 2];
root = insertLevelOrder(arr, null, 0);
console.log(dfs(root));
