---
title: 1544. Make The String Great
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-05'
---

## Overview

[Question Link](https://leetcode.com/problems/make-the-string-great/description/)

If there is a pair of the same letter with one lowercase and one uppercase, remove the pair of letters.

Until there are no pair of letters, that is a great string.

---

## Solution 1: Stack

### Algorithm

1. Initialize a `stack` to save characters.

2. Iterate through the string `s`:

   - If the `stack` is not empty and the ASCII code of the `character` minus the ASCII code of the last element of the stack equals to 32 in absolute value.\
     That indicates that the `character` and the last element of the stack form a pair of the same letter, with one being uppercase and the other being lowercase.\
     Pop out the last element from the stack.\
     We keep only unpaired letters inside the `stack`.
   - Otherwise, append the `character` to the `stack`.

3. Join the `stack` into a string and return.

### Implement

```python
class Solution:
    def makeGood(self, s: str) -> str:
        stack: list[str] = []

        for char in s:
            if stack and abs(ord(char) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(char)

        return ''.join(stack)
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the string `s` takes O(n) time, where n is the length of the string.

**Space complexity: O(n)**

Using an additional stack to store the characters takes O(n) space, where n is the length of the string.
