const form = document.querySelector('#taskForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#userInput').value;

    const createTask = () => {
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
            }

            const taskRow = document.createElement('tr');
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
            removeBtn.addEventListener('click', () => {
                if (table.children.length > 2) {
                    taskRow.parentNode.removeChild(taskRow);
                } else {
                    table.parentNode.removeChild(table);
                }
            });


        };
    };
    createTask();
});