// Event Listeners for Buttons
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (num.length <= maxLimit) {
      showOnScreen(button.innerText);
    }
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

// Event Listeners for Keys
document.addEventListener('keydown', (e) => {
  if (!isNaN(parseInt(e.key))) {
    if (num.length <= maxLimit) {
      showOnScreen(e.key);
    }
  }

  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    checkCalculate();
    showOnScreen(e.key);
    oper = e.key;
  }

  if (e.key === "Enter" || e.key === "=") {
    checkCalculate();
    showOnScreen("");
  }

  if (e.key === "Escape") {
    clearOrBackCalculation("Clear");
  }

  if (e.key === "Backspace") {
    clearOrBackCalculation("Back");
  }
})