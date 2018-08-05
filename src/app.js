require('./styling/main.scss');

$(document).ready(() => {
    //if any tasks in storage then create a task table and loop through each task, appending as a row to task table.
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks !== null) { 
        createTaskTable();

        storedTasks.map(task => createRow(task.task, task.date));
    }
});

/************* VARIABLES *************/
const addTaskForm = document.querySelector('#addTaskForm');

/**************************************************************/

/************* FUNCTIONS *************/
const appendDOM = (parent, child) => parent.appendChild(child);

const createTaskTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const taskHead = document.createElement('th');
    const taskHeadNode = document.createTextNode("Task");
    const dateHead = document.createElement('th');
    const dateHeadNode = document.createTextNode("Date");
    const removeHead = document.createElement('th');
    const removeHeadNode = document.createTextNode("Clear");

    removeHead.addEventListener('click', () => {
        localStorage.setItem('tasks', JSON.stringify(null));

        table.parentElement.removeChild(table);
    });

    table.id = 'taskTable';

    table.classList.add('table-section__table');
    tableHeader.classList.add('table-section__table__head-row');
    taskHead.classList.add('table-section__table__head-row__task');
    dateHead.classList.add('table-section__table__head-row__date');
    removeHead.classList.add('table-section__table__head-row__remove');

    appendDOM(document.querySelector('#taskSection'), table);
    appendDOM(table, tableHeader);
    appendDOM(tableHeader, taskHead);
    appendDOM(taskHead, taskHeadNode);
    appendDOM(tableHeader, dateHead);
    appendDOM(dateHead, dateHeadNode);
    appendDOM(tableHeader, removeHead);
    appendDOM(removeHead, removeHeadNode);
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
    removeBtn.value = 'X';
    removeBtn.addEventListener('click', () => {
        removeTask(userInput, row)
    });
    
    row.classList.add('table-section__table__task-row');
    taskCell.classList.add('table-section__table__task-row__task');
    dateCell.classList.add('table-section__table__task-row__date');
    removeCell.classList.add('table-section__table__task-row__remove');
    removeBtn.classList.add('table-section__table__task-row__remove__button');


    appendDOM(document.querySelector('#taskTable'), row);
    appendDOM(row, taskCell);
    appendDOM(taskCell, taskCellNode);
    appendDOM(row, dateCell);
    appendDOM(dateCell, dateCellNode);
    appendDOM(row, removeCell);
    appendDOM(removeCell, removeBtn);
};

const saveToStorage = (userInput, date) => {
    let tasks = [];

    if (JSON.parse(localStorage.getItem('tasks')) !== null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push({
        task: userInput,
        date: date
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    // @todo Remove this shiz.
    console.log(localStorage);
};

const removeTask = (task, taskRow) => {
    const table = document.querySelector('#taskTable');

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task === task) {
            tasks.splice(i, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    if (table.children.length > 2) {
        taskRow.parentElement.removeChild(taskRow)
    } else {
        table.parentElement.removeChild(table);

        localStorage.setItem('tasks', JSON.stringify(null));
    }
};

/**************************************************************/

/************* EVENTS *************/
addTaskForm.addEventListener('submit', e => {
    e.preventDefault();

    const date = new Date().getFullYear();

    let userInput = document.querySelector('#userInput').value;

    if (userInput && userInput.length <= 140) {
        createRow(userInput, date);

        saveToStorage(userInput, date);

        document.querySelector('#userInput').value = "";
    } else {
        alert('Please enter a task (Max 140 characters).');
    }

/**************************************************************/
});

