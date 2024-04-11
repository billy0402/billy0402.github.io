---
title: 402. Remove K Digits
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-11'
---

## Overview

[Question Link](https://leetcode.com/problems/remove-k-digits/description/)

Remove K digits from the input integer string to make it the smallest possible integer.

---

## Solution 1: Monostonic Stack + Greedy

### Thinking

### Algorithm

We use a stack to compare whether the last digit is greater than the current digit.

If it is, we remove it from the stack.

This way, we can maintain the smallest possible integer in current stack.

### Implement

1. Initialize an empty string `stack`.

2. Iterate through the `num` string:

   - While `k` is greater than 0, the `stack` is not empty and the last digit in stack is greater than `n`:
     - Pop the last digit from the `stack`.
     - Decrease `k` by 1.
   - If `stack` is not empty or `n` is not '0' (to prevent leading zeros):
     - Append `n` to the `stack`.

3. If `k` is greater than 0, we need to remove more numbers:

   - `stack` should be sliced to remove the last `k` digits.

4. Return the string joined by `stack` if `stack` is not empty, otherwise return '0'.

```python
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack: list[str] = []

        for n in num:
            while k > 0 and stack and stack[-1] > n:
                stack.pop()
                k -= 1

            if stack or n != '0':
                stack.append(n)

        if k > 0:
            stack = stack[:-k]

        return ''.join(stack) or '0'
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the `num` string takes O(n) time.

Within the loop, there is a while loop that may execute at most O(n) times overall,

as each character can be pushed and popped from the stack at most once.

The total time complexity is O(2n), which simplifies to O(n).

**Space complexity: O(n)**

We use an additional stack to store the smallest possible integer, which takes O(n) space.
