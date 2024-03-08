---
title: 3005. Count Elements With Maximum Frequency
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-08'
---

[Question Link](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/)

It's an easy problem.

So, we need to count down the frequencies of numbers in the input nums array.

And return the total of max frequency's number.

And you should get the sum if the max frequency is not only once.

---

Directly thinking will be:

1. Iterate nums array and use a hash table to record the number and the countdown.
2. Iterate the hash table or use max function find out the max frequency.
3. Iterate the hash table, check the max frequency times, and return the total

But it will use three loops to iterate through the nums array and the dictionary twice.

---

So I want to reduce the times of loop.

The first step with a hash table recording doesn't change.

1. Iterate through the nums array and use a dictionary records the number and its countdown.
2. Iterate through the hash table but use a max frequency variable and a total frequency variable for recording.
   1. If the frequency is less than max frequency:
      1. Do nothing.
   2. If the frequency is equal to max frequency:
      1. Increase the total frequency by the frequency.
   3. If the frequency is greater than max frequency:
      1. Rest the max frequency to frequency.
      2. Rest the total frequency to frequency.

```python
class Solution:
    def maxFrequencyElements(self, nums: list[int]) -> int:
        hash_table: dict[int, int] = {}
        for num in nums:
            hash_table[num] = hash_table.get(num, 0) + 1

        max_frequency = 0
        answer = 0
        for value in hash_table.values():
            if value < max_frequency:
                continue
            elif value == max_frequency:
                answer += value
            else:
                max_frequency = value
                answer = value

        return answer
```

**Time complexity: O(n)**

The total time complex will be O(2n) for two loops.

Each loop is O(n) because our operations are all done in O(1).

Therefore, it simplifies to O(n) to represent the worst-case loop situation.

**Space complexity: O(n)**

We use an addition dictionary to save the frequencies of the nums.

---

Then, referring to the Discussion.

We can also check the max frequency while counting down the frequencies of the nums.

This allows us to reduce the number of loops to only once.

We simply move the logic from the second loop into the first loop.

```python
class Solution:
    def maxFrequencyElements(self, nums: list[int]) -> int:
        frequencies: dict[int, int] = {}
        max_frequency = 0
        total_frequency = 0

        for num in nums:
            frequencies[num] = frequencies.get(num, 0) + 1
            frequency = frequencies[num]

            if frequency > max_frequency:
                max_frequency = frequency
                total_frequency = frequency
            elif frequency == max_frequency:
                total_frequency += frequency

        return total_frequency
```

**Time complexity: O(n)**

The total time complexity will be O(n) due to just one loop.

**Space complexity: O(n)**

We still use an addition dictionary to save the frequencies of the nums.
