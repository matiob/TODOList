window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-button");
  const input = document.querySelector(".input");
  const container = document.querySelector(".container");

  class Item {
    constructor(itemName) {
      this.createDiv(itemName);
    }

    createDiv(itemName) {
      const input = document.createElement("input");
      input.value = itemName;
      input.disabled = true;
      input.classList.add("item-input");
      input.type = "text";

      const itemBox = document.createElement("div");
      itemBox.classList.add("item");

      const editButton = document.createElement("button");

      editButton.innerHTML = '<i class="fas fa-lock"></i>';
      editButton.classList.add("edit-button");

      const removeButton = document.createElement("button");
      removeButton.innerHTML = '<i class="fas fa-trash"></i>';
      removeButton.classList.add("remove-button");

      container.appendChild(itemBox);

      itemBox.appendChild(input);
      itemBox.appendChild(editButton);
      itemBox.appendChild(removeButton);

      editButton.addEventListener("click", function () {
        input.disabled = !input.disabled;
        if (input.disabled) {
          editButton.innerHTML = '<i class="fas fa-lock"></i>';
        } else {
          editButton.innerHTML = '<i class="fas fa-lock-open"></i>';
        }
      });

      removeButton.addEventListener("click", function () {
        itemBox.remove();
      });
    }
  }

  function check() {
    if (input.value != "") {
      new Item(input.value);
      input.value = "";
    }
  }

  addButton.addEventListener("click", check);
  window.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
      check();
    }
  });
});
