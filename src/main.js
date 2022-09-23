const runBtn = document.querySelector("#run-btn");

const slot = new Slot();

slot.renderAllNames();

runBtn.addEventListener("click", () => {
  const id = slot.renderChosenName();

  const label = document.querySelector(`label[for=${id}]`);
  const input = document.querySelector(`#${id}`);
  input.disabled = true;
  label.style.textDecoration = "line-through";

  if (slot.availableMembers < 2) {
    runBtn.disabled = true;
    runBtn.classList.add("hidden");
  }
});
