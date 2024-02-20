import React from "react";

function Todo(props) {
    return (
        <li>{props.todo}
            <button>Delete</button>
            <button>Done</button>
            <button>Undo</button>

        </li>
    )
}

export default Todo;