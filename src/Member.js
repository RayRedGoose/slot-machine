class Member {
  constructor(name, uniq) {
    this.id = `${name.toLowerCase()}-${uniq}`;
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
        <input type="checkbox" name="list" id="${this.id}"/>
        <label for="${this.id}">${this.name}</label>
    `;
    const input = nameLine.querySelector("input");
    input.checked = this.available;
    input.addEventListener("change", (e) => {
      this.changeAvailability(e.target.checked);
      fn(e.target.checked, this.id);
    });

    return nameLine;
  }
}
