let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (let item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "c") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screenValue);
        screenValue = screen.value; // allow chaining
      } catch {
        screen.value = "Error";
        screenValue = "";
      }
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
