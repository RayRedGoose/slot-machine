const popup = document.querySelector(".names-popup");
const addNameForm = document.querySelector(".names-popup > form");

const runBtn = document.getElementById("run-btn");
const openPopupBtn = document.getElementById("open-popup-btn");
const closePopupBtn = popup.querySelector("header > button");

window.addEventListener("load", () => {
  slot = new Slot();
  slot.getFromStorage();
  slot.renderAllMembers();
});

closePopupBtn.addEventListener("click", () => {
  popup.style.left = "-10000px";
});

openPopupBtn.addEventListener("click", () => {
  popup.style.left = "1rem";
});

runBtn.addEventListener("click", () => {
  const id = slot.renderChosenMember();

  if (id) {
    const label = document.querySelector(`label[for=${id}]`);
    const input = document.querySelector(`#${id}`);
    input.disabled = true;
    label.style.textDecoration = "line-through";
  } else {
    runBtn.disabled = true;
    runBtn.classList.add("hidden");
  }
});

addNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const addedName = event.target.elements.name.value;
  if (addedName) slot.pushMember(addedName);
  event.target.elements.name.value = "";
});
