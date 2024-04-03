---
title: 79. Word Search
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-03'
---

## Overview

[Question Link](https://leetcode.com/problems/word-search/description/)

We need to check whether the board has a way to spell out the word.

---

## Solution 1: BackTracking

### Thinking

We will try all the patterns on the board to see if any of them can spell out the word.

We'll start from the first character and move up, down, left, and right.

This is just a brute force solution with backtracking.

### Algorithm

1. Initialize a set to save the point we have visited.

2. We will iterate through rows and columns to test each block.

3. The DFS function passes in the current `row` and `column` and `index`:
   - Set `current_point` to `(row, col)`.
   - If `index` equals to the length of the `word`, that means we finished finding the word,
     so we return `true`.
   - If the `row` or the `col` out of the board range, or the current word character is not equal to the current board character, or we have already used the current board character, we need to return `false`.
   - Append the `current_point` to the `visited` set.
   - Try the points in the bottom, top, right and left.
   - Remove the `current_point` from the `visited` set.
   - We need to clean up because we're backtracking, and the `current_point` can be used for the next try.
   - Return the `result`.

### Implement

```python
class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        def dfs(row: int, col: int, index: int):
            current_point = (row, col)

            if index == len(word):
                return True

            if row < 0 or col < 0 or row >= ROWS or col >= COLS \
               or word[index] != board[row][col] \
               or current_point in visited:
                return False

            visited.add(current_point)
            result = dfs(row + 1, col, index + 1) \
                or dfs(row - 1, col, index + 1) \
                or dfs(row, col + 1, index + 1) \
                or dfs(row, col - 1, index + 1)
            visited.remove(current_point)
            return result

        ROWS, COLS = len(board), len(board[0])
        visited = set()

        for i in range(ROWS):
            for j in range(COLS):
                if dfs(i, j, 0):
                    return True
        return False
```

### Complexity Analysis

**Time complexity: O(n \* m \* 4^n)**

Iterate through each rows and columns takes O(n \* m) time.

And for each iteration, the recursive DFS takes O(4^n) time.

Therefore, the total time complexity is O(n \* m \* 4^n), which is not very efficient.

**Space complexity: O(n)**

We use an additional set to save the points that we have visited.
