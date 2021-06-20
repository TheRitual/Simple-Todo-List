{

    const tasks = [{
            content: "Taning",
            done: true,
        },
        {
            content: "Eat Dinner",
            done: false,
        },
    ]


    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? ' style="text-decoration: line-through"' : ''}>
                <button class="js-done">
                ${task.done ? '🥳' : '☹️'}
                </button>
                <button class="js-removeTaskButton">Remove</button>
                ${task.content}
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((doneButton, taskIndex) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });

        const removeButtons = document.querySelectorAll(".js-removeTaskButton");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    }

    const addNewTask = (newTaskContent) => {
        if (newTaskContent === "") {
            return;
        }

        tasks.push({
            content: newTaskContent,
        });
        document.querySelector(".js-newTask").value = "";
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        addNewTask(newTaskContent);
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}