const btnAdd = document.querySelector(".btn-add");
const btnRemove = document.querySelector(".btn-remove");
const divContainer = document.getElementById("div-container");
const mainInput = document.querySelector(".main-input"); // Ensure this exists in your HTML
let lastAddedText = "";

btnAdd.addEventListener("click", addNew);

btnRemove.addEventListener("click", () => {
  const lastDiv = divContainer.lastElementChild;
  if (lastDiv) {
    divContainer.removeChild(lastDiv);
  }
});

function addNew() {
  const inputValue = mainInput.value.trim();
  if (inputValue === "") {
    alert("Please enter some text");
    return;
  }

  // Creation of the new div with its contents
  const newDiv = document.createElement("div");
  newDiv.classList.add("div-shadow");
  divContainer.appendChild(newDiv);

  const innerHeading = document.createElement("h3");
  innerHeading.classList.add("inner-heading");
  innerHeading.textContent = inputValue;
  newDiv.appendChild(innerHeading);
  mainInput.value = "";

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.classList.add("inputText");
  newDiv.appendChild(inputText);

  // Adding the internal 'Add' button
  const innerBtn = document.createElement("button");
  innerBtn.textContent = "Add";
  innerBtn.classList.add("inner-btn");
  newDiv.appendChild(innerBtn);

  innerBtn.addEventListener("click", function () {
    const inputTextValue = inputText.value.trim();
    if (inputTextValue === "") {
      alert("Please enter some text");
      return;
    }

    if (inputTextValue === lastAddedText) {
      alert("You have already added this text");
      return;
    }

    let heading = document.createElement("h5");
    heading.classList.add("inner-text");
    heading.textContent = inputTextValue;
    newDiv.appendChild(heading);
    lastAddedText = inputTextValue;
    inputText.value = "";
  });

  // Adding the internal 'Remove' button
  const innerRemoveBtn = document.createElement("button");
  innerRemoveBtn.textContent = "Remove";
  innerRemoveBtn.classList.add("inner-remove-btn");
  newDiv.appendChild(innerRemoveBtn);

  innerRemoveBtn.addEventListener("click", function () {
    let headings = newDiv.querySelector(".inner-text");
    if (headings) {
      headings.remove();
      lastAddedText = "";
    }
  });
}
