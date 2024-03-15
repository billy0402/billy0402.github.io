---
title: 238. Product of Array Except Self
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-15'
---

## Overview

[Question Link](https://leetcode.com/problems/product-of-array-except-self/description/)

Today's question needs to get each product in an input nums array except itself in a number array.

---

### Thinking

The directly approach would be to calculate each product in a for loop.

However, calculating each product also takes O(n), resulting in O(n^2) time complexity.

Additionally, the question prohibits the use of the divide operator.

That means you can't calculate the total product once and then use divide to get each product.

And you can also challenged to use O(1) space without saving any addition results array.

### Algorithm

![Prefix Sum](/leetcode/238/prefix-sum.jpg)

1. Create an output array filled with 1, with the same length as the input array.
   Initialize a prefix product to 1 and a suffix product to 1.
2. Iterate through the input array.
   1. Multiply output[i] by the prefix product
   2. Multiply the prefix product by nums[i]
3. Reverse iterate through the input array.
   1. Multiply output[i] by the suffix product
   2. Multiply the suffix product by nums[i]

### Implement

```python
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        results: list[int] = [1] * len(nums)
        prefix_product = 1
        suffix_product = 1

        for i in range(len(nums)):
            n = nums[i]
            results[i] *= prefix_product
            prefix_product *= n

        for i in range(len(nums) - 1, -1, -1):
            n = nums[i]
            results[i] *= suffix_product
            suffix_product *= n

        return results
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the nums array twice takes O(2n), which simplifies to O(n).

**Space complexity: O(1)**

Although creating the results array requires O(n) space, it is returned as the output.

Therefore, the additional space complexity is considered O(1).
