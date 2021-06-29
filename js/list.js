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

    const bindEvents = () => {
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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__item">
                <button class="tasks__button js-done tasks__button--toggleDone">
                ${task.done ? '✓' : ''}
                </button>
                <span class="tasks__content${task.done ? ' tasks__content--done' : ''}">
                ${task.content}
                </span>
                <button class="tasks__button tasks__button--remove js-removeTaskButton">🗑</button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
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
        const newTaskField = document.querySelector(".js-newTask");
        event.preventDefault();
        const newTaskContent = newTaskField.value.trim();
        addNewTask(newTaskContent);
        newTaskField.focus();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}