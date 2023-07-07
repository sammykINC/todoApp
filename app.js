const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");

function addTask() {
  if (inputBox.value == '') {
    document.querySelector(".error").style.display = "block";
    // document.querySelector(".fadeInBottom").style.animation = "none";
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);


    document.querySelector(".error").style.display = "none";    
  }
  inputBox.value = '';
  dataStorage();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    dataStorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    dataStorage();
  }


  document.querySelector(".error").style.display = "none";
}, false);

function dataStorage() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();