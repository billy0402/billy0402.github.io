---
title: 1669. Merge In Between Linked Lists
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-20'
---

## Overview

[Question Link](https://leetcode.com/problems/merge-in-between-linked-lists/description/)

---

## Solution 1: Two Pointer

### Thinking

![Two Pointer](https://leetcode.com/problems/merge-in-between-linked-lists/Figures/1669/image1.png)

Use two pointers:

One points to the previous of the start-removing node.

Another points to the next of the end-removing node.

### Algorithm

1. Initialize the `start` and `end` pointers to `list1`.

2. Iterate from `0` to `b` and traverse the `list1` up to the `a - 1` node.
   Set start to the `a - 1` node, and set end to the next node, the `a` node.

3. Set `start.next` to `list2` to connect `list2` into `list1`.

4. Traverse through the `list2`.

5. Set the end of `list2` to `end.next`, thus completing the connection.

6. Set `end.next` to None to release the memory used by the removed nodes.

7. Return `list1` as the answer.

### Implement

```python
class ListNode:
    val: int
    next: Optional[Self]

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeInBetween(
        self,
        list1: ListNode,
        a: int,
        b: int,
        list2: ListNode,
    ) -> ListNode:
        start = end = list1

        for index in range(b):
            if index == a - 1:
                start = end
            end = end.next

        start.next = list2

        while list2.next is not None:
            list2 = list2.next

        list2.next = end.next
        end.next = None

        return list1
```

### Complexity Analysis

**Time complexity: O(n + m)**

Iterate through list1 but skipping the remove nodes takes O(b),

In the worst case, it might iterate through all the list1 nodes, which takes O(n).

Iterating through list2 (length m) takes O(m).

Therefore, the time complexity of the iterative implementation is O(n + m).

**Space complexity: O(1)**

We use a few variables and pointers, including index, start, and end, which use constant extra space.

We don't use any data structures that grow with input size.

Therefore, the space complexity of the iterative implementation is O(1).
