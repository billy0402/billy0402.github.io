---
title: 2958. Length of Longest Subarray With at Most K Frequency
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-28'
---

## Overview

[Question Link](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/)

Find the longest subarray where each number can occur with a frequency of at most k.

---

## Solution 1: Sliding Window

### Thinking

This solution is really similar to what we did yesterday.

### Algorithm

1. Initialize `left` to zero, it will point on the head of the `nums` array.\
   Initialize a `counter` dictionary to count down the number and its frequency.\
   Initialize `max_length` to store the longest subarray length.

2. Iterate from 0 to the length of the `nums` array as `right`.

   - Set `nums[right]` as `n`.
   - Increase `counter[n]` by 1.
   - If `counter[n]` is greater than `k`, indicating it does not satisfy the limitation:
     - Decrease `counter[nums[left]]` by 1.
     - Increase `left` by 1 to point to the next number.
   - Update `max_length` when the `right - left + 1` is greater than the original `max_length`.

3. Return the `max_length` as the answer.

### Implement

```python
class Solution:
    def maxSubarrayLength(self, nums: list[int], k: int) -> int:
        left = 0
        counter: dict[int, int] = {}
        max_length = 0

        for right in range(len(nums)):
            n = nums[right]
            counter[n] = counter.get(n, 0) + 1

            while counter[n] > k:
                counter[nums[left]] -= 1
                left += 1

            max_length = max(max_length, right - left + 1)

        return max_length
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating from 0 to the length of the `nums` array takes O(n).

And we perform a while loop, moving the left pointer to the right.

Each number will be operated on at most twice.

The total time complexity might be O(2n), simplifies to O(n).

**Space complexity: O(n)**

We use an additional dictionary to count down the number and its frequency, taking O(n) space.
