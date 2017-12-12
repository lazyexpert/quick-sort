module.exports = function sort(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
  const divisor = partition(arr, left + 1, right);
  swap(arr, divisor, left);
  
  if (divisor - left > 1) {
    quickSort(arr, left, divisor - 1);
  }

  if (right - divisor > 1) {
    quickSort(arr, divisor + 1, right);
  }

  return arr;
}

function partition(arr, l, r) {
  const pivot = arr[l-1];

  while(l <= r) {
    while(arr[l] < pivot) l++;
    while(arr[r] > pivot) r--;

    if (l < r) {
      swap(arr, l, r);
    }
  }

  return l - 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}