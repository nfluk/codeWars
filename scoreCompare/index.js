// comparing scores from one array with one number (first param is an array, second param is a number)
// return true if second param is greater than the average from the the array

function betterThanAverage(classPoints, yourPoints) {
  let classSum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    classSum += classPoints[i];
  }

  return yourPoints > classSum / classPoints.length;
}
