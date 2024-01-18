function fibs(n) {
  let arr = [0, 1];
  while (n > arr.length) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}
console.log(fibs(6));
