import React from "react";

function Todo({todo,index,deleteTodo,doneTodo,undoTodo}) {
    console.log("Todo:" +todo.task);
    return (
        <div className="listDiv">
            <li >
            <div className="eachdiv">
            <h4 style={{textDecoration:todo.stats?"line-through":"none",fontFamily:"arial"}}>{todo.task}</h4>
            <button onClick={()=>(doneTodo(index))}>Done</button>
            <button onClick={()=>(undoTodo(index))}>Undo</button>
            <button>Edit</button>
            <button onClick={()=>(deleteTodo(index))}>Delete</button>
            </div>
            
        </li>
        </div>
        
    )
}

export default Todo;