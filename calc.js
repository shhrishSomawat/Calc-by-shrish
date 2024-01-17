const display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
  display.value += number;
}

function appendSymbol(symbol) {
  display.value += symbol;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
