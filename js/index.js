const submitBtn = document.querySelector('#submitBtn');
const taskTable = document.querySelector('#taskTable');

submitBtn.addEventListener('click', function() {
	userInput = document.querySelector('#userInput').value;
	if (userInput == "") {
		alert("Please enter a task.");
	} else {
		newRow = taskTable.insertRow(); //create table row
		console.log("Row Created.");
	
		taskCell = newRow.insertCell();
		taskCell.textContent = userInput;
		taskCell.classList.add('taskFlex');	//create task cell in new row and set its content = to userInput

		dateCell = newRow.insertCell();
		date = new Date();
		dateCell.textContent = date;
		dateCell.classList.add('dateFlex');

		removeCell = newRow.insertCell();
		removeBtn = document.createElement('BUTTON');
		btnText = document.createTextNode('Remove Task');
		removeBtn.classList.add('btn');
		removeBtn.classList.add('btn-danger');
		
		removeBtn.appendChild(btnText);
		removeCell.appendChild(removeBtn);
		removeCell.classList.add('removeFlex');
		
		removeBtn.addEventListener('click', function() {
			this.parentNode.parentNode.remove();
			console.log("Row Deleted.");
		});
	}
});