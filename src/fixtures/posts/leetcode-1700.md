---
title: 1700. Number of Students Unable to Eat Lunch
excerpt: LeetCode Daily Question
image: common/leetcode.jpg
isFeatured: true
date: '2024-04-08'
---

## Overview

[Question Link](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/)

The question has a long description, but the situation is quite simple.

The restaurant will provide two kinds of sandwiches: circular sandwiches (0) and square sandwiches (1).

And students have their own preferences with the sandwiches.

We can only provide the top sandwich to the students.

When the student get their preferred sandwich, they will leave the line.

Otherwise, they will go to the back of the line.

We need to find out how many students cannot be provided.

---

## Solution 1: Queue and Stack

### Thinking

We just use code to simulate the situation.

Students are like deque. They will go out from the left and go in from the right.

Sandwiches are like stack. They will go out from the top.

### Algorithm

1. Initialize `length` to the length of `students`.\
   The `sandwiches` have the same length as the `students`.\
   Initialize `student_queue` with an empty deque.\
   Actually, you can initialize `student_queue` with `students`, but it will require one more loop for initialization.\
   Initialize `sandwich_stack` with an empty list.
2. Iterate from 0 to `length`:
   - Append `students[i]` into `student_queue` (Convert the `students` list to a deque).
   - Append `sandwiches[length - 1 - i]` into `sandwich_stack` (Reverse the `sandwiches` list).
3. Initialize `last_served` to 0.\
   We'll use `last_served` to check if we have checked around the `student_queue`.
4. Iterate through the `sandwich_stack` while `last_served` is smaller than the length of `student_queue`:
   - `current_student` is the student dequeued from the left of `student_queue`.
   - If the top sandwich from `sandwich_stack` is equals to `current_student`:
     - Pop the top sandwich from `sandwich_stack`.
     - Reset `last_served` to 0.
   - Otherwise, append `current_student` back to `student_queue`
     - Increase `last_served` by 1.
5. Return the length of `student_queue`, which represents the number of students who didn't get sandwiches.

### Implement

```python
class Solution:
    def countStudents(self, students: list[int], sandwiches: list[int]) -> int:
        length = len(students)
        student_queue: deque[int] = deque()
        sandwich_stack: list[int] = []

        for i in range(length):
            student_queue.append(students[i])
            sandwich_stack.append(sandwiches[length - 1 - i])

        last_served = 0
        while sandwich_stack and last_served < len(student_queue):
            current_student = student_queue.popleft()
            if sandwich_stack[-1] == current_student:
                sandwich_stack.pop()
                last_served = 0
            else:
                student_queue.append(current_student)
                last_served += 1

        return len(student_queue)
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating from 0 to `length` takes O(n) time.

Iterating through the `sandwich_stack` takes O(n) time in the worst case.

The total time complexity is O(2n), which simplifies to O(n).

**Space complexity: O(n + m)**

We use an additional deque and an additional stack, which takes O(n + m) space.

## Solution 2: Counter

### Algorithm

1. Initialize `circular_counter` to zero and `square_counter` to zero.
2. Iterate through `students`:
   - If the student is 0, increase `circular_counter` by 1.
   - If the student is 1, increase `square_counter` by 1.
3. Iterate through `sandwiches`:
   - If the sandwich is 0 and `circular_counter` is not zero:
     - Decrease `circular_counter` by1.
   - If the sandwich is 1 and `square_counter` is not zero:
     - Decrease `square_counter` by1.
   - Otherwise, the current sandwich cannot provide to any student:
     - Return `circular_counter` plus `square_counter`, representing the number of the students who didn't get the sandwich.
4. Return 0 that all the students have been served.

### Implement

```python
class Solution:
    def countStudents(self, students: list[int], sandwiches: list[int]) -> int:
        circular_counter = 0
        square_counter = 0

        for student in students:
            if student == 0:
                circular_counter += 1
            else:  # 1
                square_counter += 1

        for sandwich in sandwiches:
            if sandwich == 0 and circular_counter:
                circular_counter -= 1
            elif sandwich == 1 and square_counter:
                square_counter -= 1
            else:
                return circular_counter + square_counter

        return 0
```

### Complexity Analysis

**Time complexity: O(n)**

Iterating through the `students` takes O(n) time.

Iterating through the `sandwiches` also takes O(n) time.

The total time complexity is O(2n), which simplifies to O(n).

**Space complexity: O(1)**

We use two additional variables which takes constant space.
