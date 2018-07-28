$(document).ready(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks.length > 0) {
        for (i = 0; i < storedTasks.length; i++) {
            console.log(`Task: ${storedTasks[i].task}, Task Date: ${storedTasks[i].date}`)
        }
    }
});

const form = document.querySelector('#taskForm');
const tasks = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#userInput').value;
    if (input.length === 0) {
        alert("Please insert a task.");
    } else  { 
        if (!document.querySelector('#table')) {
            const table = document.createElement('table');
            document.querySelector('#taskTable').appendChild(table);
            table.id = 'table';
           
            console.log('Table created.');
            
            const tableRow = document.createElement('tr');
            tableRow.id = 'tableRow';
            table.appendChild(tableRow);
            
            const taskHead = document.createElement('th');
            tableRow.appendChild(taskHead);
            const taskNode = document.createTextNode("Task");
            taskHead.appendChild(taskNode);

            const dateHead = document.createElement('th');
            tableRow.appendChild(dateHead);
            const dateNode = document.createTextNode("Date");
            dateHead.appendChild(dateNode);

            const removeHead = document.createElement('th');
            tableRow.appendChild(removeHead);
        };

        // add task to table
        const taskRow = document.createElement('tr');
        taskRow.id = "taskRow";
        table.appendChild(taskRow);
        taskRow.class = "taskRow";

        const taskText = document.createElement('td');
        taskRow.appendChild(taskText);
        const taskNode = document.createTextNode(input);
        taskText.appendChild(taskNode);

        const dateText = document.createElement('td');
        taskRow.appendChild(dateText);
        const dateNode = document.createTextNode(new Date());
        dateText.appendChild(dateNode);

        const removeText = document.createElement('td');
        taskRow.appendChild(removeText);
        const removeBtn = document.createElement('button');
        removeText.appendChild(removeBtn).appendChild(document.createTextNode('Delete'));
        removeBtn.addEventListener('click', () => (table.children.length > 2
            ?
            taskRow.parentNode.removeChild(taskRow)
            :
            table.parentNode.removeChild(table))); 
            

        // store all tasks in localStorage
        for (i = 1; i < table.children.length; i++) {
            tasks.push({
                task: table.children[i].children[0].textContent,
                date: table.children[i].children[1].textContent
                });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };
        newTasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(`Task: ${newTasks[0].task}`);
        console.log(`Date: ${newTasks[0].date}`);

    }; // end of else statement
            

});
