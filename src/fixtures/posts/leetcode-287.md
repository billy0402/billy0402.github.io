---
title: 287. Find the Duplicate Number
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-24'
---

## Overview

[Question Link](https://leetcode.com/problems/find-the-duplicate-number/description/)

The question is easy to understand: find out the only repeated number in the array.

However, there are some limitations that make it not easy to solve this question.

We need to solve it with linear runtime complexity,

so brute force with nested loops is not a choice.

You must solve the problem without modifying the array,

so sorting the array is not an option.

You must uses only constant extra space,

so hash table cannot be used either.

---

## Solution 1: Floyd Cycle Detection

### Algorithm

1. We use slow-fast pointers to make the pointers enter the cycle.

![Complex Cycle](https://assets.leetcode.com/static_assets/media/original_images/287/complex_cycle.png)

2. We use slow-fast pointers to find out the cycle head.

![First Intersection](https://assets.leetcode.com/static_assets/media/original_images/287/first_intersection.png)

### Implement

```python
class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        slow = fast = 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        fast = 0
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]

        return slow
```

### Complexity Analysis

**Time complexity: O(n)**

The loop iterates a maximum of n times in the worst case.

**Space complexity: O(1)**

We only use constant extra space for the two pointers `slow` and `fast`.
