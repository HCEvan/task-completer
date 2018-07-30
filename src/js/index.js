$(document).ready(() => {
    //if any tasks in storage then create a task table and loop through each task, appending as a row to task table.
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks !== null) { 
        createTaskTable();
        for (i = 0; i < storedTasks.length; i++) {
            createRow(storedTasks[i].task, storedTasks[i].date)
        }
    }
});

/************* VARIABLES *************/
const addTaskForm = document.querySelector('#addTaskForm');

/**************************************************************/

/************* FUNCTIONS *************/
const appendDOM = (parent, child) => (parent.appendChild(child));

const createTaskTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const taskHead = document.createElement('th');
    const taskHeadNode = document.createTextNode("Task");
    const dateHead = document.createElement('th');
    const dateHeadNode = document.createTextNode("Date");
    const removeHead = document.createElement('th');

    table.id = 'taskTable'

    appendDOM(document.querySelector('#taskSection'), table);
    appendDOM(table, tableHeader);
    appendDOM(tableHeader, taskHead);
    appendDOM(taskHead, taskHeadNode);
    appendDOM(tableHeader, dateHead);
    appendDOM(dateHead, dateHeadNode);
    appendDOM(tableHeader, removeHead);
};

const createRow = (userInput, date) => {
    
    !document.querySelector('#taskTable') && createTaskTable();

    const row = document.createElement('tr');
    const taskCell = document.createElement('td');
    const taskCellNode = document.createTextNode(userInput);
    const dateCell = document.createElement('td');
    const dateCellNode = document.createTextNode(date);
    const removeCell = document.createElement('td');
    
    const removeBtn = document.createElement('input');
    removeBtn.type = 'button';
    removeBtn.value = 'Remove';
    removeBtn.addEventListener('click', () => {
        removeTask(userInput, row)
    });
    
    appendDOM(document.querySelector('#taskTable'), row);
    appendDOM(row, taskCell);
    appendDOM(taskCell, taskCellNode);
    appendDOM(row, dateCell);
    appendDOM(dateCell, dateCellNode);
    appendDOM(row, removeCell);
    appendDOM(removeCell, removeBtn);

};

const saveToStorage = (userInput, date) => {
    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
        var tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
        var tasks = []
    }
    tasks.push({
        task: userInput,
        date: date
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage);
};

const removeTask = (task, taskRow) => {	
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const table = document.querySelector('#taskTable');
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].task === task) {
            tasks.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };
    };
    table.children.length > 2 ? taskRow.parentNode.removeChild(taskRow) : table.parentNode.removeChild(table);
};

/**************************************************************/

/************* EVENTS *************/
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('#userInput').value;
    const date = Date();
    if (userInput) {
        createRow(userInput, date);
        saveToStorage(userInput, date);
    } else {
        alert('Please enter a task.');
    }

/**************************************************************/
});

