// problem : user interaction doesn't provide desired result.
// Solution: Add interactivity so that user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //#new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder =  document.getElementById("completed-tasks"); // incomplete-tasks
var completedTasksHolder = document.getElementById("incomplete-tasks");  // completed-tasks



// Add a new tasks
var addTask = function() {
  console.log("Add task ... New Task..");
  // when the button is pressed
  // Create a new list item with the text from #new-task:
  // in put (checkbox)
  // label
  // input (text)
  // button.edit
  // button.delete
  // each elements, needs modified and appended.
}


// Edit an existing task.
var editTask = function() {
   console.log("Edit tasks");
  // When the Edit button is pressed
  // if the class of the parent is .editMode
    // Switch from .editMode
    // label text become the input's value
  //else
    // Switch to .editMode
    // input value becomes the label's text

  // Toggle .editMode on the parent.
}


// Delete an exisiting task
var deleteTask = function() {
  console.log("Delete tasks...");
  // when the Delete button is pressed
  // Remove the parent list item from the ul.
}

// Mark a task as complete.
var taskCompleted = function() {
   console.log("Completed tasks");
  // When the checkbox is checked
  // Append the task list item to the #completed-tasks
}


// Mark task as incomplete
var taskIncomplete = function(){
   console.log("Incomplete tasks");
  // when the checbox is unchecked
  // Append the tasks list item to the #incomplet-tasks
}

var bindTaskEvents = function (taskListItem, checkboxEventHandler) {
  console.log("Bind list item events")
  // select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");


    // bind editTask to edit button
    editButton.onclick = editTask;
    // bind deleteTask to the delete button
    deleteButton.onclick = deleteTask;
    // bind checkboxEventHandler to checkbox
    checkBox.onchange = checkboxEventHandler;
}

// Set the click handler to the addTask function
addButton.onclick = addTask;



// cycle over incompleteTasksHolder ul list items
for ( var i=0;  i < incompleteTasksHolder.children.length; i++ ) {
  // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

// cycle over completeTasksHolder ul list items
for ( var i=0;  i < incompleteTasksHolder.children.length; i++ ) {
  //bind events to list item's children (taskInCompleted)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}














