const preview = document.getElementById("background-preview");
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const gradientTypeSelect = document.getElementById("gradient-type");
const generateCodeButton = document.getElementById("generate-code");
const cssCodeTextarea = document.getElementById("css-code");

function updateBackground() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const gradientType = gradientTypeSelect.value;
  let gradientString;

  if (gradientType === "linear") {
    gradientString = `linear-gradient(to right, ${color1}, ${color2})`;
  } else if (gradientType === "radial") {
    gradientString = `radial-gradient(circle, ${color1}, ${color2})`;
  }

  preview.style.background = gradientString;
}

color1Input.addEventListener("input", updateBackground);
color2Input.addEventListener("input", updateBackground);
gradientTypeSelect.addEventListener("change", updateBackground);

generateCodeButton.addEventListener("click", () => {
  const backgroundStyle = preview.style.background;
  cssCodeTextarea.value = `background: ${backgroundStyle};`;
});

updateBackground();
