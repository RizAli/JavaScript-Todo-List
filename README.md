# JavaScript To Do List

References:
```
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

http://www.w3.org/DOM/

```

1. Add functions(){} for the required functionality:

New tasks, Edit tasks, Delete Tasks, Completed and Incomplete Tasks.

```
// Add a new tasks
var addTask = function() {

}

// Edit an existing tasks
var editTask = function() {

}

// Delete an existing task
var deleteTask = function() {

}

// Mark a Task as complete
var taskCompleted = function() {

}


// Mark a task as Incomplete
var taskIncomplete = function() {

}
```

2. Add variables to store the selection of elements.

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById


https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
getting elements - first button
Events will be linked to the following elements
```
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; // first button add
var incompleteTasksHolder = document.getElementById("incomplete-tasks") // incomplete-tasks
var completedTasksHolder; document.getElementById("completed-tasks") // completed-tasks.

```





