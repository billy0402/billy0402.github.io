---
title: 2540. Minimum Common Value
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-09'
---

[Question Link](https://leetcode.com/problems/minimum-common-value/description/)

Today is still an easy problem.

So, we need to find out the smallest number that is in both input arrays.

---

### First solution: Hash Table

We can use a set to help us find if the number is in nums with O(1).

```python
class Solution:
    def getCommon(self, nums1: list[int], nums2: list[int]) -> int:
        set1 = set(nums1)

        for num in nums2:
            if num in set1:
                return num

        return -1
```

**Time complexity: O(n+m)**

Iterate through nums1 to create a set, using O(n).

Iterate through nums2 to check a number is in set1, using O(m),

and each check operation use O(1).

**Space complexity: O(n)**

We use an addition set to save nums1, using O(n).

---

### Second solution: Two Pointer

We can use two pointer.

One point on the first array, another point on the second array.

Compare two pointers' numbers and move the pointers until there are no other values.

```python
class Solution:
    def getCommon(self, nums1: list[int], nums2: list[int]) -> int:
        first = 0
        second = 0

        while first < len(nums1) and second < len(nums2):
            n1 = nums1[first]
            n2 = nums2[second]

            if n1 < n2:
                first += 1
            elif n1 > n2:
                second += 1
            else:
                return n1

        return -1
```

**Time complexity: O(n+m)**

We might iterate through both arrays in the worst situation.

**Space complexity: O(1)**

We just two variable to record two pointers.

---

### Third solution: Binary Search

We can use binary search to find if the number is in nums with O(log n).

```python
class Solution:
    def getCommon(self, nums1: list[int], nums2: list[int]) -> int:
        def binary_search(nums: list[int], target: int) -> bool:
            left = 0
            right = len(nums) - 1

            while left <= right:
                middle = (left + right) // 2
                n = nums[middle]
                if n == target:
                    return True
                elif n > target:
                    right = middle - 1
                else:
                    left = middle + 1

            return False

        if len(nums1) > len(nums2):
            return self.getCommon(nums2, nums1)

        for num in nums1:
            if binary_search(nums2, num):
                return num

        return -1
```

**Time complexity: O(n log m)**

We might iterate the longer array to find the target in the shorter array

to reduce the time complexity in binary search.

It might take O(n) to iterate through the shorter array,

and each binary search uses O(log m).

So the total time complexity is O(n log m).

It might be not that fast when n or m is not too big with other solutions.

But it will be useful when n and m are very large.

**Space complexity: O(1)**

We just use two variables to record two pointers in binary search.
