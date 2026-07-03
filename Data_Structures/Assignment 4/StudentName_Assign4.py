def binary_search_first(arr, target):
    low, high = 0, len(arr) - 1
    result = -1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            result = mid
            high = mid - 1
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return result

def find_negatives(lst):
    return [x for x in lst if x < 0]

dataset = [[1, 2], [3, 4], [5, 6]]
total_sum = sum(item for row in dataset for item in row)
