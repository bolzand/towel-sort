
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0){
    return [];
  }
  for (let i=0; i<matrix.length; i++ ){
    if (i%2){

    matrix[i].reverse();
  }

  }
  const stack = [...matrix];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
    return res.reverse();
}
