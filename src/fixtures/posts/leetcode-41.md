---
title: 41. First Missing Positive
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-26'
---

## Overview

[Question Link](https://leetcode.com/problems/first-missing-positive/description/)

We need to find the smallest positive number missing from the array.

It's not difficult when using the hash table.

It's a hard question because it's not easy with the constraints of O(n) time and O(1) space.

By the way, it's my first time resolving a hard question!

---

## Solution 1: Hash Table

### Thinking

This solution does not satisfy the requirements.

Because we will use an additional hash table takes O(n) space.

### Algorithm

1. Convert the array to set to remove the repeated number.

2. Iterate through 1 to the set length plus 1.\
   It's the range that the array should have.\
   If the index in the nums set, it doesn't miss, so continue to the next loop.\
   If the index not in the nums set, return the index immediately, the number is missing.

3. Return the index plus 1, the previous numbers didn't miss.

### Implement

```python
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        set_nums = set(nums)

        for i in range(1, len(set_nums) + 1):
            if i in set_nums:
                continue
            else:
                return i

        return i + 1
```

### Complexity Analysis

**Time complexity: O(n)**

Converting from an array to a set takes O(n).

Iterating through the range also takes O(n) in the worst case where all the numbers are unique.

The total time complexity is O(2n), which can be simplifies to O(n).

**Space complexity: O(n)**

Using an additional set to remove the repeated numbers takes O(n) in the worst case where all the numbers are unique.

## Solution 2: Index as a Hash Key

### Thinking

We can't use an additional space to store the numbers.

However, we can mark the numbers of the index directly in the original array, similar to yesterday's approach.

Changing the original array will not take additional space.

### Algorithm

1. Iterate through the nums:\
   Change the negative number to zero.\
   We need to use negative number to check if the number is exists.\
   We can't keep the original negative numbers and updated negative numbers, as that will be confusing.

2. Iterate through the nums:\
   Convert the number to positive. It might be negative when the numbers is repeated.\
   Check if the number is not zero or out of the length range.\
   The `mark` number will be the number of the n minus 1 index.\
   If `mark` is greater then zero, convert the number of the n minus 1 index to negative.\
   If `mark` is zero , convert the number of the n minus 1 index out of the length.\
   We don't need to handle with those zeros that are original zeros or original negatives.\
   And we can't set the number to a negative number between 1 to the nums length plus 1.\
   This is because we will change the input array numbers after converting them back to positive numbers.

3. Iterate through range 1 to the nums length plus 1.\
   If the number of the n minus 1 is greater than 1, that means the number doesn't existed in the array.\
   Return the number.

4. Return the index plus 1. The previous numbers didn't miss.

### Implement

```python
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        length = len(nums)
        for i in range(length):
            if nums[i] < 0:
                nums[i] = 0

        for n in nums:
            n = abs(n)
            if n < 1 or n > length:
                continue

            mark = nums[n - 1]
            if mark > 0:
                nums[n - 1] *= -1
            elif mark == 0:
                nums[n - 1] = -(length + 1)

        for i in range(1, length + 1):
            if nums[i - 1] >= 0:
                return i

        return length + 1
```

### Complexity Analysis

**Time complexity: O(n)**

We have used three loops, which takes O(3n) time complexity.

However, it can be simplified to O(n).

**Space complexity: O(1)**

We didn't use any additional data structures.
