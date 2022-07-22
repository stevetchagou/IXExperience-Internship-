class Task {
    constructor(chores) {
        this.chores = chores;
    }
}

class userInterface {
    constructor() {
        this.taskInput = document.getElementById('task-input');
        this.addButton = document.getElementById('add-button');
        this.tableBody = document.getElementById('table-body');

        this.tasks = [];
    }

    eventListener() {
        this.addButton.addEventListener('click', (e) => {
            this.handleAddButton(e);

        })
    }

    handleAddButton(event) {
        const task = new Task(this.taskInput.value);
        this.tasks.push(task);

        this.taskInput.value = '';

        this.populateTasksTable();

    }

    populateTasksTable() {
        this.tableBody.innerHTML = '';

        for(let task of this.tasks) {
            const newRow = document.createElement('tr');

            const taskCell = document.createElement('td');
            const completedCell = document.createElement('td');
            const actionsCell = document.createElement('td');

            const completeButton = document.createElement('button');
            const notCompleteButton = document.createElement('button');

            taskCell.innerHTML = task.chores;
            completedCell.innerHTML = '';
            completeButton.innerHTML = 'Complete';
            notCompleteButton.innerHTML = 'Not Complete';
            


            //actionsCell.append(completeButton);

            completeButton.addEventListener('click', (e) => {
                completedCell.innerHTML = 'Complete';
            })

            notCompleteButton.addEventListener('click', (e) => {
                completedCell.innerHTML = 'Not Complete';
            })

            actionsCell.append(completeButton);
            actionsCell.append(notCompleteButton);

            newRow.append(taskCell);
            newRow.append(completedCell);
            newRow.append(actionsCell);

            this.tableBody.append(newRow);

            //taskCell.innerHTML = newTask.task;
        }
    }

}

const ui = new userInterface();
ui.eventListener();





/*addButton.addEventListener('click', (event) => {
    const task = taskInput.value;
    

    /*const newRow = document.createElement('tr');
    const taskCell = document.createElement('td');
    const askCell = document.createElement('td');
    const skCell = document.createElement('td');
    taskCell.innerHTML = task;
    askCell.innerHTML = task;
    skCell.innerHTML = task;
    //const taskCell = document.createElement('td');

    newRow.append(taskCell);
    tableBody.append(newRow);*/

