---
title: 442. Find All Duplicates in an Array
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-25'
---

## Overview

[Question Link](https://leetcode.com/problems/find-all-duplicates-in-an-array/description/)

The question is easy to understand: we need to find all the repeated numbers in the input array.

However, the limitation is that we should use O(n) time and O(1) space.

---

## Solution 1: Hash Table

### Thinking

To check for repeats, using hash table is always the first thing that comes to mind.

However, it won't match the limitation of the question because we would need an additional hash table to save the counter.

### Algorithm

1. Initialize a hash table.\
   Iterate through the `nums` array and count the occurrence of each number.

2. Initialize a list to save the results.\
   Iterate through the hash table.\
   If the number's occurrence is more than one, append it to the results.

3. Return the results.

### Implement

```python
class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        hash_table: dict[int, int] = {}
        for n in nums:
            hash_table[n] = hash_table.get(n, 0) + 1

        results: list[int] = []
        for key, value in hash_table.items():
            if value == 1:
                continue
            results.append(key)

        return results
```

We can also use a list as the counter.

```python
class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        check = [0] * len(nums)
        results: list[int] = []
        for n in nums:
            check[n - 1] += 1
            if check[n - 1] > 1:
                results.append(n)
        return results
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the `nums` array takes O(n).

Iterating through the hash table takes O(n) because only one number will be repeated.

The total time complexity will be O(2n), which simplifies to O(n).

**Space complexity: O(n)**

We use an additional hash table to save the counter, which takes O(n) space.

## Solution 2: Sign/Magnitude Notation

### Thinking

I think this solution is quite tricky,

and it depends on the constraints of the question, so this solution can work.

We will use the number as an index to mark the number of the index minus one out in the input array as negative.

So, if the number is negative, that means the number is repeated.

We should append the number into the result array.

We can use the number as index because the input array are in the range [1, n].

The index minus one out of the list range will not happen.

Moreover, the repeated number will be repeated at most twice,

so the positive sign and negative sign are enough to use.

(Positive -> not existed in array, Negative -> in array once)

And the most bad thing is that we will change the original input array.

We should copy the array in a real situation.

### Algorithm

1. Initialize an array to save the repeated numbers.

2. Iterate through the `nums` array.\
   Reset the value of `n` to positive.\
   If the number of the `n` minus one index is negative, it means it has occurred before.\
   Append the number into the results.\
   Update the number of the `n` minus one index to negative.

3. Return the results array.

### Implement

```python
class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        results: list[int] = []
        for n in nums:
            n = abs(n)
            if nums[n - 1] < 0:
                results.append(n)
            nums[n - 1] *= -1
        return results
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the `nums` array takes O(n).

**Space complexity: O(1)**

Although We use an additional array to save the results, it will be O(n/2) in the worst case with the length of the array is very small.

However, since we use it as the output value, the space complexity can be calculated as O(1).
