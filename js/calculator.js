const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");
const commandButtons = document.querySelectorAll(".command-button");

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
  showOnScreen("");
});

commandButtons.forEach(button => {
  button.addEventListener('click', () => {
    clearOrBackCalculation(button.innerText);
  })
})

function showOnScreen(val) {
  let screen = document.querySelector(".js-calc-screen");

  // For Clear and Back Cases
  if (val == "") {
    screen.innerText = calcScreen;
    return;
  }

  // For Calculation Cases
  if (!isNaN(parseInt(val))) {
    num += val;
    calcScreen += val;
  } else {
    console.log(calcScreen);
    console.log(val);
    if (isNaN(parseInt(calcScreen[calcScreen.length - 1])) && val != "=") {
      console.log("WHATTT")
      calcScreen = calcScreen.slice(0, calcScreen.length - 1) + val;
    } else if (val != "=") {
      calcScreen += val;
    }
  }
  console.log("HEY " + calcScreen);
  screen.innerText = calcScreen;
}

function checkCalculate() {
  if (num) {
      nums.push(num);
  }

  console.log("AFTER PUSH")
  console.log(nums);
  num = ""
  if (nums.length == 2) {
      num1 = parseInt(nums[0]);
      num2 = parseInt(nums[1]);
      calculate(num1, num2);
  }
  console.log("CHECK CALCULATE");
  console.log(nums);
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
    console.log(`DIVISION: ${first} + ${second}  = ${num}`);
  }
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

    if (!parseInt(lastVal)) {
      oper = "";
    } else {
      let numString = nums[nums.length - 1];
      console.log(`BEFORE`);
      console.log(nums);
      if (numString && numString.length == 1) {
        nums.pop();
      } else if (numString) {
        num = numString.slice(0, numString.length - 1);
        nums.pop();
      }
    }
    console.log("BEFORE calc screen: " + calcScreen)
    calcScreen = calcScreen.slice(0, calcScreen.length - 1);
    console.log("AFTER calc screen: " + calcScreen)
  }
  console.log(`AFTER`);
  console.log(nums);
  showOnScreen("");
}