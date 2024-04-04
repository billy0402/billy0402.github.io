---
title: 1614. Maximum Nesting Depth of the Parentheses
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-04'
---

## Overview

[Question Link](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/)

Calculate the depth of the parentheses.

---

## Solution 1: Stack

### Algorithm

1. Initialize a stack to store the parentheses.\
   Initialize `max_depth` to zero to store the max depth.

2. Iterate through string `s`:

   - If the character is `(`, append the character into the stack.
   - If the character is `)`, pop the character out of the stack.
   - Update the `max_depth` if the length of stack is longer.

3. Return the `max_depth`.

### Implement

```python
class Solution:
    def maxDepth(self, s: str) -> int:
        stack: list[str] = []
        max_depth = 0

        for char in s:
            if char == "(":
                stack.append(char)
            elif char == ")":
                stack.pop()
            max_depth = max(max_depth, len(stack))

        return max_depth
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate through the string `s` takes O(n) time.

**Space complexity: O(n)**

Using an additional stack requires O(n) space.

## Solution 2: Counter variable

### Algorithm

1. Initialize a counter variable to track the depth.\
   Initialize `max_depth` to zero to store the maximum depth.

2. Iterate through string `s`:

   - If the character is `(`, increase the `counter` by 1.
   - If the character is `)`, decrease the `counter` by 1.
   - Update the `max_depth` if the `counter` is greater than `max_depth`.

3. Return the `max_depth`.

### Implement

```python
class Solution:
    def maxDepth(self, s: str) -> int:
        counter = 0
        max_depth = 0

        for char in s:
            if char == '(':
                counter += 1
            elif char == ')':
                counter -= 1
            max_depth = max(max_depth, counter)

        return max_depth
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate through the string `s` takes O(n) time.

**Space complexity: O(1)**

We only use a constant amount of space for variables like the `counter` and `max_depth`.
