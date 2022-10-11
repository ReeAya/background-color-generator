const css = document.querySelector(".current-colors");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector(".gradient");
const button = document.querySelector("button");

css.innerHTML = color1.value + " , " + color2.value;

function setGradient() {
  const firstCol = color1.value;
  const secCol = color2.value;
  body.style =
    "background: linear-gradient(to right, " + firstCol + "," + secCol + ");";

  css.innerHTML = firstCol + " , " + secCol;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function () {
  const randomCol1 = getRandomColor();
  const randomCol2 = getRandomColor();

  color1.value = randomCol1;
  color2.value = randomCol2;
  css.innerHTML = randomCol1 + " , " + randomCol2;
  body.style =
    "background: linear-gradient(to right, " +
    randomCol1 +
    "," +
    randomCol2 +
    ");";
});
