let sumLargestNumbers = data => {
  // Put your solution here
  data = data.sort((a, b) => {
    return b - a;
  })
  return data[0] + data [1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));