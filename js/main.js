// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let countY = 0;
  let countN = 0;
  let countM = 0;
  outputEl.innerHTML = "";
  for (let n = 0; n < surveyData.length; n++) {
    if (surveyData[n] === "Yes") {
      countY++;
    } else if (surveyData[n] === "No") {
      countN++;
    } else if (surveyData[n] === "Maybe") {
      countM++;
    }
  }
  outputEl.innerHTML = `Yes: ${countY} <br> No: ${countN} <br> Maybe: ${countM}`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let countY = 0;
  let countA = 0;
  let countM = 0;
  let countO = 0;
  for (let n = 0; n < ageData.length; n++) {
    if (ageData[n] < 18) {
      countY++;
    } else if (ageData[n] <= 35) {
      countA++;
    } else if (ageData[n] <= 65) {
      countM++;
    } else if (ageData[n] > 65) {
      countO++;
    }
  }
  console.log(countY, countA, countM, countO);
  outputEl.innerHTML = `Under 18: ${countY} <br> 18 to 35: ${countA} <br> 36 to 65: ${countM} <br> Above 65: ${countO}`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = "Number Data";
  console.log(numberData);
}
