
const submitButton = document.querySelector(".submit-button");
const alertText = document.querySelector(".alert-text");
const overlay = document.querySelector(".js-overlay");
const alertDiv = document.querySelector(".js-alert");
const alertButton = document.querySelector(".js-alert-button");

submitButton.addEventListener('click', () => {
  let currentGrade = document.querySelector(".current-grade").value;
  let goalGrade = document.querySelector(".goal-grade").value;
  let finalWeight = document.querySelector(".final-weight").value;
  
  if (
    !currentGrade || !goalGrade || !finalWeight
  ) {
    addAlert("Make sure all fields are filled.");
    return;
  }

  if (
    isNaN(parseInt(currentGrade)) || (isNaN(parseInt(goalGrade))) || isNaN(parseInt(finalWeight))
  ) {
    addAlert("Values are not int.");
    return;
  }

  if (
  currentGrade < 0 || currentGrade > 100 ||
  goalGrade < 0 || goalGrade > 100 ||
  finalWeight < 0 || finalWeight > 100
  ) {
    addAlert("Values must be between 0 and 100.");
    return;
  }

  // Formula from rogerhub.com
  requiredGrade = ((goalGrade * 100) - (100 - finalWeight) * currentGrade) / finalWeight;

  requiredGrade = Math.round(requiredGrade * 100) /100;

  addAlert(`You need ${requiredGrade}% on your final to get ${goalGrade}%, you've got this!`);
})

alertButton.addEventListener("click", removeAlert);

function addAlert(text) {
  overlay.classList.add("overlay");
  alertButton.classList.add("alert-button");
  alertDiv.classList.add("alert");
  alertText.innerText = text;
  alertButton.innerText = "OK !";
}

function removeAlert() {
  overlay.classList.remove("overlay");
  alertButton.classList.add("alert-button");
  alertDiv.classList.remove("alert");
  alertText.innerText = "";
  alertButton.innerText = "";
}