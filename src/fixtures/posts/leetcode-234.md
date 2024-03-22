---
title: 234. Palindrome Linked List
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-03-22'
---

## Overview

[Question Link](https://leetcode.com/problems/palindrome-linked-list/description/)

Check whether the value in the linked list is a palindrome or not.

---

## Solution 1: List

### Algorithm

1. Create a `nums` list to save the `node.val` in linked list nodes.

2. Iterate through the linked list and append the `node.val` to the `nums` list.

3. Initialize `left` and `right` two pointers to point to the list head and tail.

4. Iterate through the `nums` list.\
   If the number at the left index is not equal to the number at right index,\
   it means it's not a palindrome linked list.
   Return false immediately.

5. Return true because the left-hand side is equal to the reversed right-hand side.

### Implement

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        nums: list[int] = []

        while head is not None:
            nums.append(head.val)
            head = head.next

        left = 0
        right = len(nums) - 1

        while left < right:
            if nums[left] != nums[right]:
                return False

            left += 1
            right -= 1

        return True
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate though the linked list to save the `node.va`l into `nums` takes O(n).

Iterate through the `nums` list will take half of the `nums` list\
if the numbers are all unique in half of the `nums`, takes O(n/2).

The total time complexity can be simplified to O(n).

**Space complexity: O(n)**

We use an additional list to save the `node.val` in the linked list, taking O(n) space.

## Solution 2: Two Pointer

### Algorithm

1. Initialize `slow` and `fast` pointers and point on the `head`.
   Initialize `previous` as None.

2. This iteration combines two techniques.

   First, we use slow and fast pointer:\
   slow advances by one step, and fast advances by two steps.\
   When fast reaches the end, slow points to the middle node of the linked list.

   Another technique involves reversing the left half of the linked list,\
   using the algorithm discussed in question 206 yesterday.\
   `previous` will point to the end of the left half and the left hand side had been reversed.\
   `slow` will point on the start of the right half.

3. If the length of the linked list is odd, we need to move slow one more time\
   so it points to the correct middle position.

4. Iterate through `previous` and `slow` to check if the `node.val` is equals or not.\
   Return false immediately if the `node.val` is not equal.

5. Return true because the values of the previous nodes are equal to the values of the slow nodes.

### Implement

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        previous: Optional[ListNode] = None

        while fast and fast.next:
            fast = fast.next.next

            next = slow.next
            slow.next = previous
            previous, slow = slow, next

        if fast is not None:
            slow = slow.next

        while previous and slow:
            if previous.val != slow.val:
                return False

            previous = previous.next
            slow = slow.next

        return True
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through half of the linked list to let `slow` point to the middle and `fast` point to the end takes O(n/2).

The pointer movements and reversing the left half of the linked list are all O(1) operations.

Iterating through `previous` and `slow` also takes half of the linked list, takeing O(n/2) time.

Therefore, the total time complexity is O(n).

**Space complexity: O(1)**

We create additional three pointers, which takes constraint space.

It won't grow up with the size of the input linked list.

So the total space complexity only takes O(1).

## Solution 3: Stack

### Algorithm

1. Create a `stack` list to save the `node.val` in linked list nodes.

2. Iterate through the linked list and append the `node.val` to the `stack` list.

3. Iterate through the linked list again.\
   If the number isn't equal to the popped number from the `stack`,
   it means it's not a palindrome linked list.
   Return false immediately.

4. Return true because the values of the linked list is equal to the popped values from the `stack` (the reversed linked list).

### Implement

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        stack: list[int] = []

        current = head
        while current is not None:
            stack.append(current.val)
            current = current.next

        current = head
        while current is not None:
            if current.val != stack.pop():
                return False
            current = current.next

        return True
```

### Complexity Analysis

**Time complexity: O(n)**

Iterate though the linked list twice takes O(2n), which simplifies to O(n).

**Space complexity: O(n)**

We use an additional list to save the `node.val` in the linked list, taking O(n) space.
