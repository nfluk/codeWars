/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

function between(a, b) {
  const resultArray = [];

  for (let i = a; i <= b; i++) {
    resultArray.push(i);
  }
  return resultArray;
}
