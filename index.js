const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pswStageOne = document.getElementById("psw-gen-one");
let pswStageTwo = document.getElementById("psw-gen-two");
let btnGen = document.getElementById("btn");
let isActive = true;

function genPsw() {
  let pswArray = [];
  let pswArray2 = [];
  if (isActive) {
    for (let i = 0; i < 16; i++) {
      pswArray.push(randNumberGen());
      pswArray2.push(randNumberGen());
    }
    console.log(pswArray);
    console.log(pswArray2);

    return pswArray, pswArray2;
  }
}

function randNumberGen() {
  let selector = Math.floor(Math.random() * characters.length);
  let selector2 = Math.floor(Math.random() * characters.length);

  return selector, selector2;
}

function renderPsw() {
  if (isActive) {
    let pswArray = genPsw();
    let pswArray2 = genPsw();
    pswArray.forEach((digit) => {
      pswStageOne.textContent += characters[digit];
    });

    pswArray2.forEach((digit) => {
      pswStageTwo.textContent += characters[digit];
    });
    isActive = false;
  }
}

function resetPsw() {
  pswStageOne.textContent = "";
  pswStageTwo.textContent = "";
  isActive = true;
}
