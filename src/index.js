// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  matrix &&
    matrix.map((el, i) => {
      if (i % 2 === 1) {
        let a = el.reverse();

        arr.push(a);
      } else {
        arr.push(el);
      }
    });

  let result = arr.flat();

  return result;
};
