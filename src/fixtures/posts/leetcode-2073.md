---
title: 2073. Time Needed to Buy Tickets
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-09'
---

## Overview

[Question Link](https://leetcode.com/problems/time-needed-to-buy-tickets/description/)

There are people in lines who want to buy tickets.

People can buy one ticket at once and takes 1 second.

If they want to buy more tickets, they need to go to the back of the line.

They will leave the line until they bought the amount of tickets they want.

We need to find how many seconds does the person at index k needs to buy the tickets.

---

## Solution 1: Simulation Without Queue

### Thinking

I actually want to use deque to simulate the real situation.

But we need to check the index k, so we can't remove the person from the tickets deque.

I have looked at the answer of LeetCode solutions after I used this solution to resolve the problem.

They use deque to save the index and keep the tickets in a list.

I think the deque is unnecessary.

### Algorithm

1. Initialize `time` as the counter.

2. Iterate until the `tickets[k]` become 0:

   - Iterate from 0 to the length of tickets:
     - If `tickets[i]` is positive, decrease `tickets[i]` by 1 and increase `time` by 1.
     - If `tickets[k]` is equals to 0, return `time` as the answer.\
       The person in index `k` has bought enough tickets.

3. Return time. It's a defensive return.\
   We actually always return in the while loop.

### Implement

```python
class Solution:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        time = 0

        while tickets[k]:
            for i in range(len(tickets)):
                if tickets[i] > 0:
                    tickets[i] -= 1
                    time += 1

                if tickets[k] == 0:
                    return time

        return time
```

### Complexity Analysis

**Time complexity: O(n \* m)**

The outer while loop continues until the person at position k buys all of their tickets.

The inner for loop iterates through all people in the tickets array.

So, the overall time complexity is O(n \* m).

**Space complexity: O(1)**

We just use a constant variable as the time counter, which takes O(1) space.

## Solution 2: Math

### Thinking

We can use math to have only one loop.

The people who bought all the tickets will use the amount of the tickets times.

But we only need to calculate up to the person in index k who bought all the tickets.

The people after will only buy the amount of the tickets with the person minus 1.

Because this turn haven't turned to them.

Or their amount is less. They bought their tickets and already left the line.

### Algorithm

1. Initialize `time` as the counter.

2. Iterate from 0 to the length of the `tickets`.

   - If `i` is less than or equal to `k`:
     - Increase `time` by the minimum of `tickets[i]` and `tickets[k]`.
   - Otherwise:
     - Increase `time` by the minimum of `tickets[i]` and `tickets[k] - 1`.

3. Return time as the result.

### Implement

```python
class Solution:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        time = 0

        for i in range(len(tickets)):
            if i <= k:
                time += min(tickets[i], tickets[k])
            else:
                time += min(tickets[i], tickets[k] - 1)

        return time
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating from 0 to the length of the tickets indeed takes O(n) time,

where n is the length of the tickets.

**Space complexity: O(1)**

Using a constant variable as the time counter indeed takes O(1) space complexity,

as it does not depend on the size of the input data.
