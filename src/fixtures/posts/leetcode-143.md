---
title: 143. Reorder List
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-23'
---

## Overview

[Question Link](https://leetcode.com/problems/reorder-list/submissions/1211336582/)

We need to reorder the listed list by inserting the reversed right half between the left half.

From: 1 -> 2 -> 3 -> ... -> n - 2 -> n - 1 -> n

To: 1 -> n -> 2 -> n - 1 -> 3 -> n -2 ...

---

## Solution 1: Stack

### Thinking

We can use a stack to save all the nodes,

and insert the popped-out nodes in between each node until reaching the middle of the stack.

### Algorithm

1. Initialize an empty stack.

2. Iterate through the linked list and append each node into the stack.

3. Iterate through the range of the middle.

   1. Save the next node for relinking.
   2. Create a new node with the popped node from the stack.
   3. Link the new node to the saved next node.
   4. Relink the current node to the new node.
   5. Update the current node to the saved next node for next iteration.

4. Set the current node to None to remove the origin right-hand side of the linked list.

### Implement

```python
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        stack: list[int] = []

        current = head
        while current is not None:
            stack.append(current)
            current = current.next

        current = head
        middle = len(stack) // 2
        for _ in range(middle):
            next = current.next
            new_node = stack.pop()
            new_node.next = next
            current.next = new_node
            current = next

        current.next = None
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the linked list to save the nodes to stack takes O(n).

Iterating through the the range of middle takes O(n/2).

The total complexity can be simplifies to O(n).

**Space complexity: O(n)**

We use an additional stack to save all the nodes of linked list, which takes O(n) space.
