---
title: 525. Contiguous Array
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-16'
---

## Overview

[Question Link](https://leetcode.com/problems/contiguous-array/description/)

We need to find out the maximum length of equal zeros and ones in the input binary array.

If the input is [0, 1, 0], the answer will be [0, 1] or [1, 0].

[Solution Link](https://www.youtube.com/watch?v=Xkl4EknqW8Y)

I referred to this YouTube video to learn how to resolve this problem.

---

## Solution: Hash Table

### Algorithm

![Hash Table](/leetcode/525/hash-table.jpg)

1. Initialize a hash table to record the count and first seen at index.

   Initialize max length and count for recording.

   The hash table should be initialized as {0: -1},\
   to ensure the second element in the array can be calculated to the correct max length.

   1. nums = [0, 1]

      | num | count |   max_length   |
      | :-: | :---: | :------------: |
      |  0  |  -1   |       0        |
      |  1  |   0   | 1 - `(-1)` = 2 |

   2. nums = [1, 0]

      | num | count |   max_length   |
      | :-: | :---: | :------------: |
      |  1  |   1   |       0        |
      |  0  |   0   | 1 - `(-1)` = 2 |

2. Iterate through the nums array.

   1. The `count` increase with the `num` when the `num` is 1.\
      or decrease with the `num` when the `num` is 0.

   2. If the `count` has been recorded in the `hash table`,\
      update the `max length` if `index` minus the `first seen at` is larger.

      Otherwise, record the `count` with the `index`.

3. Return the `max length` for the answer.

### Implement

```python
class Solution:
    def findMaxLength(self, nums: list[int]) -> int:
        # { count: first_seen_at }
        seen_at = {0: -1}
        max_length = count = 0

        for i, num in enumerate(nums):
            count += 1 if num == 1 else -1

            if count in seen_at:
                max_length = max(max_length, i - seen_at[count])
            else:
                seen_at[count] = i

        return max_length
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the nums array takes O(n).

Each loop takes O(1) with all the operations.

**Space complexity: O(1)**

We use an additional hash table to record the count and first seen at.

In the worst-case scenario,\
it takes O(n) with the length of the nums array plus 1 (initialized with {0: -1})\
when its all filled with 0 or 1.

[0, 0, 0] => {0: -1, -1: 0, -2: 1, -3: 2}\
[1, 1, 1] => {0: -1, 1: 0, 2: 1, 3: 2}
