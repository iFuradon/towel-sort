
function towelSort(matrix) {

  return matrix.reduce((acc, row, index) => {
    
    if (index % 2 !== 0) {
        row.reverse();
    }

    return acc.concat(row);

}, []);

}

module.exports = function towelSort (matrix) {
  return [];
}
