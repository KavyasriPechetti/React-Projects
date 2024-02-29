import React from "react";
import { connect } from "react-redux";

function Todolist(props) {
    var [newtodo,setNewtodo]=React.useState("");
    var [filter,setFilter]=React.useState(null);
   
    function updateNewTodo(e) {
        setNewtodo(e.target.value)
    }

    function updatefilter(e) {
        props.dispatch({type:e.target.value})
    }
   
    return (
        <div className="betterview">
            <h1>Todolist</h1>
            <input type="text" onChange={(event)=>{updateNewTodo(event)}}/>
            <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:newtodo})}}>Add Task</button><br/><br/>
            <input type="radio" name="filter" value="ALL" onChange={(event)=>{updatefilter(event)}}/>:All Todos
            <input type="radio" name="filter" value="DONE"  onChange={(event)=>{updatefilter(event)}}/>:Completed
            <input type="radio" name="filter" value="NOTDONE"  onChange={(event)=>{updatefilter(event)}}/>:Not Completed

            
            <ul>
            {
                props.todolist.filteredTodos.map((todo,i)=>{
                    return (
                        <li key={i}>
                           <b style={{textDecoration:todo.status&& "line-through"}}>{todo.title}</b>
                           <button onClick={()=>{props.dispatch({type:"DELETETODO",payload:i})}}>Delete</button>
                           <button onClick={()=>{props.dispatch({type:"DONETODO",payload:i})}}>Done</button>
                           <button onClick={()=>{props.dispatch({type:"UNDOTODO",payload:i})}}>Undo</button>


                        </li>
                    )
                })
            }
            </ul>
           
        </div>
    )
}

export default connect(store=>store) (Todolist);