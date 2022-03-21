import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const createCompleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;
  p.className = "item-name";

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const backTarget = backButton.parentNode.parentNode;
    const inputText = backButton.parentNode.firstElementChild.innerText;
    deleteFromCompleteList(backTarget);
    createIncomleteList(inputText);
  });
  div.appendChild(p);
  div.appendChild(backButton);
  li.appendChild(div);
  document.getElementById("complete-list").appendChild(li);
};

const createIncomleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;
  p.className = "item-name";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;
    const inputText = completeButton.parentNode.firstElementChild.innerText;
    deleteFromIncompleteList(completeTarget);
    createCompleteList(inputText);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
