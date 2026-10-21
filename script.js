document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keypadGrid = document.querySelector(".keypad-grid");
  const video = document.getElementById("movie");
  
  const CORRECT_PIN = "3384"; 
  const MAX_DIGITS = 4;

  display.type = "password"; 

  keypadGrid.addEventListener("click", (event) => {
    if (!event.target.classList.contains("key-btn")) return;

    const action = event.target.value;
    let currentValue = display.value;

    if (action === "clear") {
      resetKeypad();
    } else if (action === "back") {
      if (!display.disabled) {
        display.value = currentValue.slice(0, -1);
      }
    } else {
      if (currentValue.length < MAX_DIGITS) {
        currentValue += action;
        display.value = currentValue;

        if (currentValue.length === MAX_DIGITS) {
          checkPIN(currentValue);
        }
      }
    }
  });

  function checkPIN(enteredPin) {
    if (enteredPin === CORRECT_PIN) {
      display.style.background = "#2b542c";
      alert("Access Granted!");
      video.style.display = "block";
    } else {
      display.style.background = "#c9302c";
      display.disabled = true;
      
      setTimeout(() => {
        alert("Incorrect PIN! Try again.");
        resetKeypad();
      }, 300);
    }
  }

  function resetKeypad() {
    display.value = "";
    display.style.background = "#333";
    display.disabled = false;
  }
});
