const task = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

displayTasks();

// Here we use this addEventListener for the + button
button.addEventListener("click", addTask);

// Here we use this addEventListener for the Enter key
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");

filterAll.addEventListener("click", displayTasks);
filterActive.addEventListener("click", displayTasks);
filterCompleted.addEventListener("click", displayTasks);

filterAll.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value].map((item) => ({
    id: item.id,
    checked: item.children[0].checked,
    task: item.children[1].innerHTML,
  }));

  // Calls this function to show all tasks
  countTasks(data.length);
  console.log(data);
});

filterActive.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      id: item.id,
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
    }))
    .filter((item) => !item.checked);

  // Calls this function to hide all completed tasks
  countTasks(data.length);
  console.log(data);
});

filterCompleted.addEventListener("click", (event) => {
  let value = document.querySelectorAll("li");

  let data = [...value]
    .map((item) => ({
      id: item.id,
      checked: item.children[0].checked,
      task: item.children[1].innerHTML,
    }))
    .filter((item) => item.checked);

  // Calls this function to hide all active tasks
  countTasks(data.length);

  console.log(data);
});

function countTasks(data) {
  if (data == 0) {
    document.getElementById("taskTotal").innerHTML = `${data} task`;
  } else {
    document.getElementById("taskTotal").innerHTML = `${data} tasks`;
  }
}
