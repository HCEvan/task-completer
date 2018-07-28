

// Creating Task on button 'add'.
const submitBtn = document.querySelector('#submitBtn');
const taskTable = document.querySelector('#taskTable');

submitBtn.addEventListener('click', function() {
	userInput = document.querySelector('#userInput').value;
	if (userInput == "") {
		alert("Please enter a task.");
	} else {

		const newRow = taskTable.insertRow(); //create table row
		console.log("Row Created.");

		const taskCell = newRow.insertCell();
		taskCell.textContent = userInput;
		taskCell.classList.add('taskFlex');	//create task cell in new row and set its content equal to userInput
		console.log("Task Column Created.");

		const dateCell = newRow.insertCell();
		const date = new Date();
		dateCell.textContent = date;
		dateCell.classList.add('dateFlex');
		console.log("Date Column Created.");

		const removeCell = newRow.insertCell();
		const removeBtn = document.createElement('BUTTON');
		const btnText = document.createTextNode('Remove Task');
		removeBtn.classList.add('btn');
		removeBtn.classList.add('btn-danger');
		console.log("Remove Column Created.");

		removeBtn.appendChild(btnText);
		removeCell.appendChild(removeBtn);
		removeCell.classList.add('removeFlex');

		removeBtn.addEventListener('click', function() {
			this.parentNode.parentNode.remove();
			console.log("Row Deleted.");
		});

		console.log("Task Creation Complete.");

	}
});
