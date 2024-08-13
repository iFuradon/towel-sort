
function towelSort(matrix) {

  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
          result.push(...matrix[i]);
      } else {
          result.push(...matrix[i].reverse());
      }
  }

  return result;
}

module.exports = function towelSort (matrix) {
  return [];
}
