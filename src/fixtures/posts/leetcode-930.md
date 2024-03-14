---
title: 930. Binary Subarrays With Sum
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-14'
---

## Overview

[Question Link](https://leetcode.com/problems/binary-subarrays-with-sum/description/)

We need to determine how many sums of the subarrays can satisfy the goal.

This article will include the `brute force` approach using nested for loops

and using the `prefix sum` technique to resolve this question.

And the best solution should use the `slide window` technique.

However, after referring to the answer, I still haven't fully understood it.

---

## Solution 1: Brute Force

### Algorithm

Iterate through the nums array and countdown if the current sum is equal to the goal.

This solution will get **Time Limit Exceeded**.

### Implement

```python
class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        current_sum = 0
        counter = 0

        for i in range(len(nums)):
            current_sum = nums[i]
            if current_sum == goal:
                counter += 1

            for j in range(i + 1, len(nums)):
                current_sum += nums[j]
                if current_sum == goal:
                    counter += 1

        return counter
```

### Complexity Analysis

**Time complexity: O(n^2)**

Nested iteration through the nums array takes O(n^2).

**Space complexity: O(1)**

## Solution 2: Prefix Sum

### Algorithm

Iterate through the nums array.

1. If the current sum equals to the goal, the counter should be increase by 1.
2. If the current sum minus the goal equals the goal and has been recorded in the hash table,\
   the counter should be increased by the number of occurrence of the prefix sum.\
   This increase in the counter is due to\
   how many prefix sums can satisfy the goal, starting from the current iterate number.
3. Record the prefix sum and the number of occurrences.

![Last loop](/leetcode/930/prefix-sum.jpg)

This shows the situation in the last loop.

### Implement

```python
class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        counter = 0
        current_sum = 0
        # {prefix_sum: number of occurrence}
        freq = {}  # To store the frequency of prefix sums

        for num in nums:
            current_sum += num
            if current_sum == goal:
                counter += 1

            # Check if there is any prefix sum that can be subtracted
            # from the current sum to get the desired goal
            if current_sum - goal in freq:
                counter += freq[current_sum - goal]

            freq[current_sum] = freq.get(current_sum, 0) + 1

        return counter
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate through the nums array takes O(n).

**Space complexity: O(n)**

Use an additional hash table to save the prefix sum and the number of occurrences.

In the worst-case scenario, the nums array consists entirely of 1s ([1, 1, 1, ... , 1]).

The hash table will take O(n) space, the same as the nums array.
