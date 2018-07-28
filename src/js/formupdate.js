const form = document.querySelector('#taskForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#userInput').value;

    const createTask = () => {
        if (input.length === 0) {
            alert("Please insert a task.");
        } else if (!document.querySelector('#table')) {
            const table = document.createElement('table');
            const tableRow = document.createElement('tr');
            
            const taskHead = document.createElement('th');
            const taskNode = document.createTextNode("Task");

            const dateHead = document.createElement('th');
            const dateNode = document.createTextNode("Date");

            const removeHead = document.createElement('th');
            const removeNode = document.createTextNode("Remove");
            
            table.appendChild(tableRow);
    
            tableRow.appendChild(taskHead);
            taskHead.appendChild(taskNode);

            tableRow.appendChild(dateHead);
            dateHead.appendChild(dateNode);

            tableRow.appendChild(removeHead);
            removeHead.appendChild(removeNode);
            

            document.querySelector('#taskTable').appendChild(table);
        } else {

        }
    };
    console.log('Table created.');
    createTask();
})