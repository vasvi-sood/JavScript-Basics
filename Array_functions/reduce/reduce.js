let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myfunc = (total, val) => {
  return total + val;
};
console.log(arr.reduce(myfunc));
