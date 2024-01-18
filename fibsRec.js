function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) return arr;
  return fibsRec(n, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
}
console.log(fibsRec(8));
