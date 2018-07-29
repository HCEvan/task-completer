$(document).ready(() => {
    
    // Log any saved tasks if present in localStorage
    (() => {

        let tasks = JSON.parse(localStorage.getItem('tasks'));

        // Check if tasks exist in localStorage
        if (!tasks) {
            console.log('No tasks in localStorage');
            localStorage.setItem('tasks', '[]');
        } else {
            for (i = 0; i < tasks.length; i++) {
                console.log(`Tasks in localStorage - [${i}]: ${tasks[i].task}, ${tasks[i].date}`);
            }
        }
    })();
    

// ***********************************************************************************************************

    // Functions
    const createTable = () => {
       const table = document.createElement('table');
       document.querySelector('#taskTable').appendChild(table);
       table.id = 'table';
       
       const tableRow = document.createElement('tr');
       const taskHead = document.createElement('th');
       const taskNode = document.createTextNode("Task");
       const dateHead = document.createElement('th');
       const dateNode = document.createTextNode("Date");
       const removeHead = document.createElement('th');
       
       tableRow.id = 'tableRow';
       table.appendChild(tableRow);
       tableRow.appendChild(taskHead);
       taskHead.appendChild(taskNode);
       tableRow.appendChild(dateHead);
       dateHead.appendChild(dateNode);
       tableRow.appendChild(removeHead);
    };

    const newTask = (task, date) => {
        const taskRow = document.createElement('tr');
        const taskText = document.createElement('td');
        const taskNode = document.createTextNode(task);
        const dateText = document.createElement('td');
        const dateNode = document.createTextNode(date);
        
        taskRow.class = "taskRow";

        table.appendChild(taskRow);
        taskRow.appendChild(taskText);
        taskText.appendChild(taskNode);
        taskRow.appendChild(dateText);
        dateText.appendChild(dateNode);

        //Add new task to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push({
            task: task,
            date: date
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        //Remove task when Delete button is clicked.
        const removeText = document.createElement('td');
        const removeBtn = document.createElement('button');
        
        taskRow.appendChild(removeText);
        removeText.appendChild(removeBtn).appendChild(document.createTextNode('Delete'));
        removeBtn.addEventListener('click', () => {
            
            //Remove task from LocalStorage
            for (i = 0; i < tasks.length; i++) {
                if (tasks[i].task === task) {
                    tasks.splice(i, 1);
                    console.log(tasks);
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    break;
                };
            }
            
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

    // Form Submit
    const form = document.querySelector('#taskForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#userInput').value;

        if (!input.length) {
            alert("Please insert a task.");
        } else {
            !document.querySelector('#table') && createTable();
            newTask(input, new Date());
        }
    }); // end of event
});  //end of $(document).ready