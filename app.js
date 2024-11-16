let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyCode = document.querySelector(".copyCode");
let rgb1 = "#5C91E5";
let rgb2 = "#983FC6";

// Function to generate a random hex color
let hexcode = () => {
  let my_hexValue = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + my_hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Change background and button text when clicking the first button
let hexValue1 = () => {
  rgb1 = hexcode();
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn1.innerHTML = rgb1;
  btn1.style.backgroundColor = rgb1;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

// Change background and button text when clicking the second button
let hexValue2 = () => {
  rgb2 = hexcode();
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn2.innerHTML = rgb2;
  btn2.style.backgroundColor = rgb2;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

// Event listener for copying text
copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Copied the text: " + copyCode.innerText);
});

// Add event listeners to change background and button text
btn1.addEventListener("click", hexValue1);
btn2.addEventListener("click", hexValue2);
