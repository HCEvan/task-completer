$(document).ready(() => {
    
    // Functions
    const createTable = () => {
       const table = document.createElement('table');
       document.querySelector('#taskTable').appendChild(table);
       table.id = 'table';
       
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
        taskRow.class = "taskRow";
        table.appendChild(taskRow);

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
                console.log("Task Removed.");
            } else {
                table.parentNode.removeChild(table);
                console.log("Table removed.");
            }
        
        });
    };

// ***********************************************************************************************************

    // Log any saved tasks if present in localStorage
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks !== null) {
        !document.querySelector('#table') && createTable();
        for (i = 0; i < storedTasks.length; i++) {
            console.log(`TASKS IN STORAGE - [${i}]: ${storedTasks[i].task}, ${storedTasks[i].date}`);
        }
    } else {
        console.log("2: No tasks in local storage.");
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
            !document.querySelector('#table') && createTable();
            newTask(input, new Date());
            
            // store all tasks in localStorage
            let tasks = [];
            const table = document.querySelector('#table');
            
            
            
            
            for (i = 1; i < table.children.length; i++) {
                if (storedTasks.children[i].textContent.indexOf(table.children[i].children[0].textContent) < 0) {
                    continue;
                } else {
                    tasks.push({
                        task: table.children[i].children[0].textContent,
                        date: table.children[i].children[1].textContent
                    })
                }
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));



        }
    }); // end of event
});  //end of $(document).ready