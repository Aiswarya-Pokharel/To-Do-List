const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
function add() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function displayTask() {
  list.innerHTML = localStorage.getItem("data");
}
displayTask();

document.querySelector(".clear").addEventListener("click", clear);
function clear() {
  let listAll = document.querySelectorAll("li");
  for (let i = 0; i <= 15; i++) {
    listAll[i].remove();
  }
}
