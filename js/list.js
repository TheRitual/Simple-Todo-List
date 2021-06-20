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
            <li>
                ${task.content}
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const init = () => {
        render();
    }

    init();
}