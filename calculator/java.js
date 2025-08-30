let display = document.getElementById("display");

function appendNumber(num) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendOperator(op) {
  let lastChar = display.textContent.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.textContent = display.textContent.slice(0, -1) + op;
  } else {
    display.textContent += op;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}


document.addEventListener("keydown", function(event) {
  const key = event.key;


  if (/^[0-9]$/.test(key)) {
    appendNumber(key);
  }

  else if (["+", "-", "*", "/"].includes(key)) {
    appendOperator(key);
  }
  
  else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculateResult();
  }

  else if (key === "Backspace") {
    deleteLast();
  }

  else if (key.toLowerCase() === "c") {
    clearDisplay();
  }

  else if (key === ".") {
    appendNumber(".");
  }
});
