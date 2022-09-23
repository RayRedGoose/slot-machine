class Name {
  constructor(name) {
    this.id = name;
    this.name = name;
    this.available = true;
  }

  changeAvailability(value) {
    this.available = value;
    return this;
  }

  renderCheckbox(fn) {
    const nameLine = document.createElement("div");
    nameLine.innerHTML = `
        <input type="checkbox" name="list" id="${this.name.toLowerCase()}"/>
        <label for="${this.name.toLowerCase()}">${this.name}</label>
    `;
    const input = nameLine.querySelector("input");
    input.checked = this.available;
    input.addEventListener("change", (e) => {
      this.changeAvailability(e.target.checked);
      fn(e.target.checked);
    });

    return nameLine;
  }
}
