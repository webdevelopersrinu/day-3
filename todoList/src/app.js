let listOfTodos = document.getElementById("list-of-todos");
let dotoInput = document.getElementById("doto");
let dotoAddBtn = document.getElementById("doto-add-btn");

const classListData = ["border", "px-4", "py-2", "rounded-full", "shadow-lg"];
dotoAddBtn.addEventListener("click", () => {
  if (dotoInput.value === "") {
    alert("Enter your todo");
  } else {
    const myLi = document.createElement("li");
    const todoText = dotoInput.value;
    myLi.setAttribute("data-todo", todoText);
    myLi.innerText = dotoInput.value;
    myLi.id = Date.now();
    myLi.classList.add(
      ...classListData,
      "flex",
      "items-center",
      "justify-between",
      "gap-3"
    );
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    editBtn.classList.add(...classListData);
    removeBtn.classList.add(...classListData);
    editBtn.addEventListener("click", (e) => {
      const liElement = e.target.parentElement;
      const originalTodo = liElement.getAttribute("data-todo"); // Retrieve todo from data attribute
      dotoInput.value = originalTodo;
      liElement.remove();
    });
    removeBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    editBtn.innerText = "edit";
    removeBtn.innerText = "remove";
    myLi.appendChild(editBtn);
    myLi.appendChild(removeBtn);

    listOfTodos.appendChild(myLi);
    dotoInput.value = "";
  }
});
