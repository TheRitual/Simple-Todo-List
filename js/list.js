{

    const tasks = [{
            content: "Nagrać lekcję",
            done: false,
        },
        {
            content: "Zjeść pizzę",
            done: true,
        },
    ]

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? ' style="text-decoration: line-through"' : ''}>
                ${task.content}
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const taskField = document.querySelector(".js-newTask");

            const newTaskContent = taskField.value.trim();

            if (newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });

            taskField.value = "";

            render();
        });
    }

    init();
}