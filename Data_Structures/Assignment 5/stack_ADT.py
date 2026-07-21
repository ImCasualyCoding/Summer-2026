class Empty(Exception):
    pass

class Full(Exception):
    pass

class ArrayStack:
    def __init__(self, maxlen):
        self._data = [None] * maxlen
        self._maxlen = maxlen
        self._size = 0
        self._top = -1

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def is_full(self):
        return self._size == self._maxlen

    def push(self, e):
        if self.is_full():
            raise Full("Stack is full")
        self._top += 1
        self._data[self._top] = e
        self._size += 1

    def top(self):
        if self.is_empty():
            raise Empty("Stack is empty")
        return self._data[self._top]

    def pop(self):
        if self.is_empty():
            raise Empty("Stack is empty")
        answer = self._data[self._top]
        self._data[self._top] = None
        self._top -= 1
        self._size -= 1
        return answer

    def clear(self):
        if not self.is_empty():
            self.pop()
            self.clear()

if __name__ == '__main__':
    print("--- Stacks 1 & 2 ---")
    s = ArrayStack(3)
    s.push(10)
    s.push(20)
    s.push(30)
    print("Stack len after 3 pushes:", len(s))
    try:
        s.push(40)
    except Full as e:
        print("Caught exception:", e)
    s.clear()
    print("Stack len after clear:", len(s))
