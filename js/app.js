// Problem: user interaction doesn't provide desired result.
// Solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; // first button add
var incompleteTasksHolder = document.getElementById("incomplete-tasks") // incomplete-tasks
var completedTasksHolder; document.getElementById("completed-tasks") // completed-tasks.
// Add a new tasks
var addTask = function() {
  //when the button is pressed
    //Create a new list item with the text from #new-task:
    // input (checkbox)
    // label
    // input (text - when editing)
    // button.edit
    // button.delete
    // Each elements, needs modified and appended.
}


// Edit an existing tasks
var editTask = function() {
 // When the edit button is pressed
 // if the class of th eparent is .editMode
  // switch from .editMode
  // label text become the input's value
// else
  // switch to .editMode
  // input value becomes the label's text

 // Toggle .editMode
}


// Delete an existing task
var deleteTask = function() {
  // when the Delete button is pressed
  // Remove the parent list item from the ul
  //
}
// Mark a Task as complete
var taskCompleted = function() {
  // when the Checkbox is checked
    // Append the task list item to the #completed-tasks
}


// Mark a task as Incomplete
var taskIncomplete = function() {
  // when the checkbox is checked
  // Append the task list item to the #incompleted-tasks
}








