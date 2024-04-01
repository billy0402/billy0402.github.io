---
title: 58. Length of Last Word
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-01'
---

## Overview

[Question Link](https://leetcode.com/problems/length-of-last-word/description/)

We need to get the length of last word in a sentence.

It's a very easy problem.

We just need to notice that there may be space at the beginning or the end of the sentence.

---

## Solution 1: rstrip + split

### Algorithm

1. `words` will be the result of stripping `s` from the right and splitting `s` with space.
2. Return the length of the last element in `words`.

### Implement

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.rstrip().split(' ')
        return len(words[-1])
```

### Complexity Analysis

**Time complexity: O(n)**

In fact, we iterate through the `s` twice to perform the right stripping and the space splitting.

The total time complexity is O(2n), which simplifies to O(n),

**Space complexity: O(n)**

We require additional space to store the splitting words, which takes O(n).

## Solution 2: For loop

### Algorithm

1. Initialize the `counter` to zero.
2. Iterate through the `s` from the end:
   - If `s[i]` is a space and the `counter` is not zero, exit the loop.
   - Otherwise, increase the `counter` by one.
3. Return the `counter`.

### Implement

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        counter = 0

        for i in range(len(s) - 1, -1, -1):
            if s[i] == ' ':
                if counter > 0:
                    break
            else:
                counter += 1

        return counter
```

### Complexity Analysis

**Time complexity: O(n)**

We just iterate through the `s` once, taking O(n) time.

**Space complexity: O(1)**

We don't use any additional space.
