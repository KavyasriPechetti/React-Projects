import React from "react";
import Todo from "./todo";
function Todolist() {
    const [todos,setTodos]=React.useState([
        ]);

    console.log("Hello");

    function addTodo() {
        const newTodo=document.getElementById("inp").value;
        setTodos([...todos,{task:newTodo,stats:false}]);
    }

    function deleteTodo(ind) {
        var temp=[...todos];
        temp.splice(ind,1);
        setTodos([...temp]);
    }

    function doneTodo(ind) {
        const temp=[...todos];
        temp[ind].stats=true;
        setTodos([...temp]);
    }

    function undoTodo(ind) {
        const temp=[...todos];
        temp[ind].stats=false;
        setTodos([...temp]);
    }

    return (
        <div className="mybox">
            <div className="head">
            <div>
            <h1 style={{fontFamily:"arial"}}>List your Todos</h1>
            
            </div>
            <div>
                <span>All :</span>
                <span>Completed :</span>
                <span>Pending :</span>
            </div>
            </div>
            <div className="input">
            <input type="text" id="inp" placeholder="Enter your task"/>
            <button onClick={()=>{addTodo()}}>Add</button>
            </div>
            
           
            {
                todos.map((todo,i)=>{
                    return <Todo todo={todo} index={i} deleteTodo={deleteTodo} doneTodo={doneTodo} undoTodo={undoTodo}></Todo>
                        
                    
                })
            }
        </div>
    )
}
export default React.memo(Todolist);