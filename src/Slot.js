class Slot {
  constructor() {
    this.members = [];
    this.availableMembers = [];
  }

  setMembers(members) {
    this.members = members.map((member, ind) => new Member(member, ind));
    this.availableMembers = this.getAllAvailable(this.members);
  }

  pushMember(member) {
    this.members.push(new Member(member, Date.now()));
    this.renderAllMembers();
    this.saveToStorage();
  }

  chooseRandomMember() {
    const members = this.availableMembers;
    const randomInd = Math.floor(Math.random() * members.length);
    return members.length ? members.splice(randomInd, 1)[0] : { name: "Done" };
  }

  updateMemberAvailability = (value, id) => {
    this.availableMembers = !value
      ? this.removeUnavailable(id)
      : this.addAvailable(id);
  };

  addAvailable = (memberId) => {
    const member = this.members.find(({ id }) => id === memberId);
    if (member) this.availableMembers.push(member);
  };

  removeUnavailable = (memberId) => {
    return this.availableMembers.filter(({ id }) => memberId !== id);
  };

  getAllAvailable(arr) {
    return arr.filter((member) => member.available);
  }

  saveToStorage() {
    localStorage.setItem(
      "memberNames",
      this.members.map((member) => member.name)
    );
  }

  getFromStorage() {
    const names = localStorage.getItem("memberNames");
    if (names) {
      this.setMembers(names.split(","));
    }
  }

  renderAllMembers() {
    const block = document.querySelector("#all-names");
    block.innerText = "";
    this.members.forEach((member) => {
      const ch = member.renderCheckbox(this.updateMemberAvailability);
      block.appendChild(ch);
    });
  }

  renderChosenMember() {
    const block = document.querySelector("#chosen-name");
    const { name, id } = this.chooseRandomMember();
    block.innerText = name;
    return id;
  }
}
