const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");
const commandButtons = document.querySelectorAll(".command-button");

let nums = [];
let num = "";
let calcScreen = "";
let oper = "";

function showOnScreen(val) {
  let screen = document.querySelector(".js-calc-screen");

  // For Clear and Back Cases
  if (val == "") {
    screen.innerText = calcScreen;
    return;
  }

  // For Calculation Cases
  if (!isNaN(parseInt(val)) || val === ".") {
    if (num.includes(".") && val === "." || num.includes(".") && num === "") {
      return;
    }
    num += val;
    calcScreen += val;
  } else {
    if (isNaN(parseInt(calcScreen[calcScreen.length - 1])) && val != "=") {
      if (calcScreen == "" || calcScreen[calcScreen.length - 1] === ".") { 
        return; // prevents operator entry if no prev num or if "."
      }
      calcScreen = calcScreen.slice(0, calcScreen.length - 1) + val;
    } else if (val != "=") {
      calcScreen += val;
    }
  }
  screen.innerText = calcScreen;
}

function checkCalculate() {
  if (num && num[num.length-1] != ".") {
    nums.push(num);
    num = ""
  }
  
  if (nums.length == 2) {
    
    let num1 = nums[0];
    let num2 = nums[1];
    if (num1.includes(".") || num2.includes(".")) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
    } else {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
    }
    calculate(num1, num2);
  }
}

function calculate(first, second) {
  const doneCalcScreen = document.querySelector(".js-calc-done-screen");

  if (oper == "+") {
    num = first + second;
    calculation = `${first} + ${second}  = ${num}`;
  } else if (oper == "-") {
    num = first - second;
    calculation = `${first} - ${second}  = ${num}`;
  } else if (oper == "*") {
    num = first * second;
    calculation = `${first} * ${second}  = ${num}`;
  } else if (oper == "/") {
    num = first / second;
    calculation = `${first} / ${second}  = ${num}`;
  }

  doneCalcScreen.innerText = calculation;
  nums = [String(num)];
  calcScreen = String(num);
  num = "";
}

function clearOrBackCalculation(command) {
  if (num) {
      nums.push(num);
  }
  num = ""

  if (command === "Clear") {
    calcScreen = "";
    nums = [];

  } else if (command === "Back") {
    lastVal = calcScreen[calcScreen.length - 1];

    if (isNaN(parseInt(lastVal)) && lastVal != ".") {
      oper = "";
    } else {
      let numString = nums[nums.length - 1];
      if (numString && numString.length == 1) {
        nums.pop();
      } else if (numString) {
        num = numString.slice(0, numString.length - 1);
        nums.pop();
      }
    }
    calcScreen = calcScreen.slice(0, calcScreen.length - 1);
  }
  showOnScreen("");
}