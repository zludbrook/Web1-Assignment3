/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
var dayButtons = document.querySelectorAll(".day-button");
var clearButton = document.getElementById("clear-button");
var halfButton = document.getElementById("half-button");
var fullButton = document.getElementById("full-button");
var rate = 35;
var selectedDays = [];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function handleDayButtonClick(event) {
  var clickedDay = event.target;
  if (!clickedDay.classList.contains("clicked")) {
    clickedDay.classList.add("clicked");
    selectedDays.push(clickedDay.textContent);
    updateTotalCost();
  }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function () {
  dayButtons.forEach(function (dayButton) {
    dayButton.classList.remove("clicked");
  });
  selectedDays = [];
  updateTotalCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", function () {
  rate = 20;
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  updateTotalCost();
});

fullButton.addEventListener("click", function () {
  rate = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  updateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function updateTotalCost() {
  var totalCost = rate * selectedDays.length;
  calculatedCostElement.textContent = `$${totalCost}`;
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateTotalCost() {
  calculatedCostElement.textContent = "$" + rate * selectedDays.length;
}
