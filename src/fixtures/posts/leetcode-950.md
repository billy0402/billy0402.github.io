---
title: 950. Reveal Cards In Increasing Order
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-10'
---

## Overview

[Question Link](https://leetcode.com/problems/reveal-cards-in-increasing-order/description/)

We need to reorder the card deck to allow the player take the card with the game rules.

The deck will be ascending order after the game finished.

---

## Solution 1: Simulation with Queue

### Algorithm

1. Sort the `deck` list.

2. Initialize a deque named `queue`.

   Iterate from 0 to the length of the `deck`:

   - Append the index into the `queue`.

3. Initialize a list named `results`, filled with zero with the length of the `deck`.

   Iterate through the `deck`:

   - Pop the `index` from the left of the `queue`.
   - Update `results[index]` to `card`.

   If `queue` is not empty:

   - Pop the `index` from the left of the `queue`.
   - Append `index` back to `queue`.

4. Return the `results`.

### Implement

```python
class Solution:
    def deckRevealedIncreasing(self, deck: list[int]) -> list[int]:
        deck.sort()

        queue = deque()
        for i in range(len(deck)):
            queue.append(i)

        results = [0] * len(deck)
        for card in deck:
            index = queue.popleft()
            results[index] = card

            if queue:
                index = queue.popleft()
                queue.append(index)

        return results
```

### Complexity Analysis

**Time complexity: O(n log n)**

Sorting the deck takes O(nlog⁡n).

It takes O(n) time to build the queue.

Then, it takes O(n) time to add the cards to the result array in the correct order.

The time used for sorting is the dominating term,

so the overall time complexity is O(nlog⁡n).

**Space complexity: O(n)**

In Python, the sort method sorts a list using the Timesort algorithm

which is a combination of Merge Sort and Insertion Sort

and has O(n) additional space.

Using an additional deque to store the indexes, which takes O(n) space.

As the dominating term is O(n),

the overall space complexity is O(n).
