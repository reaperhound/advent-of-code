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
  let wrap = 0;
  data.forEach((val) => {
    wrap = wrap + wrapPaper(...val);
  });
  let ribbon = 0;
  data.forEach((val) => {
    ribbon = ribbon + totalRibbon(...val);
  });
  console.log("Wrap:", wrap, "\n Ribbon:", ribbon);
});

function wrapPaper(w, l, h) {
  const area = 2 * w * l + 2 * w * h + 2 * l * h;
  const smallestArea = Math.min(w * l, w * h, l * h);
  return area + smallestArea;
}

function totalRibbon(w, l, h) {
  const sides = [w, l, h];
  sides.sort((a, b) => a - b);
  const ribbonToWrap = 2 * (sides[0] + sides[1]);

  const ribbonForBow = w * l * h;
  return ribbonForBow + ribbonToWrap;
}
