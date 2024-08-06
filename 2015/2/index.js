const fs = require("fs/promises");

fs.readFile("input.txt", "utf8").then((data) => {
  data = data
    .split("\n")
    .map((line) => line.trim())
    .map((line) => {
      let splitedArr = line.split("x");
      splitedArr = splitedArr.map((val) => Number(val));
      return splitedArr;
    });
  let total = 0;
  data.forEach((val) => {
    total = total + wrapPaper(...val);
  });
  console.log("Total:", total);
});

function wrapPaper(w, l, h) {
  const area = 2 * w * l + 2 * w * h + 2 * l * h;
  const smallestArea = Math.min(w * l, w * h, l * h);
  return area + smallestArea;
}

// const fs = require('fs');
// const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('\n');
// const result = INPUT.reduce((total, _lwh) => {
//   const lwh = _lwh.split('x');
//   const length = lwh[0];
//   const width = lwh[1];
//   const height = lwh[2];

//   return total
//     + (2 * length * width)
//     + (2 * width * height)
//     + (2 * height * length)
//     + Math.min(length * width, width * height, height * length);
// }, 0);

// console.log(result);
