---
title: 713. Subarray Product Less Than K
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-27'
---

## Overview

[Question Link](https://leetcode.com/problems/subarray-product-less-than-k/description/)

Count down the number of kinds of subarrays with a product less than k.

---

## Solution 1: Brute Force

### Thinking

Using a nested loop to check all kinds of subarrays.

It will result in a Time Limit Exceeded error.

### Algorithm

1. Initialize the `counter` to zero.

2. Iterate from 0 to the length of the `nums` array.

   - Reset the `product` to `nums[i]`.
   - Iterate from `i` to the length of the `nums` array.
     - Product with `nums[j]`, without including the case where `i == j` because it would result in redundant products.
     - If the `product` is greater or equal to `k`, indicating it doesn't satisfy the target, break the loop.
     - Otherwise, increase the`counter` by 1.

3. Return the `counter` as the answer.

### Implement

```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: list[int], k: int) -> int:
        counter = 0

        for i in range(len(nums)):
            product = nums[i]
            for j in range(i, len(nums)):
                if i != j:
                    product *= nums[j]
                if product >= k:
                    break
                counter += 1

        return counter
```

### Complexity Analysis

**Time complexity: O(n^2)**

The nested loop takes O(n^2).

**Space complexity: O(1)**

## Solution 2: Slide Window

### Thinking

The numbers in the array are all positive.

The product will only increase and won't throw ZeroDivisionError when dividing the number.

### Algorithm

1. Initialize `left` to zero to point on the head of the array.\
   Initialize `counter` to zero.\
   Initialize `product` to one. We can't set it to zero because a zero product with any number still stays at zero.

2. Iterate from 0 to the length of the `nums` array.

   - Product with the number of the `right` index in the `nums` array.

   - While `left` is smaller than `right` and `product` is greater than `k`,
     - we should divide with the number of the `left` index in the `nums` array
     - and move the `left` pointer.
   - Counter increase with `right - left + 1` that include all the subarray counts inside this slide window.

3. Return the `counter` as the answer.

### Implement

```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: list[int], k: int) -> int:
        left = 0
        counter = 0
        product = 1

        for right in range(len(nums)):
            product *= nums[right]
            while left <= right and product >= k:
                product //= nums[left]
                left += 1
            counter += (right - left + 1)

        return counter
```

### Complexity Analysis

**Time complexity: O(n)**

The algorithm iterates through the input array `nums` using a single for loop.\
Inside the loop, there are nested operations for shrinking the window,\
but since left is incremented a total number of n times during the whole array traversal,\
each element in the array is visited at most twice.

The nested loop terminates when the product becomes less than k,\
and this can only happen at most n times total (once for each element).\
Therefore, the overall time complexity is 2n, which we describe as O(n).

**Space complexity: O(1)**
