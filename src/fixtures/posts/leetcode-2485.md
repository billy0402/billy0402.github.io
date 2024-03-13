---
title: 2485. Find the Pivot Integer
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-13'
---

## Overview

[Question Link](https://leetcode.com/problems/find-the-pivot-integer/description/)

We need to find the pivot integer within the range from 1 to n.

The pivot integer is the sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

1 + 2 + 3 + ... + x = x + (x + 1) + (x + 2) + ... + n

---

## Solution 1: Brute Force

### Algorithm

Iterate from n to 1 and calculate the prefix sum and suffix sum.

### Implement

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        prefix_sum = (1 + n) * n // 2
        suffix_sum = n

        for i in range(n, 0, -1):
            if prefix_sum == suffix_sum:
                return i

            prefix_sum -= i
            suffix_sum += i - 1

        return -1
```

### Complexity Analysis

**Time complexity: O(n)**

**Space complexity: O(1)**

## Solution 2: Math

### Thinking

Math proving process:

$$
\begin{align*}
\frac{x(x+1)}{2} &= \frac{(x+n)(n-x+1)}{2} \\
\frac{x^2+x}{2} &= \frac{nx-x^2+x+n^2-nx+n}{2} \\
x^2+x &= -x^2+x+n^2+n \\
2x^2 &= n^2+n \\
x &= \sqrt{\frac{n^2+n}{2}} \\
\\
sum(n) &= \frac{(1+n)*n}{2} \\
&= \frac{n^2+n}{2} \\
\\
x &= \sqrt{\frac{n^2+n}{2}} \\
&= \sqrt{sum(n)}
\end{align*}
$$

### Implement

```python
import math


class Solution:
    def pivotInteger(self, n: int) -> int:
        total = (1 + n) * n // 2
        pivot = int(math.sqrt(total))
        return pivot if pivot * pivot == total else -1
```

### Complexity Analysis

**Time complexity: O(1)**

**Space complexity: O(1)**

### Solution 3: Two Pointer

### Algorithm

Move two pointers and calculate the left sum and right sum.

### Implement

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        if n == 1:
            return 1

        left = 1
        right = n
        left_sum = left
        right_sum = right

        while left < right:
            if left_sum == right_sum and left + 1 == right - 1:
                return left + 1
            elif left_sum < right_sum:
                left += 1
                left_sum += left
            else:
                right -= 1
                right_sum += right

        return -1
```

### Complexity Analysis

**Time complexity: O(n)**

The time complexity is `O(n)` due to the loop

that iterates through potential pivot values to calculate sums on both sides.

**Space complexity: O(1)**

### Solution 4: Binary Search

### Algorithm

Use binary search to check if the middle matches the math solution: `sum(n) = pivot * pivot`.

### Implement

```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        if n == 1:
            return 1

        left = 1
        right = n
        total = (1 + n) * n // 2

        while left < right:
            middle = (left + right) // 2
            current_sum = middle * middle

            if current_sum == total:
                return middle
            elif current_sum < total:
                left = middle + 1
            else:
                right = middle - 1

        return -1
```

### Complexity Analysis

**Time complexity: O(log n)**

**Space complexity: O(1)**
