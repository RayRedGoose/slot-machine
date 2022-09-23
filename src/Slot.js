class Slot {
  constructor() {
    this.names = [
      new Name("Raisa"),
      new Name("James"),
      new Name("Will"),
      //   new Name("Alan"),
      new Name("Josh"),
      new Name("Manny"),
      //   new Name("My"),
      new Name("Nicholas"),
      new Name("Jaclyn"),
      //   new Name("Justin"),
      //   new Name("Anisha"),
      //   new Name("Nor"),
    ];

    this.availableMembers = this.filterAvailable(this.names);
  }

  chooseRandomName() {
    const members = this.availableMembers;
    const randomInd = Math.floor(Math.random() * members.length);
    return members.length ? members.splice(randomInd, 1)[0] : { name: "Done" };
  }

  updateMemberAvailability = (value, id) => {
    const updated = this.availableMembers.map((member) =>
      id === member.id ? member.changeAvailability(value) : member
    );

    this.availableMembers = this.filterAvailable(updated);
  };

  filterAvailable(arr) {
    return arr.filter((name) => name.available);
  }

  renderAllNames() {
    const block = document.querySelector("#all-names");
    this.names.forEach((name) => {
      const ch = name.renderCheckbox(this.updateMemberAvailability);
      block.appendChild(ch);
    });
  }

  renderChosenName() {
    const block = document.querySelector("#chosen-name");
    const { name } = this.chooseRandomName();
    block.innerText = name;
    return name.toLowerCase();
  }
}
