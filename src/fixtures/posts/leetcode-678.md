---
title: 678. Valid Parenthesis String
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-07'
---

## Overview

[Question Link](https://leetcode.com/problems/valid-parenthesis-string/description/)

There are three kind of characters in the string `s`: `'('`, `')'` and `'*'`.

The asterisk `'*'` can be use as `'('` or `')'`.

Check if the string `s` contains valid pairs of parentheses or not.

---

## Solution 1: Stack

### Algorithm

1. Initialize a list of `open_brackets` to store the indexes of open brackets.\
   Initialize a list of `asterisks` to store the indexes of asterisks.

2. Iterate through string `s`:

   - If `char` is equal to `'('`, append `index` into `open_brackets`.
   - If `char` is equal to `'*'`, append `index` into `asterisks`.
   - If `char` is equal to `')'`, pop the index from `open_brackets` or `asterisks`.
   - Otherwise, return `false`.\
     There are not enough open brackets for the close bracket.

3. If `open_brackets` and `asterisks` are not empty:

   - Pop out `open_brackets` and `asterisks`
   - If the index of the open bracket is greater than the index of the asterisk:\
     Return `false`, there are not enough close bracket after the open bracket.

4. Return `false`, if `open_brackets` is not empty, as there still has some open brackets.\
   Otherwise, return `true`.

### Implement

```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        open_brackets: list[int] = []
        asterisks: list[int] = []

        for i, char in enumerate(s):
            if char == '(':
                open_brackets.append(i)
            elif char == '*':
                asterisks.append(i)
            else:  # char == ')'
                if open_brackets:
                    open_brackets.pop()
                elif asterisks:
                    asterisks.pop()
                else:
                    return False

        while open_brackets and asterisks:
            if open_brackets.pop() > asterisks.pop():
                return False

        return not open_brackets
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through string `s` takes O(n) time.

Iterating through `open_brackets` and `asterisks` also takes O(n) time in the worst cases.

The total time complexity is O(2n), which simplifies to O(n).

**Space complexity: O(n)**

Using two additional list takes O(n) in the worst case scenario.
