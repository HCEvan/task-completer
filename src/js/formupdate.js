$(document).ready(() => {
    
    // Functions
    const createTable = () => {
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

    const newTask = (task, date) => {
        const taskRow = document.createElement('tr');
        taskRow.id = "taskRow";
        table.appendChild(taskRow);
        taskRow.class = "taskRow";

        console.log("Task Created.");

        const taskText = document.createElement('td');
        taskRow.appendChild(taskText);
        const taskNode = document.createTextNode(task);
        taskText.appendChild(taskNode);

        const dateText = document.createElement('td');
        taskRow.appendChild(dateText);
        const dateNode = document.createTextNode(date);
        dateText.appendChild(dateNode);

        const removeText = document.createElement('td');
        taskRow.appendChild(removeText);
        const removeBtn = document.createElement('button');
        removeText.appendChild(removeBtn).appendChild(document.createTextNode('Delete'));
        
        removeBtn.addEventListener('click', () => { // remove task from table and local storage
            if (table.children.length > 2) {
                taskRow.parentNode.removeChild(taskRow);
            } else {
                table.parentNode.removeChild(table);
            }
        
        });
    };

// ***********************************************************************************************************

    // Display saved tasks if any in localStorage
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(storedTasks);
    if (storedTasks !== null) {
        for (i = 0; i < storedTasks.length; i++) {
            if (!document.querySelector('#table')) {
                createTable();
            }
            newTask(storedTasks[i].task, storedTasks[i].date);
        }
    } else {
        console.log("No tasks in local storage.");
    }

// ***********************************************************************************************************

    // Form Submit
    const form = document.querySelector('#taskForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#userInput').value;

        if (input.length === 0) {
            alert("Please insert a task.");
        } else { 
            
            if (!document.querySelector('#table')) {
                createTable();
            }
            newTask(input, new Date()); // add row to table for a new task
            
            // store all tasks in localStorage
            let tasks = [];
            const table = document.querySelector('#table');
            tasks = JSON.parse(localStorage.getItem('tasks'));
            for (i = 1; i < table.children.length; i++) {
                    console.log(table.children[i].children[0].textContent);
            
                // tasks += {
                //     task: table.children[i].children[0].textContent,
                //     date: table.children[i].children[1].textContent
                // };

                // localStorage.setItem('tasks', JSON.stringify(tasks));
            };

        }
    }); // end of event
});  //end of $(document).ready