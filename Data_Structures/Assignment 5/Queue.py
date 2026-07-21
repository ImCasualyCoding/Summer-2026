class Empty(Exception):
    pass

class ArrayQueue:
    def __init__(self, capacity=100):
        self._data = [None] * capacity
        self._size = 0
        self._front = 0
        self._capacity = capacity

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def enqueue(self, e):
        if self._size == self._capacity:
            self._resize(2 * self._capacity)
        avail = (self._front + self._size) % self._capacity
        self._data[avail] = e
        self._size += 1

    def dequeue(self):
        if self.is_empty():
            raise Empty("Queue is empty")
        answer = self._data[self._front]
        self._data[self._front] = None
        self._front = (self._front + 1) % self._capacity
        self._size -= 1
        return answer
        
    def first(self):
        if self.is_empty():
            raise Empty("Queue is empty")
        return self._data[self._front]

    def _resize(self, cap):
        old = self._data
        self._data = [None] * cap
        walk = self._front
        for k in range(self._size):
            self._data[k] = old[walk]
            walk = (1 + walk) % self._capacity
        self._front = 0
        self._capacity = cap

    def get_contents(self):
        contents = []
        walk = self._front
        for _ in range(self._size):
            contents.append(self._data[walk])
            walk = (walk + 1) % self._capacity
        return contents

if __name__ == '__main__':
    print("--- Queues 1 ---")
    q = ArrayQueue()
    ops = [
        ("enqueue", 5),
        ("enqueue", 3),
        ("dequeue", None),
        ("enqueue", 2),
        ("enqueue", 8),
        ("dequeue", None),
        ("dequeue", None),
        ("enqueue", 9),
        ("enqueue", 1),
        ("dequeue", None),
        ("enqueue", 7),
        ("enqueue", 6),
        ("dequeue", None),
        ("dequeue", None),
        ("enqueue", 4),
        ("dequeue", None),
        ("dequeue", None)
    ]
    
    for op, val in ops:
        if op == "enqueue":
            q.enqueue(val)
            ret = None
            print(f"enqueue({val}), Returned: {ret}, Queue: {q.get_contents()}")
        else:
            ret = q.dequeue()
            print(f"dequeue(), Returned: {ret}, Queue: {q.get_contents()}")

    print("\n--- Queues 2 ---")
    explanation = (
        "Scenario: 32 enqueue operations, 10 first operations, and 15 dequeue operations, "
        "5 of which raised Empty errors that were caught and ignored.\n"
        "Calculation:\n"
        "- Initial size: 0\n"
        "- 32 enqueues adds 32 to size.\n"
        "- 10 first operations do not change the size.\n"
        "- 15 dequeue attempts, but 5 failed (Empty error), meaning 10 successful dequeues.\n"
        "- 10 successful dequeues subtracts 10 from size.\n"
        "Final Size = 32 - 10 = 22."
    )
    print(explanation)
