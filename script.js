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

