import { useRef, useState } from "react";

export const useFormActions = (addNewTaskFunction) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        inputRef.current.focus();
        setNewTaskContent(newTaskContent.replace(/ +(?= )/g, '').trim());
        if (newTaskContent !== "") {
            addNewTaskFunction(newTaskContent);
            setNewTaskContent("");
        }

    }

    return { onFormSubmit, newTaskContent, setNewTaskContent, inputRef }
}