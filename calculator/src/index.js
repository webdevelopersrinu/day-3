let display = document.getElementById("display");
function displayValue(value) {
  console.log("hiii");
  console.log(display);
  console.log(value);
  display.value += value;
}

function dataEval() {
  display.value = eval(display.value);
}

function clearValue() {
  display.value = "";
}
function removeLastValue() {
  display.value = display.value.toString().slice(0, -1);
}
