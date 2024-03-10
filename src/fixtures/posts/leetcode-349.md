---
title: 349. Intersection of Two Arrays
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-10'
---

[Question Link](https://leetcode.com/problems/intersection-of-two-arrays/description/)

Today is still an easy problem.

The LeetCode Daily Question always includes relative questions from the past few days.

Yesterday, we just needed to find out the smallest number in both input array

and both input arrays had been sorted.

Today, we need to find out all the numbers, and both input arrays haven't been sorted yet.

---

### First solution: Hash Table

With removing repeated items, using the set data structure will be the most direct way to consider.

```python
class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        def set_intersection(set1: set, set2: set):
            return list(n for n in set1 if n in set2)

        set1 = set(nums1)
        set2 = set(nums2)

        if len(set2) > len(set1):
            return set_intersection(set2, set1)

        return set_intersection(set1, set2)
```

**Time complexity: O(m+n)**

We need O(m) to convert nums1 to set1 and O(n) for convert nums2 to set2.

And we implement the intersection method ourselves to learn more with the algorithm.

This method will take O(min(m, n)), this part is not the dominant part can be ignored.

So, the total time complexity can simply be to O(m+n).

**Space complexity: O(m+n)**

We use two addition set to save set1 and set2, using O(m+n).

#### Additional knowledge: CPython set build in intersection method implementation

- [Reference](https://stackoverflow.com/questions/20100003/whats-the-algorithm-of-set-intersection-in-python)
- [CPython Source Code](https://github.com/python/cpython/blob/main/Objects/setobject.c#L1334)

It looks like what we implemented above without converting the arrays.

```python
def intersect(a: set, b: set):
    if len(a) > len(b):
        a, b = b, a

    return set(x for x in a if x in b)
```

**Time complexity: O(min(m, n))**

Swap sets using O(1), but it is efficient to reduce time complexity for the compare step.

Iterate through the shorter one using O(n) and check with the longer one using O(1).

The total will be O(min(m, n)) where m is the size of the first set and n is the size of the second set.

**Space complexity: O(min(m, n))**

We use an addition set to return the results.

The size is also determined by both input set sizes.

---

### Second solution: Two Pointer

We can update yesterday's answer directly.

First, We sort both input arrays.

And two-pointer algorithm just changes to save all the results when numbers are equal.

Then we convert the results to a list and return it.

```python
class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        nums1.sort()
        nums2.sort()

        first = 0
        second = 0
        results = set()

        while first < len(nums1) and second < len(nums2):
            n1 = nums1[first]
            n2 = nums2[second]

            if n1 == n2:
                first += 1
                second += 1
                results.add(n1)
            elif n1 < n2:
                first += 1
            else:  # >
                second += 1

        return list(results)
```

**Time complexity: O(m log m + n log n)**

The sorts take (m log m) and (n log n),

where n is the length of the first array and m is the length of the second array.

The two-pointer algorithm's time complexity remains the same as yesterday O(m+n).

And converting the result set to list takes O(n).

The total time complexity is determined by the sort which is O(m log m + n log n).

**Space complexity: O(m+n)**

List sorting in Python requires an addition O(n) space with the Tim Sort algorithm.

Sorting two arrays will take O(m+n) for additional space.

The result set and list used for the result can be ignored.

---

### Third solution: Binary Search

We can use binary search to find if the number is in nums with O(log n).

We need to sort the shorter array that will be searching for.

And use a set to records the results and convert to a list before returning.

```python
class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
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
            nums1.sort()
            return self.intersection(nums2, nums1)

        nums2.sort()
        results = set()

        for num in nums1:
            if binary_search(nums2, num):
                results.add(num)

        return list(results)
```

**Time complexity: O(n log n)**

Iterate through the shorter array O(m) and performing the binary search O(log n) takes O(m log n).

However, the total time complexity determine by sorting the longer array, which is O(n log n).

**Space complexity: O(n)**

We use a addition set to record the results.
