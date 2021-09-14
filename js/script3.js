let myArr = [1,2,3,4,5,6];

let min = (myArr) => myArr.reduce((a,b) => a + b)/myArr.length;

console.log(min(myArr));