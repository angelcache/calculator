const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button")
let nums = [];
let num = "";
let calcScreen = "";
let oper = "";

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    showOnScreen(button.innerText);
  });
})

operButtons.forEach(button => {
  button.addEventListener('click', () => {

    if (num) {
      nums.push(num);
    }
    console.log(`nums outside if statement: ${nums}`);
    num = ""
    console.log(nums);
    if (nums.length == 2) {
      console.log(`nums length: ${nums.length}`);
      console.log(`nums inside if statement: ${nums}`);
      console.log("YEEHAW")
      console.log(oper);
      num1 = parseInt(nums[0]);
      num2 = parseInt(nums[1]);
      console.log(num1)
      console.log(num2)
      calculate(num1, num2);
      showOnScreen("");
      console.log(`nums after calculate: ${nums}`);
    }
    showOnScreen(button.innerText);

    oper = button.innerText;
  });
})

function showOnScreen(val) {
  let screen = document.querySelector(".js-calc-screen");
  if (parseInt(val)) {
    num += val;
    calcScreen += val;
  } else {
    console.log("HATE IT HERE: " + calcScreen[calcScreen.length-1]);
    if (!parseInt(calcScreen[calcScreen.length-1])) {
      console.log("HELLO?")
      calcScreen = calcScreen.slice(0, calcScreen.length-1) + val;
      console.log("PLEASE" + calcScreen)
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
  console.log(nums)
  calcScreen = String(num);
  num = "";
}