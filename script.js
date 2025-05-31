// Get the display element
let display = document.getElementById("display");

// Add value (number or operator) to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display when 'C' is pressed
function clearDisplay() {
  display.value = "";
}

// Evaluate the expression and handle errors
function calculateResult() {
  try {
    let result = eval(display.value); // Built-in JS evaluator

    // Check for division by zero or Infinity
    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    // If invalid expression, show error
    display.value = "Error";
  }
}

// Keyboard input support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Accept numbers and basic operators
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  }

  // Pressing Enter = calculate
  else if (key === "Enter") {
    event.preventDefault();
    calculateResult();
  }

  // Backspace deletes one character
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // Pressing "c" or "C" clears the display
  else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
