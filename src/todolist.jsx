import React from "react";
import Todo from "./todo";
function Todolist() {
    const [todos,setTodos]=React.useState([
        {task:"Go to mall",stats:false},
        {task:"Buy chocolates",stats:false},
        {task:"buy icecream",stats:false},
        {task:"buy dil kush",stats:false}]);

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
            <h1>TodoList</h1>
            <input type="text" id="inp"/>
            <button onClick={()=>{addTodo()}}>Add</button>
            {
                todos.map((todo,i)=>{
                    return <Todo todo={todo} index={i} deleteTodo={deleteTodo} doneTodo={doneTodo} undoTodo={undoTodo}></Todo>
                        
                    
                })
            }
        </div>
    )
}
export default React.memo(Todolist);