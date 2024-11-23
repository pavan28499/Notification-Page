const readEl = document.getElementById("read-el");
const numberEl = document.getElementById("number-el");
const markEl = document.getElementById("mark-el");
const angelaEl = document.getElementById("angela-el");
const jacobEl = document.getElementById("jacob-el");
const redElOne = document.getElementById("red-el-one");
const redElTwo = document.getElementById("red-el-two");
const redElThree = document.getElementById("red-el-three");
let value = 3;
readEl.addEventListener("click", function () {
  numberEl.textContent = 0;
  markEl.className =
    "flex justify-start items-start w-full p-3 rounded-lg mt-6";
  angelaEl.className =
    "flex justify-start items-start w-full p-3 rounded-lg mt-2";
  jacobEl.className =
    "flex justify-start items-start w-full p-3 rounded-lg mt-2";
  redElOne.className = "";
  redElTwo.className = "";
  redElThree.className = "";
  value = 0;
});
markEl.addEventListener("click", function handleClick() {
  if (value > 0) {
    markEl.className =
      "flex justify-start items-start w-full p-3 rounded-lg mt-6";
    redElOne.className = "";
    numberEl.textContent = value = value - 1;
  }
});
angelaEl.addEventListener("click", function () {
  if (value > 0) {
    angelaEl.className =
      "flex justify-start items-start w-full p-3 rounded-lg mt-2";
    redElTwo.className = "";
    numberEl.textContent = value = value - 1;
  }
});
jacobEl.addEventListener("click", function () {
  if (value > 0) {
    jacobEl.className =
      "flex justify-start items-start w-full p-3 rounded-lg mt-2";
    redElThree.className = "";
    numberEl.textContent = value = value - 1;
  }
});
