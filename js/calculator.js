const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");

let nums = [];
let num = "";
let calcScreen = "";
let oper = "";

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    showOnScreen(button.innerText);
  });
});

operButtons.forEach(button => {
  button.addEventListener('click', () => {
    checkCalculate();
    showOnScreen(button.innerText);
    oper = button.innerText;
  });
});

equalButton.addEventListener('click', () => {
  checkCalculate();
  showOnScreen("=");
});

function checkCalculate() {
  if (num) {
      nums.push(num);
  }
  num = ""
  if (nums.length == 2) {
      num1 = parseInt(nums[0]);
      num2 = parseInt(nums[1]);
      calculate(num1, num2);
  }
}

function showOnScreen(val) {
  let screen = document.querySelector(".js-calc-screen");
  if (parseInt(val)) {
    num += val;
    calcScreen += val;
  } else {
    if (!parseInt(calcScreen[calcScreen.length-1]) && val != "=") {
      calcScreen = calcScreen.slice(0, calcScreen.length-1) + val;
    } else {
      calcScreen += val;
    }
  }
  screen.innerText = calcScreen;
}

function calculate(first, second) {
  if (oper == "+") {
    num = first + second;
  } else if (oper == "-") {
    num = first - second;
  } else if (oper == "*") {
    num = first * second;
  } else if (oper == "/") {
    num = first / second;
  }
  nums = [num];
  calcScreen = String(num);
  num = "";
}