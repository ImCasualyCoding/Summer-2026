# Brandon Valecia 5/21/2026 Assignment 1: Chapter 1 Exercises
import random


def is_multiple(n: int, m: int) -> bool:
    """Checks if one integer is a perfect multiple of another.

    Inputs:
        n (int): The number being checked.
        m (int): The potential factor.
    Outputs:
        bool: True if n = m * i for some integer i, False otherwise.
    """
    # Prevent a ZeroDivisionError if m is 0
    if m == 0:
        return False
    return n % m == 0


def is_even(k: int) -> bool:
    """Determines if an integer is even without using *, /, or %.

    Inputs:
        k (int): The integer to check.
    Outputs:
        bool: True if k is even, False otherwise.
    """
    # Bitwise AND looks at the final binary digit (0 for even, 1 for odd)
    return (k & 1) == 0


def minmax(data) -> tuple:
    """Finds the minimum and maximum numbers in a sequence without using built-ins.

    Inputs:
        data (sequence): A non-empty sequence of numbers.
    Outputs:
        tuple: A length-two tuple in the format (smallest, largest).
    """
    if not data:
        raise ValueError("Sequence cannot be empty")
        
    # Baseline trackers using the first element
    smallest = data[0]
    largest = data[0]
    
    # Single-pass loop to update bounds
    for number in data:
        if number < smallest:
            smallest = number
        elif number > largest:
            largest = number
            
    return (smallest, largest)


def sum_of_squares(n: int) -> int:
    """Computes the sum of squares of all positive integers smaller than n using a loop.

    Inputs:
        n (int): The upper bound (exclusive).
    Outputs:
        int: The accumulated sum of squares.
    """
    total = 0
    # Loop from 1 up to n-1
    for i in range(1, n):
        total += i * i
    return total


def sum_of_squares_comprehension(n: int) -> int:
    """Computes the sum of squares of all positive integers smaller than n via comprehension.

    Inputs:
        n (int): The upper bound (exclusive).
    Outputs:
        int: The accumulated sum of squares using sum() and generator expression.
    """
    # Single command implementation of Exercise 4
    return sum(i**2 for i in range(1, n))


def sum_of_odd_squares(n: int) -> int:
    """Computes the sum of squares of all odd positive integers smaller than n using a loop.

    Inputs:
        n (int): The upper bound (exclusive).
    Outputs:
        int: The accumulated sum of odd squares.
    """
    total = 0
    # Step by 2 to target only odd numbers: 1, 3, 5...
    for i in range(1, n, 2):
        total += i * i
    return total


def sum_of_odd_squares_comprehension(n: int) -> int:
    """Computes the sum of squares of all odd positive integers smaller than n via comprehension.

    Inputs:
        n (int): The upper bound (exclusive).
    Outputs:
        int: The accumulated sum of odd squares using sum() and generator expression.
    """
    # Single command implementation of Exercise 6
    return sum(i**2 for i in range(1, n, 2))


def get_positive_index(s: str, k: int) -> int:
    """Converts a valid negative string index into its positive equivalent.

    Inputs:
        s (str): The target string.
        k (int): A negative index where -len(s) <= k < 0.
    Outputs:
        int: The equivalent positive index j where j >= 0.
    """
    n = len(s)
    
    # Boundary check for safety
    if not (-n <= k < 0):
        raise IndexError("Index out of valid negative range")
        
    # Mathematical mapping: j = n + k
    return n + k


def my_choice(data):
    """Selects a random element from a sequence using only random.randrange.

    Inputs:
        data (sequence): A non-empty sequence of items.
    Outputs:
        Any: A randomly selected element from the sequence.
    """
    if not data:
        raise IndexError("Cannot choose from an empty sequence")
        
    # Choose a valid random numerical index position
    random_index = random.randrange(len(data))
    return data[random_index]


# =====================================================================
# MAIN EXECUTION / TESTING SUITE
# =====================================================================

def main():
    """Demonstrates and verifies the correctness of all assignment functions."""
    print("=" * 60)
    print("RUNNING ASSIGNMENT 1 TEST SUITE")
    print("=" * 60)

    # 1. Test is_multiple
    print(f"1. is_multiple(20, 5): {is_multiple(20, 5)} (Expected: True)")
    print(f"   is_multiple(21, 5): {is_multiple(21, 5)} (Expected: False)\n")

    # 2. Test is_even
    print(f"2. is_even(42): {is_even(42)} (Expected: True)")
    print(f"   is_even(17): {is_even(17)} (Expected: False)\n")

    # 3. Test minmax
    sample_list = [34, 12, 89, 5, 23, 7]
    print(f"3. minmax({sample_list}): {minmax(sample_list)} (Expected: (5, 89))\n")

    # 4. Test sum_of_squares (Loop)
    print(f"4. sum_of_squares(4): {sum_of_squares(4)} (Expected 1+4+9 = 14)\n")

    # 5. Test sum_of_squares_comprehension (One-liner)
    print(f"5. sum_of_squares_comprehension(4): {sum_of_squares_comprehension(4)} (Expected: 14)\n")

    # 6. Test sum_of_odd_squares (Loop)
    print(f"6. sum_of_odd_squares(6): {sum_of_odd_squares(6)} (Expected 1+9+25 = 35)\n")

    # 7. Test sum_of_odd_squares_comprehension (One-liner)
    print(f"7. sum_of_odd_squares_comprehension(6): {sum_of_odd_squares_comprehension(6)} (Expected: 35)\n")

    # 8. Test get_positive_index
    test_str = "Python"
    neg_idx = -2
    pos_idx = get_positive_index(test_str, neg_idx)
    print(f"8. get_positive_index('{test_str}', {neg_idx}): {pos_idx} (Expected: 4)")
    print(f"   Verification -> s[-2]: '{test_str[neg_idx]}', s[4]: '{test_str[pos_idx]}'\n")

    # 9. Test my_choice
    options = ['Apple', 'Banana', 'Cherry', 'Date']
    print(f"9. my_choice({options}): {my_choice(options)} (Expected: Random selection)")
    print("=" * 60)

if __name__ == "__main__":
    main()