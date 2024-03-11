---
title: 791. Custom Sort String
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-11'
---

[Question Link](https://leetcode.com/problems/custom-sort-string/description/)

Today is finally a medium problem.

It's still about occurrence in both strings.

---

### Hash Table

1. Use a hash table to record the occurrence times of each character in input string `s`.

2. Initialize an answer array for save the answer string

   Use an array instead of a string

   because appending to a string takes linear time complexity, O(n).

3. Iterate through the string `s`.

   Record each character and its occurrence times in the string.

4. Iterate through the string `order`

   1. Check if the character has been recorded in the hash table.

      1. Append the occurrence times of the character to the answer array.

      2. Delete the character data from hash table.

         This depend on constraint 4: All the characters of `order` are unique.

         Deleting the character data is better than setting the data to zero to reduce the number of iterations in the next step.

5. Iterate through the hash table to append the characters that is not in `order`.

6. Covert the answer array to string and return it.

```python
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        hash_table: dict[str, int] = {}
        answer: list[str] = []

        for char in s:
            hash_table[char] = hash_table.get(char, 0) + 1

        for char in order:
            value = hash_table.get(char)
            if not value:
                continue

            for _ in range(value):
                answer.append(char)
            del hash_table[char]

        for key, value in hash_table.items():
            for _ in range(value):
                answer.append(key)

        return ''.join(answer)
```

**Time complexity: O(m + n)**

- Creating the hash table: O(n)
- Building the order part of the answer: O(m)
- Appending the remaining characters: O(n)

Overall: `O(n + m)`, where n is the length of `s` and m is the length of `order`.

**Space complexity: O(n)**

- Hash Table: O(n)
- Answer List: O(n)

Overall: `O(n)`, where n is the length of `s`.

#### Reference

- [string concatenation vs string list concatenation performance](https://dev.to/fayomihorace/python-how-simple-string-concatenation-can-kill-your-code-performance-2636)
