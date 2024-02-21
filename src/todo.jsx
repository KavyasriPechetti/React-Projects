import React from "react";

function Todo(props) {
    console.log("Todo");
    return (
        <li>
            {props.todo}
            <button onClick={()=>(props.deleteTodo(props.index))}>Delete</button>
            <button>Done</button>
            <button>Undo</button>

        </li>
    )
}

export default React.memo(Todo);