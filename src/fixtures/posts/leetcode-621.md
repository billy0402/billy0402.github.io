---
title: 621. Task Scheduler
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-19'
---

## Overview

[Question Link](https://leetcode.com/problems/task-scheduler/description/)

You need to calculate how long it should take to finish all tasks.

The same task can't be done continuously, and there should be an idle time between each cycle.

Each cycle can complete n tasks.

You should also take idle times when the task types are not enough to filled the n.

---

## Solution 1: Math

### Algorithm

![Math - Image from LeetCode](https://leetcode.com/problems/task-scheduler/Figures/621_re/math_approach.png)

1. Initialize the `freq` dictionary to save the task type and the number of task frequencies.\
   Initialize `max_cycles` to zero.

2. Countdown the task frequencies and update `max_cycles` with the maximum frequency.

3. Calculate the repeated cycle time without last cycle (`max_cycles - 1`).\
   This is because the last cycle might not be filled.\
   `n + 1`, where `n` is the number of tasks each cycle can handle, and `+ 1` is the idle time between each cycle.

4. Count the remaining tasks in the last cycle.

5. Return the maximum of the total time needed and the length of the task list.\
   If the tasks can be cycled without any idle time, the time needed will be the length of the tasks.

### Implement

```python
class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:
        freq: dict[str, int] = {}
        max_cycles = 0

        for task in tasks:
            freq[task] = freq.get(task, 0) + 1
            max_cycles = max(max_cycles, freq[task])

        time = (max_cycles - 1) * (n + 1)
        for f in freq.values():
            if f == max_cycles:
                time += 1

        return max(time, len(tasks))
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate through the tasks to create the frequencies dictionary takes O(n).

Iterate through the frequencies dictionary takes a maximum to O(26).

Therefore, the total time complexity is O(n + 26), which simplifies to O(n).

**Space complexity: O(26) = O(1)**

The task types are all uppercase English letters.

The maximum length might takes O(26).

And it can simplifies to O(1).
