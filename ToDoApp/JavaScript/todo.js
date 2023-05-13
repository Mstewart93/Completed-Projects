//collects the input
function get_todos() {
    //array of tasks inputed
    var todos = new Array;
    //this pulls the task that was saved in the memory
    var todos_str = localStorage.getItem('todo');
    //if input is not null then JSON will communicate with the web to make the task an object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//tis function adds the inputed task to the get todos function array
function add() {
var task = document.getElementById('task').value;

var todos = get_todos();
//this adds  a new task at the END fo the array
todos.push(task);
//concerst task input to a JSON string
localStorage.setItem('todo', JSON.stringify(todos));
document.getElementById("task").value="";
show();
return false;
}

//this keeps tasks on the screen
function show() {
    //sets the task as a variable
    var todos = get_todos();

    //sets up each task as unordered list
    var html = '<ul>';
    //this displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // this also displays the task as a list and creates the button with th "x"
        html += '<li>' + todos[i] + '<button class="remove" id=" ' + i + ' ">x</button></li>';

    };
    html += '</ul>';
    //this displyasthe task as a list 
    document.getElementById('todos').innerHTML = html;

}

//this displays the task when the 'Add item' button is clicked
document.getElementById('add').addEventListener('click', add);
//this will keep the inputs displayed on screen
show();