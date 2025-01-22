// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
const statement = document.getElementById("statement");
// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelector("#options").children;
// explanation should be the "explanation" div
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation

const fact = {
  statement: "Arrays are like object",
  answer: true,
  explanation: "Arrays are a kind of object with special properties",
};

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact["statement"];

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""

const disable = (button) => {
  button.setAttribute("disabled", "");
};
/*   *** there is the confusion */

// enable(button) should remove the attribute "disabled" from the button element

const enable = (button) => button.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guessString to the right answer
// isCorrect(guessString) should return true if the guessString matches the fact's answer
function isCorrect(guessString) {
  return fact.answer.toString() === guessString;
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
for (const element of optionButtons) {
  element.addEventListener("click", (event) => {
    console.log("heard a click");

    // TODO 6B: Within the event listener function, display the fact's explanation by setting the text of the explanation element

    explanation.textContent = fact.explanation;

    // TODO 7: Within the event listener function,
    // Use a for loop to disable all the option buttons

    for (const allButtons of optionButtons) {
      disable(allButtons);
    }

    // TODO 8: Within the event listener function,
    // Get the guessStringed value from the clicked button
    if (isCorrect(element.value)) {
      element.classList.add("correct");
    } else {
      element.classList.add("incorrect");
    }

    // Use a conditional to compare the guessString to the fact's answer
    // and add the "correct"/"incorrect" class as appropriate
  });
}
// correct answer!

// wrong answer!
