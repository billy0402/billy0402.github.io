---
title: 404. Sum of Left Leaves
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-14'
---

## Overview

[Question Link](https://leetcode.com/problems/sum-of-left-leaves/description/)

We need to find the sum of the left leaves of a binary tree.

The left leaves cannot have any child nodes, including left child nodes and right child nodes.

We will separately use DFS and BFS to resolve this problem.

---

## Solution 1: Depth-first search (DFS)

### Algorithm

Make `sumOfLeftLeaves` a recursive function.

1. If the `root` node is None, return 0.

2. If the `left` node of the `root` node is not None\
    and the `left` node of the `left` node of the `root` node is None\
    and the `right` node of the `left` node of the `root` node is None:

   - Return the `value` of the `left` node of the `root` node\
      plus `sumOfLeftLeaves` with the `right` node of the `root` node.

   We only find the sum of the left nodes which don't have child nodes.

3. Return `sumOfLeftLeaves` with the `left` node of the `root` node plus `sumOfLeftLeaves` with the `right` node of the `root` node.\

   We'll recursively start from the root node to the deepest node.

### Implement

```python
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        if root.left and root.left.left is None and root.left.right is None:
            return root.left.val + self.sumOfLeftLeaves(root.right)

        return self.sumOfLeftLeaves(root.left) + \
            self.sumOfLeftLeaves(root.right)
```

### Complexity Analysis

**Time complexity: O(n)**

We traverse all nodes of the binary tree, which takes O(n) time.

**Space complexity: O(n)**

The recursive function uses memory to store the function state, which takes O(n) space.

## Solution 2: Breadth-first search (BFS)

### Algorithm

Without using a recursive function, we use queue instead.

1. Initialize `total` to 0 to store the sum of the left nodes' values.\
   Initialize `queue` to store the nodes at the same depth that we'll traverse.

2. If `queue` is not empty:

   - Pop the leftmost node of `queue` as `node`.

   - If the `left` node of the `node` is not None\
     and the `left` node of the `left` node of the `node` is None\
     and the `right` node of the `left` node of the `node` is None:

     - Increase `total` by the `value` of the `left` node of the `node`.

   - If the `left` node of the `node` is not None:

     - Append the `left` node of the `node` to `queue` for the next traversal.

   - If the `right` node of the `node` is not None:

     - Append the `right` node of the `node` to `queue` for the next traversal.

3. Return `total` as the sum of the left nodes which don't have child nodes.

### Implement

```python
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        total = 0
        queue = deque([root])

        while queue:
            node = queue.popleft()

            if node.left and node.left.left is None and node.left.right is None:
                total += node.left.val

            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

        return total
```

### Complexity Analysis

**Time complexity: O(n)**

We traverse all nodes of the binary tree, which takes O(n) time.

**Space complexity: O(1)**

The queue at most takes the maximum number of nodes at the same depth,

which are always fewer than the total number of nodes in the binary tree.
