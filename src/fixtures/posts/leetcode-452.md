---
title: 452. Minimum Number of Arrows to Burst Balloons
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-18'
---

## Overview

[Question Link](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/)

You need to count how many arrows can burst all ranges of balloons.

points = [[start, end]], start <= arrow <= end.

How many arrows can filled all ranges of point starting and ending points.

---

## Solution 1: Greedy

### Thinking

First, we sort the points.\
This helps us merge repeated ranges into continuous ones.

We only need to consider how to minimize the range and when to move to the next range.

When the starting point is greater than current arrow's end,\
it means the current arrow can't burst the range of the point.

Update the arrow's end and the arrow count.

If the arrow is still within the range, update the end to the smaller number\
to ensure the arrow can burst previous points.

### Algorithm

1. Sort the points based on each starting point.

2. Initialize `arrow_end` to negative infinity, ensuring it's smaller than the smallest constraint of any point (-2^31).\
   Initialize `arrows` to zero as the counter for arrows.

3. Iterate through the points:
   1. If `point start` is greater than `arrow_end`.
      Update `arrow_end` to `point end`.
      Increase `arrows` by 1.
   2. Otherwise, if `point end` is smaller than `arrow_end`.
      Update `arrow_end` to `point end`.

### Implement

```python
class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        points.sort(key=lambda x: x[0])
        arrow_end = float('-inf')
        arrows = 0

        for start, end in points:
            if start > arrow_end:
                arrow_end = end
                arrows += 1
            else:
                arrow_end = min(arrow_end, end)

        return arrows
```

### Complexity Analysis

**Time complexity: O(n log n)**

Sorting the points takes O(log n).\
Iterating through the points takes O(n).\
The total time complexity takes O(n log n).

**Space complexity: O(1)**
