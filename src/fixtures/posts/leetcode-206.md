---
title: 206. Reverse Linked List
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-21'
---

## Overview

[Question Link](https://leetcode.com/problems/reverse-linked-list/description/)

Just to the topic, we need to revere the input linked list.

---

## Solution 1: iteration

### Algorithm

![Three pointers](https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif)

1. initialize `current` to `head` and `previous` to `None`

2. Iterate through the linked list:
   1. Set `next` to `current.next`.\
      We need to save `current.next` for removing pointers.
   2. Set `current.next` to `previous` to reverse the link.
   3. Set `previous` to `current` to move pointer for the next loop.
   4. Set `current` to `next` to move pointer for the next loop.

### Implement

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        previous = None

        while current:
            next = current.next
            current.next = previous
            previous, current = current, next

        return previous
```

![Three pointers less variables](/leetcode/206/three-pointers-less-variables.jpg)

Actually, we don't need `current` and `next` can also achieve the pointers moving.

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        previous = None

        while head:
            head.next, previous, head = previous, head, head.next

        return previous
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the linked list takes O(n).

**Space complexity: O(1)**

Addition variables are constraint that won't grow up with the input, taking O(1).

## Solution 2: recursive

### Algorithm

1. If `head` is None, it shows that recursive has ended, returning `previous`.

2. Set `next` to `head.next`.\
   We need to save `head.next` to pass it as recursive head.

3. Set `head.next` to `previous` to reverse the link.

4. Recursively call `next` as `head` and `head` as `previous`.

### Implement

```python
class Solution:
    def reverseList(
        self,
        head: Optional[ListNode],
        previous=None,
    ) -> Optional[ListNode]:
        if not head:
            return previous

        next = head.next
        head.next = previous

        return self.reverseList(next, head)
```

### Complexity Analysis

**Time complexity: O(n)**

The recursive function will traverse each node, taking O(n) time.

**Space complexity: O(n)**

The recursive stack needs to store each node and recursively call the next node.

Since we don't employ any optimization techniques, the space complexity is O(n).
