/*-- GLOBAL CONSTANTS --*/
const taskInput = document.getElementById("task");
const addTaskBtn = document.getElementById("add-task");
const resetTasksListBtn = document.getElementById("delete-all-tasks");
const tasksList = document.getElementById("tasks-list");
const modalAlertMsg = document.getElementById("modal-alert-msg")
const closeAlertBtn = document.getElementById("close-alert-btn");

/*-- ADD TASK SCRIPTS --*/
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === 'ArrowRight') {
      addTask();
  }
});

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value.trim();
  
  if (task && !checkForDuplicate(task) && !null && !undefined){
      renderTask(task);
      taskInput.value = "";
  } else {
      showAlert();
  }
}

function checkForDuplicate(task) {
  const tasks = tasksList.getElementsByTagName('li');
  for (let i = 0; i < tasks.length; i++) {
    const existingTask = tasks[i].querySelector('.task-text').textContent.trim();
    if (existingTask === task) {
      return true;
    }
  }
  return false;
}

function renderTask(task){
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = task;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("task-checkbox");

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskText);
  tasksList.appendChild(taskItem);
  
  taskCheckbox.addEventListener("change", () => {
      taskText.classList.toggle("done");

      if(taskCheckbox.checked) {
      cheerUserUponCheckbox();
      }
  });
}

function cheerUserUponCheckbox() {
  const audioYes = new Audio("media/audio/yes.mp3");
  audioYes.play();
}

/*-- ALERT MSG MODAL SCRIPTS*/
function showAlert() {
  modalAlertMsg.classList.add('shake-modal');

  setTimeout(function() {
    modalAlertMsg.classList.remove('shake-modal');
  }, 500);

  modalAlertMsg.style.display = "flex";
}; //called in addTask()

closeAlertBtn.addEventListener('click', closeAlert);

function closeAlert() {
    modalAlertMsg.style.display = "none";
};

/*-- RESET BUTTON SCRIPTS*/
resetTasksListBtn.addEventListener('click', resetBtn);

function resetBtn() {
  if (resetConfirmation()) {
    clearTasksAndDisplayGif();
  }
}








