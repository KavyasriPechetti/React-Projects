import React from "react";

function Todo({todo,index,deleteTodo,doneTodo,undoTodo}) {
    console.log("Todo");
    return (
        <li style={{textDecoration:todo.stats?"line-through":"none"}}>
            {todo.task}
            <button onClick={()=>(deleteTodo(index))}>Delete</button>
            <button onClick={()=>(doneTodo(index))}>Done</button>
            <button onClick={()=>(undoTodo(index))}>Undo</button>

        </li>
    )
}

export default React.memo(Todo);