---
title: 205. Isomorphic Strings
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-02'
---

## Overview

[Question Link](https://leetcode.com/problems/isomorphic-strings/description/)

If the two input strings have same character orders, they are isomorphic strings.

---

## Solution 1: Hash Table

### Thinking

Use two hash tables, one to save `s` mapped to `t` and another to save `t` mapped to `s`.

Check if the character showing next time is the same as the first pair.

### Algorithm

1. Initialize two hash tables to save `s` mapped to `t` and `t` mapped to `s`.

2. Iterate through strings `s` and `t`:

   - If `char_s` exists in `s_to_t` and `char_t` is not equal to `s_to_t[char_s]`, return `false`.
   - If `char_t` exists in `t_to_s` and `char_s` is not equal to `t_to_s[char_t]`, return `false`.
   - Otherwise, set `s_to_t[char_s]` to `char_t` and set `t_to_s[char_t]` to `char_s`.

3. If all pairs are correct, `s` and `t` are isomorphic strings, return `true`.

### Implement

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_to_t: dict[str, str] = {}
        t_to_s: dict[str, str] = {}

        for char_s, char_t in zip(s, t):
            if char_s in s_to_t:
                if char_t != s_to_t[char_s]:
                    return False
            elif char_t in t_to_s:
                if char_s != t_to_s[char_t]:
                    return False
            else:
                s_to_t[char_s] = char_t
                t_to_s[char_t] = char_s

        return True
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through strings `s` and `t` takes O(n) time.

**Space complexity: O(n)**

Using two additional hash tables takes O(2n) time, which simplifies to O(n).
