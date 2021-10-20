const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
// const filterAll = document.querySelector("div").i;

let addTaskHandler = function () {
  let taskInput = input.value;
  input.value = "";

  if (taskInput != "") {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskBtn = document.createElement("button");
    const taskBox = document.createElement("input");

    taskItem.appendChild(taskBox);
    taskBox.setAttribute("type", "checkbox");
    taskBox.setAttribute(
      "id",
      `statusBox${document.querySelectorAll("li").length}`
    );
    taskItem.appendChild(taskText);
    taskText.textContent = taskInput;
    taskItem.appendChild(taskBtn);
    taskBtn.textContent = "\u274C";
    task.appendChild(taskItem);

    // Here we use an addEventListener to delete a task
    taskBtn.addEventListener("click", function () {
      task.removeChild(taskItem);
    });

    // Here is use an addEventListener to each taskItem so
    // they can operate seperately.
    taskItem.addEventListener("click", statusCheckHandler);

    // localStorage.setItem(taskItem.toString, input);
  }

  input.focus();
};

let statusCheckHandler = (event) => {
  let text = event.target.parentElement.children[1];
  // Check if the checkbox is checked
  if (event.target.checked) {
    text.style.textDecoration = "line-through";
  } else {
    text.style.textDecoration = "none";
  }
};
let filterActiveHandler = (event) => {
  let active = event.target.parentElement.children[0];

  return active.checked.filter;
};

// Here we use an addEventListener for the button
button.addEventListener("click", addTaskHandler);

// Here we use an addEventListener for the Enter key
// The button eventListener above can be towards the top
// but the input eventListener cannot because it has to
// call the function.
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskHandler();
  }
});

// filterAll.addEventListener("click", (event) => {
//   console.log("Filter All");
// });
